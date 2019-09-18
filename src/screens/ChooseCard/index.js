import React, { Component } from "react";
import { View, Image, Text, TouchableOpacity, Alert, AsyncStorage } from "react-native";
import { connect } from 'react-redux';
import { Images } from "../../themes";
import globalStyle from '../globalStyle';
import styles from './styles';
import ListItem from './ListItem';
import MyStatusBar from '../../components/MyStatusBar';
import { replaceID } from "../../actions/childrenActions";
import {payRenewSubscription} from "../../actions/paymentActions";

class ChooseCard extends Component {
    static navigationOptions = {
        header: false,
        gesturesEnabled: false,
    };
    constructor(props) {
        super(props);
        this.state = ({
            cards: [
                {_id: 0, cardName: 'Mastercard X.XX11'},
            ],
            cardId: 0,
            disabled: false
        });
    }
    componentDidMount() {
        const { last4, brand } = this.props.card;
        const cards = this.state.cards;
        cards.push({
            _id: 1,
            cardName: `${brand} XX.${last4}`
        });
        this.setState({cards});
    }


    setCardId = (id) => {
        this.setState({ cardId: id});
    }
    addChildPayment = async () => {
        const {amount, action} = this.props.navigation.state.params;
        this.setState({disabled: true});
        const {
            childName,
            wristband,
            uri,
            renewChildId
        } = this.props;

        if (action && action === "renewSubs") {
            const {type} = this.props.navigation.state.params;
            await this.props.payRenewSubscription(type, renewChildId);
            if (this.props.renewError) {
                console.log('error', this.props.renewError);
            }
            const {last4, brand, orderNo} = this.props.renewResponse;
            return this.props.navigation.navigate('Receipt', {amount, visa: `${brand} X.${last4}`, orderNo});
        }
        if (action && action === "replace") {
            await this.props.replaceID(this.props.replaceChildId, this.props.color, null, true); //TODO
            if (this.props.paymentError) {
                return this.setState({ showError: this.props.paymentError });
            }
            return this.props.navigation.navigate('Receipt', {amount, visa: 'Visa X.4242', orderNo: '320'});
        }
        const token = await AsyncStorage.getItem("kinderID_sessionToken");
        const apiUrl = "https://api.kinder-id.com/mobile/addchildwithcard";
        const newData = new FormData();
        if (uri) {
            newData.append('avatar', {
                uri,
                type: 'image/jpg',
                name: wristband
            });
        }

        newData.append('childrenName', childName);
        newData.append('wristband', wristband);
        try {
            const response = await fetch(apiUrl, {
            method: 'post',
            body: newData,
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${token}`
            }
            });
            const parsedResponse = await response.json();
            this.setState({disabled: false});
            return this.props.navigation.navigate('Receipt', {amount: '776', visa: `X.${this.props.card.last4}`, orderNo: parsedResponse.orderNo});
        } catch (err) {
            console.log("An error occured while registering");
        }
    }

    handelPayment = async () => this.addChildPayment()

    confirmPayment = () => {
        const {amount} = this.props.navigation.state.params;
        Alert.alert(
            'Confirm',
            `Are you sure you want to pay ${amount} ?`,
            [
              {text: 'No', onPress: () => {}, style: 'cancel'},
              {text: 'Yes', onPress: () => this.addChildPayment()},
            ],
            { cancelable: false }
        );
    }

    goBack() {
        this.props.navigation.goBack();
    }

    render() {
        return (
            <View style={globalStyle.container}>
                <MyStatusBar backgroundColor="white" />
                <View style={globalStyle.headerView}>
                    <TouchableOpacity onPress={this.goBack.bind(this)}>
                        <Image source={Images.arrow_back} style={globalStyle.arrow_back} />
                    </TouchableOpacity>
                    <View>
                        <Image source={Images.kmark} style={globalStyle.kmark} />
                    </View>
                    <View />
                </View>
                <View style={styles.marginSecondView}>
                    <Text style={styles.titleText}>Choose card</Text>
                </View>
                <View style={styles.listContainer}>
                    {
                        this.state.cards.map((card, index) =>
                        <ListItem
                            key={index}
                            card={card}
                            cardId={this.state.cardId}
                            setCardId={this.setCardId}
                        />)
                    }
                </View>
                <View style={globalStyle.remainView}>
                    <TouchableOpacity
                        style={globalStyle.shadowButton}
                        onPress={this.confirmPayment}
                        disabled={this.state.disabled}
                    >
                        <Text style={globalStyle.buttonText}>Pay</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
const mapStateToProps = ({ reg, auth, pay, childrenReducer }) => {
    const {
        childName,
        wristband,
        uri,
        replaceChildId,
        color,
        renewChildId,
        renewResponse,
        renewError
    } = reg;
    const { paymentError, card } = childrenReducer;
    const { userEmail, status } = auth;
    const { stripeToken, stripeError } = pay;
    return {
        userEmail,
        status,
        stripeToken,
        stripeError,
        childName,
        wristband,
        uri,
        replaceChildId,
        color,
        paymentError,
        card,
        renewChildId,
        renewError,
        renewResponse
    };
};
export default connect(mapStateToProps, {replaceID, payRenewSubscription})(ChooseCard);
