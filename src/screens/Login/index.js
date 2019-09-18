import React, { Component } from "react";
import { View, Image, Text, TouchableOpacity, TextInput, ImageBackground, KeyboardAvoidingView} from "react-native";
import {connect} from 'react-redux';
import { Images } from "../../themes";
import globalStyle from '../globalStyle';
import styles from './styles';
import Spinner from '../../components/spinner';
import { login } from '../../actions';
import MyStatusBar from '../../components/MyStatusBar';
import ErrorContainer from '../../components/ErrorContainer';

class Login extends Component {

    static navigationOptions = () => ({
            header: null,
            gesturesEnabled: false,
        })

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            loading: false,
            showError: ""
        };
    }

    handleSubmit = async() => {
        const { email } = this.state;
        this.setState({showError: ""});

        if (email === "") {
            this.setState({showError: "Email should be filled"});
            return;
        }
        this.setState({loading: true});
        await this.props.login(this.state.email);
        const { status, error } = this.props;
        this.setState({loading: false});
        if (error) {
            return this.setState({showError: error});
        }
        switch (status) {
            case "NEW":
            case "INVITED":
                return this.props.navigation.navigate("Verify");
            default:
                return this.props.navigation.navigate("Password");
        }
    }

    renderButton = () => {
        if (this.state.loading) {
            return <Spinner />;
        }
        return (
            <TouchableOpacity onPress={this.handleSubmit} style={globalStyle.innerButton}>
                <Text style={globalStyle.innerButtonText}>Next</Text>
            </TouchableOpacity>
        );
    }

    render() {
        return (
            <View style={globalStyle.main} >
                {
                    this.state.showError ?
                    <View>
                        <MyStatusBar backgroundColor="white" />
                        <ErrorContainer
                            bgColor="white"
                            color="gray"
                            errMsg={this.state.showError}
                        />
                    </View>
                    : null
                }
                <ImageBackground source={Images.background} style={styles.container}>
                    <KeyboardAvoidingView style={styles.container} behavior="padding">
                        <Image source={Images.mark} style={styles.markImage} />
                        <View style={styles.marginView1}>
                            <Text style={styles.commonText}>E-mail address</Text>
                        </View>
                        <View style={styles.marginView5}>
                            <TextInput
style={globalStyle.commonTextInput}
                                underlineColorAndroid='transparent'
                                placeholder="example@mail.com"
                                keyboardType='email-address'
                                onChangeText={(email) => this.setState({email})}
                                value={this.state.email}
                                autoCapitalize="none"
                                autoCorrect={false}
                            />
                        </View>
                    </KeyboardAvoidingView>
                    <View style={styles.bottomView}>
                        <View style={styles.spinnerStyle}>
                            {this.renderButton()}
                        </View>
                        <View style={styles.rowTextView}>
                            <Text style={styles.smallText}>By pressing next you accept our</Text>
                            <Text style={styles.underlineSmallText}>Terms and conditions</Text>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}
const mapStateToProps = ({ auth }) => {
    const { userEmail, status, error } = auth;
    return { userEmail, status, error };
};

export default connect(mapStateToProps, {login})(Login);
