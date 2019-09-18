import React, { Component } from "react";
import { View, Image, Text, TouchableOpacity, TextInput, StatusBar} from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import axios from 'axios';
import {connect} from 'react-redux';
import { Images } from "../../themes";
import globalStyle from '../globalStyle';
import styles from './styles';
import ErrorContainer from '../../components/ErrorContainer';
import MyStatusBar from '../../components/MyStatusBar';
import ImagePicker from 'react-native-image-picker';

import { childUpdate, saveImage } from '../../actions/regActions';

class AddPicture extends Component {
    static navigationOptions = {
        header: false,
        gesturesEnabled: false,
    };

    constructor() {
        super();
        this.handleWristband = this.handleWristband.bind(this);
        this.state = {
            color: '#e76065',
            loading: false,
            showError: ''
        };
    }

    goBack() {
        this.props.navigation.goBack();
    }

    takePhoto = async () => {
        // let pickerResult = await ImagePicker.launchCameraAsync();
        // console.log('PICTURE ', pickerResult);

        // if (!pickerResult.cancelled) {
        //   this.props.saveImage(pickerResult.uri);
        //   this.setState({color: '#53B768'})
        // }
        const options = {
            title: 'Take picture of wristband',
            allowsEditing: true,
            maxWidth: 500,
            maxHeight: 500
        };
        ImagePicker.showImagePicker(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                this.props.saveImage(response.uri);
                this.setState({color: '#53B768'});
            }
        });
    };
    handleWristband(value) {
        const val = value.toUpperCase().replace(/\s/g, '');
        if (val.length > 8) return false;
        const testStr = val + "AB000000".slice(val.length);
        const regex = /[A-Z]{2}[0-9]{6}/g;
        if (regex.test(testStr)) {
            let output = val;
            if (val.length > 2) {
                output = [val.slice(0, 2), ' ', val.slice(2)].join('');
            }
            this.props.childUpdate({ prop: 'wristband', value: output });
        }
    }

    handleSubmit = async () => {
        const { childName, wristband, uri } = this.props;


        if (wristband === '' || uri === '' || childName === '') {
            return this.setState({showError: 'All fields are required!'});
        }

        const {data} = await axios.post('https://api.kinder-id.com/mobile/validatewristband', {wristband});
        if (data.uniqueWritband === false) {
            return this.setState({showError: 'Wristband is already taken!'});
        }

        return this.props.navigation.navigate('Visa', {action: "pay", amount: 776});
    }
    // handleWristband = value => {
    //     // const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    //     const matches = value.match(/\d{2,9}/g);
    //     const match = (matches && matches[0]) || "";
    //     const parts = [];
    //     for (let i = 0, len = match.length; i < len; i += 2) {
    //         parts.push(match.substring(i, i + 2));
    //     }
    //     if (parts.length) {
    //         this.props.childUpdate({ prop: 'wristband', value: parts.join(" ") });
    //     } else {
    //         this.props.childUpdate({ prop: 'wristband', value });
    //     }
    // };

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
                    <View style={globalStyle.formGroup}>
                        <Text style={styles.codeText}>Fill in your child&rsquo;s details</Text>
                    </View>
                    <View style={globalStyle.formGroup}>
                        <Text style={globalStyle.labelText}>Full Name</Text>
                        <TextInput
                            style={globalStyle.shadowTextInput}
                            underlineColorAndroid='transparent'
                            placeholder="Mary Smith"
                            value={this.props.childName}
                            onChangeText={value => this.props.childUpdate({ prop: 'childName', value })}
                            autoCorrect={false}
                        />
                    </View>
                    <View style={globalStyle.formGroup}>
                        <Text style={globalStyle.labelText}>Wristband ID</Text>
                        <View style={styles.inputRowView}>
                            <TextInput
                                style={styles.textRowInput}
                                underlineColorAndroid='transparent'
                                placeholder="AB 000000"
                                value={this.props.wristband}
                                onChangeText={value => this.handleWristband(value)}
                                autoCapitalize="none"
                                autoCorrect={false}
                            />
                            <View style={[styles.cameraView, {backgroundColor: this.state.color }]}>
                                <TouchableOpacity onPress={this.takePhoto} >
                                    <Image source={Images.camera} style={styles.camera} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={styles.marginSecondView}>
                        <Text style={styles.codeText}>Press the camera icon to take a{'\n'}picture of your wristband</Text>
                    </View>
                </KeyboardAwareScrollView>
                <View style={globalStyle.remainView}>
                    <TouchableOpacity onPress={this.handleSubmit} style={globalStyle.shadowButton}>
                        <Text style={globalStyle.buttonText}>Next</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const mapStateToProps = ({ reg }) => {
    const { childName, wristband, uri } = reg;
    return { childName, wristband, uri };
};

export default connect(mapStateToProps, {childUpdate, saveImage})(AddPicture);
