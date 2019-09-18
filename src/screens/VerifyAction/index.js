import React, { Component } from "react";
import { View, Image, Text, TouchableOpacity, TextInput, Keyboard, KeyboardAvoidingView, AsyncStorage} from "react-native";
import {connect} from 'react-redux';
import { Images } from "../../themes";
import globalStyle from '../globalStyle';
import styles from './styles';
import { updateChildData, validatePassword, deleteChildren, updateProfile, deleteProfile, resetGoNext } from '../../actions/childrenActions';
import ErrorContainer from '../../components/ErrorContainer';
import MyStatusBar from '../../components/MyStatusBar';


class Validate extends Component {
    static navigationOptions = {
        header: false,
        gesturesEnabled: false,
    };

    constructor(props) {
        super(props);
        this.resetInput = this.resetInput.bind(this);
        this.state = { num1: "", num2: "", num3: "", num4: "", num5: "", num6: "", showError: ""};
    }

    focusNextField(nextField) {
        this.refs[nextField].focus();
    }
    resetInput() {
        this.setState({
            num1: "",
            num2: "",
            num3: "",
            num4: "",
            num5: "",
            num6: "",
        }, this.focusNextField('1'));
    }

    handleSubmit = async (num6, action) => {
        const { num1, num2, num3, num4, num5 } = this.state;
        const password = num1 + num2 + num3 + num4 + num5 + num6;
        const { childId, childrenName, wristband } = this.props;
        this.setState({showError: ""});
        switch (action) {
            case "update": {
                await this.props.updateChildData(password, childId, childrenName, wristband);
                const { passwordError, goNext } = this.props;
                if (goNext === true) {
                    this.props.resetGoNext();
                    Keyboard.dismiss();
                    return this.props.navigation.navigate('MainScreen');
                }
                this.resetInput();
                return this.setState({showError: passwordError});
            }
            case "replace": {
                await this.props.validatePassword(password);
                const { passwordError, goNext } = this.props;
                if (goNext === true) {
                    this.props.resetGoNext();
                    Keyboard.dismiss();
                    return this.props.navigation.navigate('ColorPicker');
                }
                this.resetInput();
                return this.setState({showError: passwordError});
            }
            case "delete": {
                const { childId } = this.props.navigation.state.params;
                await this.props.deleteChildren(password, childId);
                const { passwordError, goNext } = this.props;
                if (goNext === true) {
                    this.props.resetGoNext();
                    Keyboard.dismiss();
                    return this.props.navigation.navigate('MainScreen');
                }
                this.resetInput();
                return this.setState({showError: passwordError});
            }
            case "update your profile": {
                const { newPassword } = this.props.navigation.state.params;
                await this.props.updateProfile(password, newPassword, this.props);
                const { passwordError, goNext, passwordChanged } = this.props;
                if (goNext === true) {
                    if (passwordChanged) {
                        this.props.resetGoNext();
                        this.props.socket.disconnect();
                        await AsyncStorage.removeItem("kinderID_sessionToken");
                        return this.props.navigation.navigate('Login');
                    }
                    this.props.resetGoNext();
                    Keyboard.dismiss();
                    return this.props.navigation.navigate('MainScreen');
                }
                this.resetInput();
                return this.setState({showError: passwordError});
            }
            case "delete your profile": {
                await this.props.deleteProfile(password);
                const { passwordError, goNext } = this.props;
                console.log('error message', passwordError);

                if (goNext === true) {
                    Keyboard.dismiss();
                    this.props.resetGoNext();
                    this.props.socket.disconnect();
                    await AsyncStorage.removeItem("kinderID_sessionToken");
                    return this.props.navigation.navigate('Reunited', {profileDeleted: true});
                }
                this.resetInput();
                return this.setState({showError: passwordError});
            }
            default:
                break;
        }
    }

