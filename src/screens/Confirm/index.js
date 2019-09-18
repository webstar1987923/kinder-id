import React, { Component } from "react";
import { View, Image, Text, TouchableOpacity, AsyncStorage } from "react-native";
import axios from 'axios';
import { Images } from "../../themes";
import globalStyle from '../globalStyle';
import styles from './styles';
import MyStatusBar from '../../components/MyStatusBar';


class Confirm extends Component {
    static navigationOptions = {
        header: false,
        gesturesEnabled: false,
    };

    constructor(props) {
        super(props);
        this.state = ({disable: false});
    }


    handleSubmit = async () => {
        const { action, gaurdianProps: {gaurdianId, gaurdianName, childrenIdArray} } = this.props.navigation.state.params;
        this.setState({disable: true});
        const token = await AsyncStorage.getItem("kinderID_sessionToken");
        const config = {
          headers: { Authorization: `Bearer ${token}` }
        };
        switch (action) {
            case "pickChildren": {
                try {
                  const childrenArray = JSON.stringify(childrenIdArray);
                  await axios.post(
                    "https://api.kinder-id.com/mobile/assigngaurdian",
                    { gaurdianId, gaurdianName, childrenArray },
                    config
                  );
                } catch (err) {
                  console.log("error: ", err.response);
                  if (err.response.status === 502) {
                    return console.log("network error");
                  }
                  console.log("error", err.respose);
                }
                break;
            }
            case "deleteGaurdian": {
                try {
                  await axios.post(
                    "https://api.kinder-id.com/mobile/deletegaurdian",
                    { gaurdianId },
                    config
                  );
                } catch (err) {
                  console.log("error: ", err.response);
                  if (err.response.status === 502) {
                    return console.log("network error");
                  }
                  console.log("error", err.respose);
                }
                break;
            }
            default:
                break;
        }
        return this.props.navigation.navigate('MainScreen');
    }

    goBack() {
        this.props.navigation.goBack();
    }

    render() {
        return (
            <View style={globalStyle.container}>
                <MyStatusBar backgroundColor="white" />
                <View style={globalStyle.headerView}>
                    <View style={{flex: 1}} />
                    <View style={{flex: 1, alignItems: 'center'}}>
                        <Image source={Images.kmark} style={globalStyle.kmark} />
                    </View>
                    <View style={{flex: 1}} />
                </View>
                <View style={styles.main}>
                    <View style={styles.textbox}>
                        <Text style={styles.codeText}>Are you sure?</Text>
                    </View>
                    <View style={styles.rowView}>
                        <TouchableOpacity
                            style={styles.leftButton}
                            onPress={this.handleSubmit}
                            disabled={this.state.disable}
                        >
                            <Text style={styles.buttonText}>Yes</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.rightButton}
                            onPress={this.goBack.bind(this)}
                            disabled={this.state.disable}
                        >
                            <Text style={styles.buttonText}>No</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

export default Confirm;
