import React, { Component } from "react";
import { View, Image, Text, TouchableOpacity, TextInput, ImageBackground, AsyncStorage, KeyboardAvoidingView, Keyboard } from "react-native";
import { connect } from "react-redux";
import { Images } from "../../themes";
import globalStyle from '../globalStyle';
import styles from './styles';
import Spinner from '../../components/spinner';
import { payNewStripe, renewSubscriptionWcard } from "../../actions/paymentActions";
import { replaceID } from "../../actions/childrenActions";
import ErrorContainer from '../../components/ErrorContainer';
import MyStatusBar from '../../components/MyStatusBar';

class Pay extends Component {
    static navigationOptions = {
        header: false,
        gesturesEnabled: false,
    };

    constructor(props) {
        super(props);
        this.state = {
            card: "",
            expiry: "",
            cvc: "",
            loading: false,
            showError: "",
            disable: false
        };
    }

    goBack() {
        this.props.navigation.goBack();
    }

    handleRegisterUser = async () => {
        Keyboard.dismiss();
        this.setState({ loading: true, disable: true });
        const {
            childName,
            wristband,
            uri,
            status,
            userEmail
        } = this.props;

        const { card, expiry, cvc } = this.state;
        const number = card.replace(/\s/g, "");
        const expMonth = Number(expiry.substring(0, 2));
        const expYear = Number(expiry.substring(3, 5));

        const params = {
            number,
            expMonth,
            expYear,
            cvc
          };
        await this.props.payNewStripe(params);
        if (this.props.stripeError) {
            return this.setState({ loading: false, disable: false, showError: this.props.stripeError });
        }
        const { stripeToken, renewChildId } = this.props;
        const {action, amount} = this.props.navigation.state.params;
        if (action && action === "renewSubs") {
            const {type} = this.props.navigation.state.params;
            await this.props.renewSubscriptionWcard(stripeToken, type, renewChildId);
            if (this.props.renewError) {
                console.log('error', this.props.renewError);
            }
            const {last4, brand, orderNo} = this.props.renewResponse;
            return this.props.navigation.navigate('Receipt', {amount, visa: `${brand} X.${last4}`, orderNo});
        }

        if (action && action === "replaceId") {
            await this.props.replaceID(this.props.replaceChildId, this.props.color, stripeToken, false);
            console.log('payment error', this.props.paymentError);
            if (this.props.paymentError) {
                return this.setState({ showError: this.props.paymentError });
            }
            // const {last4, brand, orderNo} = this.props.renewResponse;
            return this.props.navigation.navigate('Receipt', {amount, visa: 'Visa X.4242', orderNo: '250'});
            // return this.props.navigation.navigate('MainScreen');
        }
        if (status === "NEW") {
            const apiUrl = "https://api.kinder-id.com/mobile/payandregisteruser";
            const data = new FormData();
            if (uri) {
                data.append('avatar', {
                    uri,
                    type: 'image/jpg',
                    name: wristband
                });
            }

            const children = {
                childrenName: childName,
                wristband
            };
            data.append('email', userEmail);
            data.append('children', JSON.stringify(children));
            data.append('stripeToken', stripeToken);
            try {
                const response = await fetch(apiUrl, {
                    method: 'post',
                    body: data,
                    headers: {'Content-Type': 'multipart/form-data'}
                });
                const parsedResponse = await response.json();
                await AsyncStorage.setItem('kinderID_sessionToken', parsedResponse.token);
                const visa = card.slice(-2);
                return this.props.navigation.navigate('Receipt', {amount: '776', visa, orderNo: parsedResponse.orderNo});
            } catch (err) {
                // this.setState({message : "An error occured while registering"});
                return console.log('Error Payment', err);
            }
        }
        const token = await AsyncStorage.getItem("kinderID_sessionToken");
        const apiUrl = "https://api.kinder-id.com/mobile/addchildren";
        const newData = new FormData();
        if (uri) {
            newData.append('avatar', {
                uri,
                type: 'image/jpg',
                name: wristband
            });
        }
        newData.append('stripeToken', stripeToken);
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
            const visa = card.slice(-2);
            return this.props.navigation.navigate('Receipt', {amount: '776', visa, orderNo: parsedResponse.orderNo});
        } catch (err) {
            console.log("An error occured while registering");
        }
    };

    handleCard = card => {
        const v = card.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
        const matches = v.match(/\d{4,16}/g);
        const match = (matches && matches[0]) || "";
        const parts = [];
        for (let i = 0, len = match.length; i < len; i += 4) {
            parts.push(match.substring(i, i + 4));
        }
        if (parts.length) {
            this.setState({ card: parts.join(" ") });
        } else {
            this.setState({ card });
        }
    };
    handleExpiry = expiry => {
        const v = expiry.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
        const matches = v.match(/\d{2,5}/g);
        const match = (matches && matches[0]) || "";
        const parts = [];
        for (let i = 0, len = match.length; i < len; i += 2) {
            parts.push(match.substring(i, i + 2));
        }
        if (parts.length) {
            this.setState({ expiry: parts.join("/") });
        } else {
            this.setState({ expiry });
        }
    };
    render() {
        const {amount} = this.props.navigation.state.params;
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
                {
                    this.state.showError ?
                    <ErrorContainer
                        bgColor="#fd6d72"
                        color="white"
                        errMsg={this.state.showError}
                    />
                    : null
                }
                <KeyboardAvoidingView style={globalStyle.main} behavior="padding" >
                    <View style={globalStyle.main}>
                        <View style={styles.marginSecondView}>
                            <Text style={styles.codeText}>Payment</Text>
                            <View style={styles.stripe}>
                                <Text style={styles.miniText}> powered by </Text>
                                <Text style={styles.stripeText}>stripe</Text>
                            </View>
                        </View>
                        <View style={styles.marginRowSecondView}>
                            <TextInput
                                style={styles.cardNumText}
                                placeholder="Card number"
                                autoCorrect={false}
                                value={this.state.card}
                                onChangeText={card => this.handleCard(card)}
                                underlineColorAndroid="transparent"
                                keyboardType="number-pad"
                                maxLength={19}
                            />
                        </View>
                        <View style={styles.other}>
                            <View style={styles.marginColSecondView}>
                                <TextInput
                                    style={styles.commonText}
                                    placeholder="Expiration"
                                    autoCorrect={false}
                                    value={this.state.expiry}
                                    onChangeText={expiry => this.handleExpiry(expiry)}
                                    underlineColorAndroid="transparent"
                                    keyboardType="number-pad"
                                    maxLength={5}
                                />
                            </View>
                            <View style={styles.marginColSecondView}>
                                <TextInput
                                    style={styles.textInput}
                                    placeholder="CVC"
                                    autoCorrect={false}
                                    value={this.state.cvc}
                                    onChangeText={cvc => this.setState({ cvc })}
                                    underlineColorAndroid="transparent"
                                    keyboardType="number-pad"
                                    maxLength={3}
                                />
                            </View>
                        </View>
                        {
                            this.state.loading ?
                            <Spinner color="#333" />
                            : null
                        }
                    </View>
                    <ImageBackground source={Images.background} style={styles.btnBackground}>
                        <TouchableOpacity
                            style={styles.pay}
                            onPress={this.handleRegisterUser}
                            disabled={this.state.disable}
                        >
                            <Text style={styles.whiteText}>Pay {amount || 776} NOK</Text>
                        </TouchableOpacity>
                    </ImageBackground>
                </KeyboardAvoidingView>
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
    const { paymentError } = childrenReducer;
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
        renewChildId,
        renewError,
        renewResponse
    };
};

export default connect(mapStateToProps, {payNewStripe, replaceID, renewSubscriptionWcard})(Pay);
