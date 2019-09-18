import React, { Component } from "react";
import { Keyboard, View, Image, Text, TouchableOpacity, TextInput, ImageBackground, KeyboardAvoidingView} from "react-native";
import {connect} from 'react-redux';
import { Images } from '../../themes';
import globalStyle from '../globalStyle';
import styles from './styles';
import Spinner from '../../components/spinner';
import { verify } from '../../actions';
import MyStatusBar from '../../components/MyStatusBar';
import ErrorContainer from '../../components/ErrorContainer';

class Verify extends Component {
    static navigationOptions = () => ({
            header: false,
            gesturesEnabled: false,
        })

    constructor(props) {
        super(props);
        this.state = {
            vCode: "",
            loading: false,
            showError: ""
        };
    }

    componentDidMount() {
        Keyboard.dismiss();
    }
    handleSubmit = async () => {
        const { vCode } = this.state;
        const { userEmail} = this.props;
        this.setState({showError: ""});

        if (vCode === "") {
            this.setState({showError: "Code should be filled"});
            return;
        }
        this.setState({loading: true});
        await this.props.verify(userEmail, vCode);
        const { valid, vError } = this.props;
        this.setState({loading: false});
        if (valid) {
            return this.props.navigation.navigate("Profile");
        }
        return this.setState({showError: vError});
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
            <View style={globalStyle.main}>
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
                            <Text style={styles.commonText}>Verification code</Text>
                        </View>
                        <View style={styles.marginView5}>
                            <TextInput
                                style={globalStyle.commonTextInput}
                                underlineColorAndroid='transparent'
                                placeholder="XXXXXX"
                                keyboardType="numeric"
                                onChangeText={(vCode) => this.setState({vCode})}
                                value={this.state.vCode}
                                autoCapitalize="none"
                                autoCorrect={false}
                            />
                        </View>
                        <View style={styles.marginView4}>
                            <TouchableOpacity>
                                <Text style={styles.smallText}>Not Recieved code?</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.bottomView}>
                            <View style={styles.spinnerStyle}>
                                {this.renderButton()}
                            </View>
                        </View>
                    </KeyboardAvoidingView>
                </ImageBackground>
            </View>
        );
    }
}
const mapStateToProps = ({ auth }) => {
    const { vError, valid, userEmail } = auth;
    return { vError, valid, userEmail };
};

export default connect(mapStateToProps, {verify})(Verify);
