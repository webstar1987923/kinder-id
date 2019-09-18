import React, { Component } from "react";
import { Alert, View, Image, Text, TouchableOpacity, ScrollView, AsyncStorage, Share } from "react-native";
import {connect} from 'react-redux';
import Rate, { AndroidMarket } from 'react-native-rate';
import { Images } from "../../themes";
import globalStyle from '../globalStyle';
import styles from './styles';
import { childUpdate, saveImage } from '../../actions/regActions';
import { resetGoNext } from '../../actions/childrenActions';
import MyStatusBar from '../../components/MyStatusBar';

class Menu extends Component {
    static navigationOptions = {
        header: false,
        gesturesEnabled: false,
    };

    constructor() {
        super();
        this.state = {
            color: '#e76065',
            loading: false,
            showError: ''
        };
    }

    goBack() {
        this.props.navigation.navigate('MainScreen');
    }
    async logout() {
        this.props.resetGoNext();
        this.props.socket.disconnect();
        await AsyncStorage.removeItem("kinderID_sessionToken");
        this.props.navigation.navigate('Login');
    }
    onLegal() {
        this.props.navigation.navigate('WebView', {
            url: 'https://www.gotinder.com/privacy?locale=en',
        });
    }
    onSupportAndFAQ() {
        this.props.navigation.navigate('WebView', {
            url: 'https://www.vg.no/',
        });
    }
    onShare() {
        Share.share({
            message: 'Kinderid share message',
            url: 'http://www.kinder-id.com',
            title: 'Help to find child'
        }, {
            // Android only:
            dialogTitle: 'Android title',
            // iOS only:
            excludedActivityTypes: [
                'org.reactjs.native.example.KInderId'
            ]
        });
    }
    onRateApp() {
        const options = {
            AppleAppID: "2193813192",
            GooglePackageName: "com.mywebsite.myapp",
            OtherAndroidURL: "http://www.randomappstore.com/app/47172391",
            preferredAndroidMarket: AndroidMarket.Google,
            preferInApp: false,
            fallbackPlatformURL: "http://www.mywebsite.com/myapp.html",
        };
        Rate.rate(options, success => {
            if (success) {
                Alert.alert("rating is excuted");
                // this technically only tells us if the user successfully went to the Review Page. Whether they actually did anything, we do not know.
                // this.setState({rated:true})
            }
        });
    }
    render() {
        const {navigate} = this.props.navigation;

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
                <View style={styles.titleView}>
                    <Text style={styles.titleText}>SETTINGS</Text>
                </View>
                <ScrollView style={styles.listContainer}>
                    <TouchableOpacity style={styles.eachItem} onPress={() => navigate('Subscription')}>
                        <Text style={styles.leftText}>Subscription</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.eachItem} onPress={() => navigate('Profile')}>
                        <Text style={styles.leftText}>Edit profile</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.eachItem} onPress={() => navigate('Guardian')}>
                        <Text style={styles.leftText}>Guardians</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.eachItem} onPress={() => navigate('LostBracelet')}>
                        <Text style={styles.leftText}>Lost bracelet</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.eachItem} onPress={() => this.onShare()}>
                        <Text style={styles.leftText}>Share Kinder ID</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.eachItem} onPress={() => this.onLegal()}>
                        <Text style={styles.leftText}>Legal</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.eachItem} onPress={() => this.onSupportAndFAQ()}>
                        <Text style={styles.leftText}>Support &amp; FAQ</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.eachItem} onPress={() => this.onRateApp()}>
                        <Text style={styles.leftText}>Rate Kinder ID</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.eachItem} onPress={() => navigate('SavedCards')}>
                        <Text style={styles.leftText}>Payment information</Text>
                    </TouchableOpacity>
                    <View>
                        <TouchableOpacity style={styles.buttonView}>
                            <Image source={Images.whitemark} style={styles.whitemark} />
                        </TouchableOpacity>
                        <Text style={styles.versionText}>Version 1.0</Text>
                    </View>
                </ScrollView>
                <View style={styles.bottomView}>
                    <TouchableOpacity onPress={() => this.logout()}>
                        <Text style={styles.centerText}>Log out</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const mapStateToProps = ({ reg, sockets}) => {
    const { childName, wristband, uri } = reg;
    const { socket } = sockets;
    return { childName, wristband, uri, socket};
};

export default connect(mapStateToProps, {childUpdate, saveImage, resetGoNext})(Menu);