    render() {
        const { action, name } = this.props.navigation.state.params;
        return (
            <KeyboardAvoidingView style={globalStyle.container} behavior="padding">
                <View style={globalStyle.container}>
                    <MyStatusBar backgroundColor="white" />
                    <View style={globalStyle.headerView}>
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
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
                    <View style={styles.mainView}>
                        <Text style={styles.loginText}>Are you sure?</Text>
                        <Text style={styles.codeText}>Enter your security code to {action} {name}</Text>
                        <View style={styles.inputView}>
                            <TextInput
                                ref='1'
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
                                    this.setState({num1});
                                    if (num1 && num1.length === 1) {
                                        this.focusNextField('2');
                                    }
                                }}
                                onSubmitEditing={() => this.focusNextField('2')}
                            />
                            <TextInput
                                ref='2'
                                style={styles.eachView}
                                secureTextEntry
                                keyboardType="numeric"
                                autoCorrect={false}
                                enablesReturnKeyAutomatically
                                blurOnSubmit={false}
                                maxLength={1}
                                value={this.state.num2}
                                onChangeText={num2 => {
                                    this.setState({num2});
                                    if (num2 && num2.length === 1) {
                                        this.focusNextField('3');
                                    }
                                }}
                                onSubmitEditing={() => this.focusNextField('3')}
                            />
                            <TextInput
                                ref='3'
                                style={styles.eachView}
                                secureTextEntry
                                keyboardType="numeric"
                                autoCorrect={false}
                                enablesReturnKeyAutomatically
                                blurOnSubmit={false}
                                maxLength={1}
                                value={this.state.num3}
                                onChangeText={num3 => {
                                    this.setState({num3});
                                    if (num3 && num3.length === 1) {
                                        this.focusNextField('4');
                                    }
                                }}
                                onSubmitEditing={() => this.focusNextField('4')}
                            />
                            <TextInput
                                ref='4'
                                style={styles.eachView}
                                secureTextEntry
                                keyboardType="numeric"
                                autoCorrect={false}
                                enablesReturnKeyAutomatically
                                blurOnSubmit={false}
                                maxLength={1}
                                value={this.state.num4}
                                onChangeText={num4 => {
                                    this.setState({num4});
                                    if (num4 && num4.length === 1) {
                                        this.focusNextField('5');
                                    }
                                }}
                                onSubmitEditing={() => this.focusNextField('5')}
                            />
                            <TextInput
                                ref='5'
                                style={styles.eachView}
                                secureTextEntry
                                keyboardType="numeric"
                                autoCorrect={false}
                                enablesReturnKeyAutomatically
                                blurOnSubmit={false}
                                maxLength={1}
                                value={this.state.num5}
                                onChangeText={num5 => {
                                    this.setState({num5});
                                    if (num5 && num5.length === 1) {
                                        this.focusNextField('6');
                                    }
                                }}
                                onSubmitEditing={() => this.focusNextField('6')}
                            />
                            <TextInput
                                ref='6'
                                style={styles.eachView}
                                secureTextEntry
                                keyboardType="numeric"
                                autoCorrect={false}
                                enablesReturnKeyAutomatically
                                blurOnSubmit={false}
                                maxLength={1}
                                value={this.state.num6}
                                onChangeText={num6 => {
                                    this.setState({num6});
                                    if (num6 && num6.length === 1) { this.handleSubmit(num6, action); }
                            }}

                            />
                        </View>
                        {/* <TouchableOpacity onPress={() => {}} style={styles.forgotButton}>
                            <Text style={styles.forgotText}>Forgotten password?</Text>
                        </TouchableOpacity>   */}
                    </View>
                </View>
            </KeyboardAvoidingView>
        );
    }
}
const mapStateToProps = ({ childrenReducer, sockets }) => {
    const { parentName, mobile, email, address, country, postalCode, childId, childrenName, wristband, goNext, passwordError, passwordChanged } = childrenReducer;
    const { socket } = sockets;
    return { parentName, mobile, email, address, country, postalCode, childId, childrenName, wristband, goNext, passwordError, passwordChanged, socket };
};

export default connect(mapStateToProps, {updateChildData, validatePassword, deleteChildren, updateProfile, deleteProfile, resetGoNext})(Validate);
