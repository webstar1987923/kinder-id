import React, { Component } from "react";
import { View, Image, Text, TouchableOpacity, ImageBackground} from "react-native";
import { Images } from "../../themes";
import { connect } from "react-redux";
import globalStyle from '../globalStyle';
import styles from './styles';
import { resetForm } from "../../actions/regActions";
import MyStatusBar from '../../components/MyStatusBar';

class Receipt extends Component {
    static navigationOptions = {
        header: false,
        gesturesEnabled: false,
    };

    goFinish() {
        this.props.resetForm();
        this.props.navigation.navigate('MainScreen');
    }

    render() {
        const {amount, visa, orderNo} = this.props.navigation.state.params;
        return (
            <View style={globalStyle.container}>
                <MyStatusBar backgroundColor="white" />
                <View style={globalStyle.headerView}>
                    <View />
                    <View>
                        <Image source={Images.kmark} style={globalStyle.kmark} />
                    </View>
                    <View />
                </View>
                <ImageBackground source={Images.background} style={globalStyle.container}>
                    <ImageBackground source={Images.topback} style={styles.topback}>
                        <View style={styles.marginSecondView}>
                            <Text style={styles.bigText}>Safety innovation AS</Text>
                            <Text style={styles.smallText}>917 534 136 VAT</Text>
                        </View>
                        <View style={styles.marginRowSecondView}>
                            <Text style={styles.hugeText}>{amount} NOK</Text>
                            <Text style={styles.smallText}>(25% VAT: {(Number(amount) * 0.25).toFixed(2)} NOK)</Text>
                            <Text style={styles.smallText1}>Thanks you for your order</Text>
                            <Text style={styles.smallText}>Order ID: {orderNo}</Text>
                        </View>
                        <View style={styles.rowView}>
                            <Text style={styles.commonText}>Payment card</Text>
                            <Text style={styles.visaText}>Visa X.XX{visa}</Text>
                        </View>
                    </ImageBackground>
                    <View style={styles.remainView}>
                        <TouchableOpacity onPress={() => this.goFinish()} style={styles.pay}>
                            <Text style={styles.whiteText}>Finish</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}
export default connect(null, {resetForm})(Receipt);

