import { Images } from "../../themes";
import React, { Component } from "react";
import { View, Image, Text, TouchableOpacity, TextInput, ImageBackground, StatusBar} from "react-native";
import { connect } from "react-redux";
import globalStyle from '../globalStyle';
import styles from './styles';

const MyStatusBar = ({backgroundColor, ...props}) => (
    <View style={[globalStyle.statusBar, { backgroundColor }]}>
        <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
);
class ChooseSubscription extends Component {
    static navigationOptions = {
        header: false,
        gesturesEnabled: false,
    };

    constructor() {
        super();
        this.state = {
            subType: '249',
            type: 'oneYear',
            oneYearColor: '#e76065',
            oneYearBorder: 1,
            threeYearColor: '#fff',
            threeYearBorder: 0,
        };
    }

    goBack() {
        this.props.navigation.goBack();
    }

    handleSubmit = (amount, type) => {
        this.props.navigation.navigate("Visa", {action: "renewSubs", amount, type});
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
                    <Text style={styles.bigText}>Choose a subscription</Text>
                    <Text style={styles.smallText}>Choose a subscription that fits your needs</Text>
                </View>

                <View style={styles.inputView}>
                    <TouchableOpacity onPress={() => this.setState({type: "oneYear", subType: '249', OneYearColor: '#e76065', threeYearColor: '#fff', oneYearBorder: 1, threeYearBorder: 0})}>
                        <TextInput
                        value='1 year 249 NOK'
                        style={[styles.textInput, {borderColor: this.state.oneYearColor, borderWidth: this.state.oneYearBorder}]}
                        pointerEvents="none"
                        editable={false}
                        selectTextOnFocus={false}
                        />
                    </TouchableOpacity>
                </View>

                <View style={styles.inputView}>
                    <TouchableOpacity onPress={() => this.setState({type: "threeYear", subType: '499', OneYearColor: '#fff', threeYearColor: '#e76065', oneYearBorder: 0, threeYearBorder: 1})}>
                        <TextInput
                        value='3 years 499 NOK'
                        style={[styles.textInput, {borderColor: this.state.threeYearColor, borderWidth: this.state.threeYearBorder}]}
                        pointerEvents="none"
                        editable={false}
                        selectTextOnFocus={false}
                        />
                    </TouchableOpacity>
                        <View style={styles.absoluteView}>
                            <Text style={styles.miniText}>-33%</Text>
                        </View>
                </View>
                <View style={styles.remainView}>
                    <ImageBackground source={Images.background} style={styles.btnBackground}>
                        <TouchableOpacity onPress={() => this.handleSubmit(this.state.subType, this.state.type)} style={styles.pay}>
                            <Text style={styles.whiteText}>Pay {this.state.subType} NOK</Text>
                        </TouchableOpacity>
                    </ImageBackground>
                </View>
            </View>
        );
    }
}

const mapStateToProps = ({ childrenReducer }) => {
    const { childId } = childrenReducer;
    return { childId };
};

export default connect(mapStateToProps, null)(ChooseSubscription);
