import React, { Component } from "react";
import { View, Image, Text, TouchableOpacity, TextInput } from "react-native";
import { Images } from "../../themes";
import globalStyle from '../globalStyle';
import styles from './styles';
import ErrorContainer from '../../components/ErrorContainer';
import MyStatusBar from '../../components/MyStatusBar';

class Visa extends Component {
    static navigationOptions = {
        header: false,
        gesturesEnabled: false,
    };
    constructor(props) {
        super(props);
        this.state = {
            voucher: "",
            showError: ""
        };
    }

    goBack() {
        this.props.navigation.goBack();
    }

    goNext = (action, amount, type) => {
        this.props.navigation.navigate('Pay', {action, amount, type});
    }
    chooseCard = (action, amount, type) => {
        this.props.navigation.navigate('ChooseCard', {action, amount, type});
    }

    render() {
        const {amount, type, action} = this.props.navigation.state.params;
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
                <View style={styles.marginSecondView}>
                    <Text style={styles.codeText}>Total</Text>

                </View>
                <View style={styles.marginRowSecondView}>
                    <View style={styles.eachView}>
                        <Text style={styles.subText}>Sub-total</Text>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={styles.subText}>Delivery</Text>
                            <Text style={styles.miniText}>(international express freight)</Text>
                        </View>
                    </View>
                    <View style={styles.eachView}>
                        <Text style={styles.amountText}>{amount || 747} NOK</Text>
                        <Text style={styles.amountText}> 29  NOK</Text>
                    </View>
                </View>
                <View style={styles.marginColSecondView}>
                    <Text style={styles.subText}>We accept</Text>
                    <Image source={Images.visa} style={styles.visa} />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Enter voucher"
                        autoCorrect={false}
                        value={this.state.voucher}
                        onChangeText={voucher => this.setState({ voucher })}
                        underlineColorAndroid="transparent"
                    />
                </View>
                <View style={globalStyle.remainView}>
                    <TouchableOpacity onPress={() => this.goNext(action, amount, type)} style={globalStyle.shadowButton}>
                        <Text style={globalStyle.buttonText}>New Card</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.chooseCard(action, amount, type)} style={globalStyle.shadowButton}>
                        <Text style={globalStyle.buttonText}>Saved Card</Text>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }
}
export default Visa;
