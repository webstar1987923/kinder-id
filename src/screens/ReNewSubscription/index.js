import React, { Component } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { Images } from "../../themes";
import styles from './styles';
import globalStyle from '../globalStyle';
import MyStatusBar from '../../components/MyStatusBar';

class renewSubscription extends Component {
    static navigationOptions = {
        header: false,
        gesturesEnabled: false,
    };

    constructor(props) {
        super(props);
        this.state = ({
            select1: true,
            select2: false,
        });
    }

    goBack() {
        this.props.navigation.goBack();
    }

    goNext() {
        this.props.navigation.navigate('ChooseSubscription');
    }

    goSubscriptions() {
        this.props.navigation.navigate('Subscription');
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
                <View style={styles.main}>
                    <View style={styles.textbox}>
                        <Text style={styles.codeText}>Do you wish to renew your subscription now?</Text>
                    </View>
                    <View style={styles.rowView}>
                        <TouchableOpacity onPress={this.goNext.bind(this)} style={styles.greenButton}>
                            <Text style={styles.buttonText}>Yes</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.goSubscriptions.bind(this)} style={styles.redButton}>
                            <Text style={styles.buttonText}>No</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.remainView}>
                    <Text style={styles.selectcodeText}>Your subscriptioon will be renewed{'\n'}automatically on 11.11.2018</Text>
                </View>
            </View>
        );
    }
}
export default renewSubscription;
