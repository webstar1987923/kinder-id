import React, { Component } from 'react';
import { AsyncStorage, ImageBackground, StyleSheet } from 'react-native';
import {Images} from '../themes';
import axios from 'axios';

class Splash extends Component {

    static navigationOptions = () => ({
            header: null,
        })
    componentDidMount(props) {
        this.timeoutHandle = setTimeout(async props => {
            const token = await AsyncStorage.getItem("kinderID_sessionToken");
            if (!token) {
                return this.props.navigation.navigate('Login');
            }
            const config = {
              headers: { Authorization: `Bearer ${  token}` }
            };
            try {
                const { data } = await axios.post(
                    "https://api.kinder-id.com/auth/verifyToken",
                    null,
                    config
                );
                if (data.verifiedToken === true) {
                    return this.props.navigation.navigate('MainScreen');
                    // return this.props.navigation.navigate('LiAddPicture');
                }
            } catch (err) {
                this.props.navigation.navigate('Login');
            }
        }, 1500);
    }

    componentWillUnmount() {
        clearTimeout(this.timeoutHandle);
    }
    render() {
        return (
            <ImageBackground source={Images.splash} style ={styles.container} />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

export default Splash;
