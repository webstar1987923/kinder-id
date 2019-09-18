import React, { Component } from "react";
import { View, Image, Text, TouchableOpacity, TextInput } from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {connect} from 'react-redux';
import { Images } from "../../themes";
import globalStyle from '../globalStyle';
import { inviteGaurdian } from '../../actions/childrenActions';
import ErrorContainer from '../../components/ErrorContainer';
import MyStatusBar from '../../components/MyStatusBar';

class AddGaurdian extends Component {
    static navigationOptions = {
        header: false,
        gesturesEnabled: false,
    };

    constructor(props) {
        super(props);
        this.state = {
            gaurdianEmail: "",
            gaurdianName: "",
            showError: "",
            editable: true
        };
    }
    componentDidMount() {
        const { gaurdiansCount } = this.props.navigation.state.params;
        if (gaurdiansCount >= 4) {
            this.setState({showError: "Sorry, You can't add more than four gaurdians!", editable: false});
        }
    }


    goBack() {
        this.props.navigation.goBack();
    }

    async goSave() {
        const { gaurdianEmail, gaurdianName } = this.state;
        await this.props.inviteGaurdian(gaurdianEmail, gaurdianName);

        if (this.props.inviteSent) {
            return this.props.navigation.navigate('Guardian');
        }
        this.setState({ showError: "Something went wrong, invitationt not sent"});
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
                    <View style={globalStyle.main}>
                        <View style={globalStyle.formGroup}>
                            <Text style={globalStyle.labelText}>Guardian&rsquo;s name</Text>
                            <TextInput
                                style={globalStyle.shadowTextInput}
                                underlineColorAndroid='transparent'
                                placeholder='Lisa Smith'
                                value={this.state.gaurdianName}
                                onChangeText={gaurdianName => this.setState({ gaurdianName })}
                                autoCorrect={false}
                                editable={this.state.editable}
                            />
                        </View>
                        <View style={globalStyle.formGroup}>
                            <Text style={globalStyle.labelText}>Email</Text>
                            <TextInput
                                style={globalStyle.shadowTextInput}
                                underlineColorAndroid='transparent'
                                placeholder='marysmith@mail.com'
                                autoCapitalize='none'
                                keyboardType='email-address'
                                value={this.state.gaurdianEmail}
                                onChangeText={gaurdianEmail => this.setState({ gaurdianEmail })}
                                autoCorrect={false}
                                editable={this.state.editable}
                            />
                        </View>
                    </View>
                </KeyboardAwareScrollView>
                <View style={globalStyle.remainView}>
                    <TouchableOpacity onPress={this.goSave.bind(this)} style={globalStyle.shadowButton}>
                        <Text style={globalStyle.buttonText}>Save</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const mapStateToProps = ({ childrenReducer }) => {
    const { inviteSent } = childrenReducer;
    return { inviteSent };
};

export default connect(mapStateToProps, {inviteGaurdian})(AddGaurdian);
