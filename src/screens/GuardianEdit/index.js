import _ from 'lodash';
import React, { Component } from "react";
import { View, Image, Text, TouchableOpacity, TextInput, ListView} from "react-native";
import { connect } from 'react-redux';
import { Images } from "../../themes";
import globalStyle from '../globalStyle';
import styles from './styles';
import ListItem from './ListItem';
import MyStatusBar from '../../components/MyStatusBar';

class EditGaurdian extends Component {
    static navigationOptions = {
        header: false,
        gesturesEnabled: false,
    };
    constructor(props) {
        super(props);
        const { gaurdianName, inviteStatus, children, _id } = this.props.navigation.state.params.gaurdian;
        this.state = ({
            childrenIdArray: children || [],
            gaurdianName,
            inviteStatus,
            gaurdianId: _id
        });
    }
    componentWillMount() {
        this.createDataSource(this.props);
    }


    createDataSource({ children }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.dataSource = ds.cloneWithRows(children);
    }

    removeChildId = (childId) => {
        const childrenIdArray = this.state.childrenIdArray;
        _.pull(childrenIdArray, childId);
        this.setState({childrenIdArray});
    }

    setChildrenId = (childId) => {
        const childrenIdArray = this.state.childrenIdArray;
        childrenIdArray.push(childId);
        this.setState({childrenIdArray});
    }

    handleSave = () => {
        this.props.navigation.navigate('Confirm', {gaurdianProps: this.state, action: "pickChildren"});
    }

    handleDelete = () => {
        this.props.navigation.navigate('Confirm', {gaurdianProps: this.state, action: "deleteGaurdian"});
    }

    goBack() {
        this.props.navigation.goBack();
    }

    renderHeader = () => {
        if (this.state.inviteStatus !== "Accepted") {
            return <View />;
        }

        if (this.props.children.length === 0) {
           return (
                <View style={styles.marginSecondView}>
                    <Text style={styles.titleText}>No wristband to replace or delete!</Text>
                </View>
            );
        }
        return (
            <View style={styles.marginSecondView}>
                <Text style={styles.titleText}>Select child</Text>
            </View>
        );
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
                <View style={globalStyle.formGroup}>
                    <Text style={globalStyle.labelText}>Guardian&rsquo;s name</Text>
                    <TextInput
                        style={globalStyle.shadowTextInput}
                        underlineColorAndroid='transparent'
                        placeholder='Lisa Smith'
                        value={this.state.gaurdianName}
                        onChangeText={gaurdianName => this.setState({ gaurdianName })}
                        autoCorrect={false}
                    />
                </View>
                    {this.renderHeader()}
                <View style={styles.listContainer}>
                    {
                        this.state.inviteStatus !== "Accepted" ?
                        <View />
                        : <ListView
                            enableEmptySections
                            dataSource={this.dataSource}
                            renderRow={(child, index) => <ListItem
                                key={index}
                                child={child}
                                setChild={this.setChildrenId}
                                removeChild={this.removeChildId}
                                childrenIdArray={this.state.childrenIdArray}
                            />}
                        />
                    }
                </View>
                <View style={globalStyle.footerView}>
                    <TouchableOpacity onPress={this.handleSave} style={globalStyle.shadowButton}>
                        <Text style={globalStyle.buttonText}>Save</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.textContainer} onPress={this.handleDelete} >
                        <Text style={styles.deleteText}>Delete Guardian</Text>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }
}
const mapStateToProps = ({ childrenReducer }) => {
    const { children, gaurdians } = childrenReducer;
    return { children, gaurdians };
};
export default connect(mapStateToProps, null)(EditGaurdian);
