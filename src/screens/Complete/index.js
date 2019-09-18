import axios from 'axios';
import React, { Component } from "react"
import { connect } from 'react-redux';
import { View, Image, Text, TouchableOpacity, TextInput, ImageBackground, StatusBar, AsyncStorage} from "react-native"
// import { DangerZone } from 'expo';
// let { Lottie } = DangerZone;
import { Images } from "../../themes";
import globalStyle from '../globalStyle';
import styles from './styles';
import MyStatusBar from '../../components/MyStatusBar';
class Complete extends Component {
    constructor(props){
        super(props);
        this.state = {
            message: "Registering User..."
        };
    }

    static navigationOptions = {
        header: false,
        gesturesEnabled: false,
    };

    componentDidMount() {
        // this._handleRegisterUser();

    }

    _handleRegisterUser = async () => {
        const {
            userEmail,
            parentName,
            parentTel,
            parentPassword,
            childName,
            wristband,
            uri,
            gaurdianData
        } = this.props;


        const apiUrl = "https://api.kinder-id.com/mobile/registeruser";

        const data = new FormData();
        // data.append('avatar', {
        //   uri,
        //   type: 'image/jpg',
        //   name: wristband
        // });

        const children = {
            childrenName: childName,
            wristband
        };
        data.append('email', userEmail.email);
        data.append('parentName', parentName);
        data.append('mobile', parentTel);
        data.append('parentPassword', parentPassword);
        data.append('children', JSON.stringify(children));
        data.append('gaurdians', JSON.stringify(gaurdianData));


        try {
            let response = await fetch(apiUrl, {
                method: 'post',
                body: data,
                headers: {'Content-Type': 'multipart/form-data'}
            });
            let parsedResponse = await response.json();
            await AsyncStorage.setItem('kinderID_sessionToken', parsedResponse.token);
            this.setState({message: "Payment Complete"});

        } catch (err) {
            this.setState({message : "An error occured while registering"});
        }

    };

    goBack(){
        this.props.navigation.goBack()
    }

    goNext(){
        this.props.navigation.navigate('MainScreen')
    }

    render(){
        return(
            <View style = {globalStyle.container}>
                <MyStatusBar backgroundColor="white"  barStyle="dark-content"/>
                <View style={globalStyle.headerView}>
                    <TouchableOpacity onPress={this.goBack.bind(this)}>
                        <Image source={Images.arrow_back} style={globalStyle.arrow_back} />
                    </TouchableOpacity>
                    <View>
                        <Image source={Images.kmark} style={globalStyle.kmark}/>
                    </View>
                    <View />
                </View>
                <View style={styles.mainView}>
                    <View style={styles.eachView}>
                        <Image source={Images.checked} style={styles.checked}/>
                        <Text style={styles.smallText}>{this.state.message}</Text>
                    </View>
                    <View style={styles.eachView}>
                        <TouchableOpacity style={globalStyle.button} onPress={() => this.goNext()}>
                            <Text style={globalStyle.buttonText}>Next</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

const mapStateToProps = ({ reg, auth }) => {
    const {
        parentName,
        parentTel,
        parentPassword,
        childName,
        wristband,
        uri,
        gaurdianData
    } = reg;
    const { userEmail } = auth;
    return {
        userEmail,
        parentName,
        parentTel,
        parentPassword,
        childName,
        wristband,
        uri,
        gaurdianData
    }
};

export default connect(mapStateToProps, null)(Complete);
