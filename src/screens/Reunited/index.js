import React, { Component } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { Images } from "../../themes";
import globalStyle from '../globalStyle';
import styles from './styles';
import MyStatusBar from '../../components/MyStatusBar';

class Reunited extends Component {
    static navigationOptions = {
        header: false,
        gesturesEnabled: false,
    };

    constructor(props) {
        super(props);
        this.state = ({
        });
    }

    showMessage = () => {
        const { reUnited, profileDeleted } = this.props.navigation.state.params;
        if (reUnited === true) {
            return `Thanks for using KinderID.\nWe're glad our service helped you!`;
        }
        if (reUnited === false) {
            return `If you are not reuinted, pleasse\ncontact your local police department.`;
        }
        if (profileDeleted) {
            return 'Your ID has been deleted.';
        }
    }
    handleButton = () => {
        const { profileDeleted } = this.props.navigation.state.params;
        if (profileDeleted) {
            return this.props.navigation.navigate("Login");
        }
        return this.props.navigation.navigate("MainScreen");
    }
    render() {
        return (
            <View style={globalStyle.container}>
                <MyStatusBar backgroundColor="white" />
                <View style={globalStyle.headerView}>
                    <View />
                    <View>
                        <Image source={Images.kmark} style={globalStyle.kmark} />
                    </View>
                    <View />
                </View>
                <View style={styles.main}>
                    <View style={styles.textbox}>
                        <Text style={styles.codeText}>
                            {this.showMessage()}
                        </Text>
                    </View>
                    <TouchableOpacity onPress={this.handleButton} style={styles.redButton}>
                        <Text style={styles.buttonText}>Go back</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
export default Reunited;
