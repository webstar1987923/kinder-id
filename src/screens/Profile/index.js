import React, { Component } from "react";
import { View, Image, Text, TouchableOpacity, TextInput, Keyboard, AsyncStorage } from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {connect} from 'react-redux';
import CountryPicker from 'react-native-country-picker-modal';
import cca2List from 'react-native-country-picker-modal/data/cca2';
import {parentUpdate} from '../../actions/childrenActions';
import {updateNewUserProfile} from '../../actions/authActions';
import { Images } from "../../themes";
import globalStyle from '../globalStyle';
import styles from './styles';
import ErrorContainer from '../../components/ErrorContainer';
import MyStatusBar from '../../components/MyStatusBar';

class Profile extends Component {
    static navigationOptions = {
        header: false,
        gesturesEnabled: false,
    };
    constructor(props) {
        super(props);
        this.state = {
            showError: "",
            newPassword: null,
            repeatPassword: null
        };
    }

    componentDidMount() {
        if (this.props.status !== null) {
            this.props.parentUpdate({ prop: 'email', value: this.props.userEmail });
        }
    }

    onSelectCountry = value => {
        const { name, cca2, callingCode } = value;
        const newCountry = {
            name,
            countryCode: cca2,
            callingCode
        };
        this.props.parentUpdate({ prop: 'country', value: newCountry });
    }
    handleDelete = () => {
        this.props.navigation.navigate('VerifyAction', {action: "delete your profile", name: ""});
    }

    handleSave = async () => {
        const { parentName, mobile, email, address, country, postalCode, role } = this.props;
        let { status } = this.props;
        if (status === null) {
            status = role;
        }
        const { newPassword, confirmPassword } = this.state;
        const userData = {
            parentName,
            mobile,
            email,
            address,
            country,
            postalCode,
            status,
            password: newPassword
        };
        if (newPassword !== null && !confirmPassword !== null) {
            if (newPassword.length < 6) {
                return this.setState({showError: "Password must be six digits!"});
            }
            if (newPassword !== confirmPassword) {
                return this.setState({showError: "Password does not match!"});
            }
        }

        switch (status) {
            case "USER":
            case "NOCHILD":
            case "GAURDIAN":
                this.props.navigation.navigate('VerifyAction', {newPassword, action: "update your profile", name: ""});
                break;
            case "INVITED":
                await this.props.updateNewUserProfile(userData);
                if (this.props.token) {
                    Keyboard.dismiss();
                    await AsyncStorage.setItem("kinderID_sessionToken", this.props.token);
                    this.props.navigation.navigate('MainScreen');
                }
                break;
            case "NEW":
                await this.props.updateNewUserProfile(userData);
                if (this.props.token) {
                    this.props.navigation.navigate('AddPicture');
                }
                break;
            default:
                break;
        }
    }

    goBack() {
        this.props.navigation.goBack();
    }

    render() {
        const { status } = this.props;

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
                <KeyboardAwareScrollView>
                    <View style={globalStyle.formGroup}>
                        <Text style={globalStyle.labelText}>Full name</Text>
                        <TextInput
                            style={globalStyle.shadowTextInput}
                            underlineColorAndroid='transparent'
                            placeholder='Lisa Smith'
                            value={this.props.parentName}
                            onChangeText={value => this.props.parentUpdate({ prop: 'parentName', value })}
                            autoCorrect={false}
                        />
                    </View>
                    <View style={globalStyle.formGroup}>
                        <Text style={globalStyle.labelText}>Tlf. with countrycode</Text>
                        <TextInput
                            style={globalStyle.shadowTextInput}
                            underlineColorAndroid='transparent'
                            placeholder='(+47) 000 00 000'
                            value={this.props.mobile}
                            onChangeText={value => this.props.parentUpdate({ prop: 'mobile', value })}
                            autoCorrect={false}
                            keyboardType='numeric'
                        />
                    </View>
                    <View style={globalStyle.formGroup}>
                        <Text style={globalStyle.labelText}>E-mail address</Text>
                        <TextInput
                            style={globalStyle.shadowTextInput}
                            underlineColorAndroid='transparent'
                            placeholder='example@mail.com'
                            value={this.props.email}
                            onChangeText={value => this.props.parentUpdate({ prop: 'email', value })}
                            autoCorrect={false}
                            autoCapitalize="none"
                            keyboardType='email-address'
                        />
                    </View>
                    <View style={globalStyle.formGroup}>
                        <Text style={globalStyle.labelText}>Country</Text>
                        <View style={styles.shadowView}>
                            <CountryPicker
                                countryList={cca2List}
                                onChange={value => this.onSelectCountry(value)}
                                cca2={(this.props.country && this.props.country.countryCode) ? this.props.country.countryCode : "NO"}
                                translation="eng"
                            />
                            <Text style={styles.countryName}> {(this.props.country && this.props.country.name) ? this.props.country.name : 'Norway'}</Text>
                        </View>
                    </View>
                    <View style={globalStyle.formGroup}>
                        <Text style={globalStyle.labelText}>Address</Text>
                        <TextInput
                            style={globalStyle.shadowTextInput}
                            underlineColorAndroid='transparent'
                            placeholder='Dalsbergstien 6A'
                            value={this.props.address}
                            onChangeText={value => this.props.parentUpdate({ prop: 'address', value })}
                            autoCorrect={false}
                        />
                    </View>
                    <View style={globalStyle.formGroup}>
                        <Text style={globalStyle.labelText}>Postal code</Text>
                        <TextInput
                            style={globalStyle.shadowTextInput}
                            underlineColorAndroid='transparent'
                            placeholder='0170 Oslo'
                            value={this.props.postalCode}
                            onChangeText={value => this.props.parentUpdate({ prop: 'postalCode', value })}
                            autoCorrect={false}
                        />
                    </View>
                    <View style={globalStyle.formGroup}>
                        <Text style={globalStyle.labelText}>New password</Text>
                        <TextInput
                            style={globalStyle.shadowTextInput}
                            secureTextEntry
                            underlineColorAndroid='transparent'
                            placeholder='******'
                            value={this.state.newPassword}
                            onChangeText={newPassword => this.setState({ newPassword })}
                            keyboardType="numeric"
                            maxLength={6}
                        />
                    </View>
                    <View style={globalStyle.formGroup}>
                        <Text style={globalStyle.labelText}>Repeat new password</Text>
                        <TextInput
                            style={globalStyle.shadowTextInput}
                            secureTextEntry
                            underlineColorAndroid='transparent'
                            placeholder='******'
                            value={this.state.confirmPassword}
                            onChangeText={confirmPassword => this.setState({ confirmPassword })}
                            keyboardType="numeric"
                            maxLength={6}
                        />
                    </View>
                    <View style={globalStyle.footerView}>
                        <TouchableOpacity onPress={this.handleSave} style={globalStyle.shadowButton}>
                            <Text style={globalStyle.buttonText}>{status === null ? "Save" : "Next" }</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.textContainer} onPress={this.handleDelete} >
                            <Text style={styles.deleteText}>Delete Profile</Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAwareScrollView>
            </View>
        );
    }
}
const mapStateToProps = ({ childrenReducer, auth }) => {
    const { parentName, mobile, email, address, country, postalCode, role } = childrenReducer;
    const { userEmail, status, token } = auth;
    return { parentName, mobile, email, address, country, postalCode, userEmail, status, role, token };
};

export default connect(mapStateToProps, {parentUpdate, updateNewUserProfile})(Profile);
