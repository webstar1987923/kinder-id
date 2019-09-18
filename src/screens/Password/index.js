import React, { Component } from "react";
import {
    View,
    Image,
    Text,
    TouchableOpacity,
    TextInput,
    KeyboardAvoidingView,
    Keyboard,
    AsyncStorage
} from "react-native";
import { connect } from "react-redux";
import { Images } from "../../themes";
import globalStyle from '../globalStyle';
import styles from "./styles";
import { authorize } from "../../actions";
import registerPushNotification from "../../services/registerPushNotification";
import ErrorContainer from '../../components/ErrorContainer';
import MyStatusBar from '../../components/MyStatusBar';

class Password extends Component {
    static navigationOptions = {
        header: false,
        gesturesEnabled: false,
    };

    constructor(props) {
        super(props);
        this.state = {
            num1: "",
            num2: "",
            num3: "",
            num4: "",
            num5: "",
            num6: "",
            showError: false
        };
    }

    focusNextField(nextField) {
        this.refs[nextField].focus();
    }

    handleSubmit = async num6 => {
        const { num1, num2, num3, num4, num5 } = this.state;
        const password = num1 + num2 + num3 + num4 + num5 + num6;
        const { userEmail } = this.props;
        this.setState({ showError: false });
        await this.props.authorize(userEmail, password);
        const { aError, token, status } = this.props;
        if (aError) {
            this.setState({ showError: aError });
            return this.setState({
                num1: "",
                num2: "",
                num3: "",
                num4: "",
                num5: "",
                num6: "",
            }, this.focusNextField('1'));
        }
        if (token) {
            Keyboard.dismiss();
            await AsyncStorage.setItem("kinderID_sessionToken", token);
            await registerPushNotification(token);
        }
        switch (status) {
            case "USER":
            case "GAURDIAN":
                return this.props.navigation.navigate("MainScreen");
            case "NOCHILD":
                return this.props.navigation.navigate("AddPicture");
            default:
                break;
        }
    };

    render() {
        return (
            <KeyboardAvoidingView style={globalStyle.container} behavior="padding">
                <View style={globalStyle.container}>
                    <MyStatusBar backgroundColor="white" />
                    <View style={globalStyle.headerView}>
                        <View />
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
                    <View style={styles.mainView}>
                        <Text style={styles.loginText}>Log in</Text>
                        <Text style={styles.codeText}>
                            Enter your security code to log in
                        </Text>
                        <View style={styles.inputView}>
                            <TextInput
                                ref="1"
                                style={styles.eachView}
                                secureTextEntry
                                autoFocus
                                keyboardType="numeric"
                                autoCorrect={false}
                                enablesReturnKeyAutomatically
                                blurOnSubmit={false}
                                maxLength={1}
                                value={this.state.num1}
                                onChangeText={num1 => {
                                    this.setState({ num1 });
                                    if (num1 && num1.length == 1) {
                                        this.focusNextField("2");
                                    }
                                }}
                                onSubmitEditing={() => this.focusNextField("2")}
                            />
                            <TextInput
                                ref="2"
                                style={styles.eachView}
                                secureTextEntry
                                keyboardType="numeric"
                                autoCorrect={false}
                                enablesReturnKeyAutomatically
                                blurOnSubmit={false}
                                maxLength={1}
                                value={this.state.num2}
                                onChangeText={num2 => {
                                    this.setState({ num2 });
                                    if (num2 && num2.length == 1) {
                                        this.focusNextField("3");
                                    }
                                }}
                                onSubmitEditing={() => this.focusNextField("3")}
                            />
                            <TextInput
                                ref="3"
                                style={styles.eachView}
                                secureTextEntry
                                keyboardType="numeric"
                                autoCorrect={false}
                                enablesReturnKeyAutomatically
                                blurOnSubmit={false}
                                maxLength={1}
                                value={this.state.num3}
                                onChangeText={num3 => {
                                    this.setState({ num3 });
                                    if (num3 && num3.length == 1) {
                                        this.focusNextField("4");
                                    }
                                }}
                                onSubmitEditing={() => this.focusNextField("4")}
                            />
                            <TextInput
                                ref="4"
                                style={styles.eachView}
                                secureTextEntry
                                keyboardType="numeric"
                                autoCorrect={false}
                                enablesReturnKeyAutomatically
                                blurOnSubmit={false}
                                maxLength={1}
                                value={this.state.num4}
                                onChangeText={num4 => {
                                    this.setState({ num4 });
                                    if (num4 && num4.length == 1) {
                                        this.focusNextField("5");
                                    }
                                }}
                                onSubmitEditing={() => this.focusNextField("5")}
                            />
                            <TextInput
                                ref="5"
                                style={styles.eachView}
                                secureTextEntry
                                keyboardType="numeric"
                                autoCorrect={false}
                                enablesReturnKeyAutomatically
                                blurOnSubmit={false}
                                maxLength={1}
                                value={this.state.num5}
                                onChangeText={num5 => {
                                    this.setState({ num5 });
                                    if (num5 && num5.length == 1) {
                                        this.focusNextField("6");
                                    }
                                }}
                                onSubmitEditing={() => this.focusNextField("6")}
                            />
                            <TextInput
                                ref="6"
                                style={styles.eachView}
                                secureTextEntry
                                keyboardType="numeric"
                                autoCorrect={false}
                                enablesReturnKeyAutomatically
                                blurOnSubmit={false}
                                maxLength={1}
                                value={this.state.num6}
                                onChangeText={num6 => {
                                    this.setState({ num6 });
                                    if (num6 && num6.length == 1) this.handleSubmit(num6);
                                }}
                                onSubmitEditing={() => this.handleSubmit(num6)}
                            />
                        </View>
                        <TouchableOpacity onPress={() => {}} style={styles.forgotButton}>
                            <Text style={styles.forgotText}>Forgotten password?</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        );
    }
}
const mapStateToProps = ({ auth }) => {
    const { userEmail, aError, token, status } = auth;
    return { userEmail, aError, token, status };
};

export default connect(mapStateToProps, { authorize })(Password);
