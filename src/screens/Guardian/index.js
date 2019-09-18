import React, { Component } from "react";
import {
    View,
    Image,
    TouchableOpacity,
    ListView,
    ScrollView,
} from "react-native";
import { connect } from "react-redux";
import { Images } from "../../themes";
import globalStyle from "../globalStyle";
import { fetchChildren } from "../../actions/childrenActions";
import ListItem from "./ListItem";
import MyStatusBar from '../../components/MyStatusBar';

class Guardian extends Component {
    static navigationOptions = {
        header: false,
        gesturesEnabled: false,
    };

    componentWillMount() {
        this.createDataSource(this.props);
    }

    componentDidMount() {
        this.init();
        this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this.createDataSource(nextProps);
    }
    init = async () => {
        await this.props.fetchChildren();
    };

    createDataSource({ gaurdians }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.dataSource = ds.cloneWithRows(gaurdians);
    }

    handleAddGuardian = () => {
        this.props.navigation.navigate("AddGuardian", {gaurdiansCount: this.props.gaurdians.length});
    };
    goBack() {
        this.props.navigation.goBack();
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
                    <TouchableOpacity onPress={this.handleAddGuardian}>
                        <Image source={Images.add} style={globalStyle.add} />
                    </TouchableOpacity>
                </View>
                <ScrollView>
                    <ListView
                        enableEmptySections
                        dataSource={this.dataSource}
                        renderRow={gaurdian => (
                            <ListItem gaurdian={gaurdian} navigator={this.props.navigation} />
                        )}
                    />
                </ScrollView>
            </View>
        );
    }
}
const mapStateToProps = ({ childrenReducer }) => {
    const { gaurdians } = childrenReducer;
    return { gaurdians };
};
export default connect(mapStateToProps, {fetchChildren})(Guardian);
