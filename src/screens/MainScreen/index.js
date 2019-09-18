import _ from 'lodash';
import React, { Component } from "react";
import {
    View,
    Image,
    TouchableOpacity,
    ListView,
    ScrollView,
    Alert
} from "react-native";
import { connect } from "react-redux";
import { Images } from "../../themes";
import globalStyle from "../globalStyle";
import styles from "./styles";
import { fetchChildren, respondToInvitation } from "../../actions/childrenActions";
import {
    register_socket
} from "../../actions/socketAction";
import ListItem from "./ListItem";
import { registerSocket } from "../../services/registerSocket";
import MyStatusBar from '../../components/MyStatusBar';
import OneSignal from 'react-native-onesignal';

class MainScreen extends Component {

    static navigationOptions = {
        header: false,
        gesturesEnabled: false,
    };

    componentDidMount() {
        this.register();
        this.createDataSource(this.props);
    }
    register = async () => {
        await this.props.fetchChildren();
        this.alertGaurdian(this.props);
        registerSocket(this);
    };

    componentWillMount() {
        this.createDataSource(this.props);
        OneSignal.addEventListener('opened', this.onOpened);
    }
    onOpened(notification) {
        registerSocket(this);
    }
    componentWillReceiveProps(nextProps) {
        this.createDataSource(nextProps);
    }

    alertGaurdian = ({invitingParents}) => {
        if (invitingParents === []) {
            return;
        }
        _.map(invitingParents[0], ({invitingParentId, invitingParetName}) => {
            Alert.alert(
                'Invitation',
                `${invitingParetName} is inviting you to be a gaurdian for his/her child`,
                [
                  {text: 'Decline', onPress: () => this.props.respondToInvitation(invitingParentId, "Declined"), style: 'cancel'},
                  {text: 'Accept', onPress: () => this.props.respondToInvitation(invitingParentId, "Accepted")},
                ],
                { cancelable: false }
            );
        });
    }

    createDataSource({ children }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.dataSource = ds.cloneWithRows(children);
    }

    handleAddChild = () => {
        this.props.navigation.navigate("AddPicture");
    };
    goEdit() {
        this.props.navigation.navigate("Menu");
    }

    render() {
        return (
            <View style={globalStyle.container}>
                <MyStatusBar backgroundColor="white" />
                <View style={globalStyle.headerView}>
                    <TouchableOpacity onPress={this.goEdit.bind(this)}>
                        <Image source={Images.settings} style={globalStyle.settings} />
                    </TouchableOpacity>
                    <View>
                        <Image source={Images.kmark} style={globalStyle.kmark} />
                    </View>
                    <TouchableOpacity onPress={this.handleAddChild}>
                        <Image source={Images.add} style={globalStyle.add} />
                    </TouchableOpacity>
                </View>
                <ScrollView>
                    <ListView
                        enableEmptySections
                        dataSource={this.dataSource}
                        renderRow={child => (
                            <ListItem child={child} navigator={this.props.navigation} />
                        )}
                    />
                </ScrollView>
            </View>
        );
    }
}
const mapStateToProps = ({ childrenReducer }) => {
    const { children, mobile, _id, gaurdians, invitingParents } = childrenReducer;
    return { children, mobile, _id, gaurdians, invitingParents };
};
export default connect(mapStateToProps, {
    fetchChildren,
    register_socket,
    respondToInvitation
})(MainScreen);
