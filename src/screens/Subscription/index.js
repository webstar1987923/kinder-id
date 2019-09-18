import React, { Component } from "react";
import { View, Image, Text, TouchableOpacity, ScrollView, ListView} from "react-native";
import { connect } from "react-redux";
import { Images } from "../../themes";
import globalStyle from '../globalStyle';
import { fetchSubscriptions } from "../../actions/childrenActions";
import { subIdUpdate } from "../../actions/regActions";
import styles from './styles';
import ListItem from './ListItem';
import MyStatusBar from '../../components/MyStatusBar';

class Subscribtion extends Component {

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
        await this.props.fetchSubscriptions();
    }
    setID = id => {
        this.props.subIdUpdate(id);
        this.props.navigation.navigate("ReNewSubscription");
    }

    createDataSource({ subscriptions }) {
        // const inactiveSubs = _.remove(subscriptions, sub => {
        //     return sub.active === false;
        // });

        // console.log('inactive subs', inactiveSubs);
        // console.log('active', subscriptions);

        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.dataSource = ds.cloneWithRows(subscriptions);
    }

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
                    <View />
                </View>
                <ScrollView>
                    <View style={styles.marginFirstView}>
                        <Text style={styles.settingText}>ACTIVE</Text>
                    </View>
                    <ListView
                    enableEmptySections
                    dataSource={this.dataSource}
                    renderRow={(child, index) =>
                        <ListItem
                            key={index}
                            child={child}
                            setID={this.setID}
                            navigator={this.props.navigation}
                        />}
                    />
                    <View style={styles.marginFirstView}>
                        <Text style={styles.settingText}>INACTIVE</Text>
                    </View>
                    {/* <TouchableOpacity style={styles.marginSecondView}>
                        <Text style={styles.nameText}>Bella</Text>
                        <Text style={styles.commonText}>0 Days left</Text>
                        <View style={{flexDirection:'row', alignItems:'center'}}>
                            <Text style={styles.commonText}>AB 000000</Text>
                            <Image source={Images.arrow_forward} style={styles.arrow_forward}/>
                        </View>
                    </TouchableOpacity> */}
                </ScrollView>
            </View>
        );
    }
}
const mapStateToProps = ({ childrenReducer }) => {
    const { subscriptions } = childrenReducer;
    return { subscriptions };
};
export default connect(mapStateToProps, {fetchSubscriptions, subIdUpdate})(Subscribtion);
