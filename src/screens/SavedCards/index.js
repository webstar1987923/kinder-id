import _ from 'lodash';
import React, { Component } from "react";
import { View, Image, Text, TouchableOpacity, Alert } from "react-native";
import { connect } from 'react-redux';
import { Images } from "../../themes";
import globalStyle from '../globalStyle';
import styles from './styles';
import ListItem from './ListItem';
import MyStatusBar from '../../components/MyStatusBar';

class SavedCards extends Component {
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
    deleteCard = () => {
        // const cards = this.state.cards;

        // _.remove(cards, this.state.cardId);
        // console.log('new cards', cards);
        const cards = _.remove(this.state.cards, card => card._id !== this.state.cardId);
        console.log('old cards', cards);
        this.setState({cards, cardId: null});
    }

    onDelete() {
        Alert.alert(
            'Confirm',
            `Are you sure you want to delete this card ?`,
            [
                {text: 'No', onPress: () => {}, style: 'cancel'},
                {text: 'Yes', onPress: () => this.deleteCard()},
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
                        this.state.cards.map((card, index) => <ListItem
                            key={index}
                            card={card}
                            cardId={this.state.cardId}
                            setCardId={this.setCardId}
                        />)
                    }
                </View>
                <View style={globalStyle.remainView}>
                    <TouchableOpacity onPress={this.onDelete.bind(this)} style={globalStyle.shadowButton}>
                        <Text style={globalStyle.buttonText}>Delete</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
const mapStateToProps = ({childrenReducer }) => {
    const { card } = childrenReducer;
    return {card};
};
export default connect(mapStateToProps, null)(SavedCards);
