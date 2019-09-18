import React, { Component } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { connect } from 'react-redux';
import { Images } from "../../themes";
import globalStyle from '../globalStyle';
import styles from './styles';
import ListItem from './ListItem';
import {childIdUpdate} from '../../actions/regActions';
import MyStatusBar from '../../components/MyStatusBar';

class LostBracelet extends Component {
    static navigationOptions = {
        header: false,
        gesturesEnabled: false,
    };

    constructor(props) {
        super(props);
        this.state = ({
            childId: '',
        });
    }

    setChildId = (id) => {
        this.setState({ childId: id});
    }

    goReplace() {
        this.props.childIdUpdate(this.state.childId);
        this.props.navigation.navigate('VerifyAction', {action: "replace", name: "ID"});
    }

    goDelete() {
        this.props.navigation.navigate('VerifyAction', {childId: this.state.childId, action: "delete", name: "children"});
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
                <View style={styles.marginSecondView}>
                    {
                        this.props.children.length === 0 ?
                        <Text style={styles.titleText}>No wristband to replace or delete!</Text>
                        :
                        <Text style={styles.titleText}>Which wristband have you lost?</Text>
                    }
                </View>
                <View style={styles.listContainer}>
                    {
                        this.props.children.map((child, index) => (<ListItem
                                key={index}
                                child={child}
                                childId={this.state.childId}
                                setChildId={this.setChildId}
                        />))
                    }
                </View>
                {
                    this.state.childId ?
                    <View style={styles.rowView}>
                        <TouchableOpacity onPress={this.goDelete.bind(this)} style={globalStyle.shadowButton}>
                            <Text style={globalStyle.buttonText}>Delete</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.goReplace.bind(this)} style={globalStyle.shadowButton}>
                            <Text style={globalStyle.buttonText}>Replace</Text>
                        </TouchableOpacity>
                    </View>
                    : null
                }

            </View>
        );
    }
}
const mapStateToProps = ({ childrenReducer }) => {
    const { children } = childrenReducer;
    return { children };
};
export default connect(mapStateToProps, {childIdUpdate})(LostBracelet);
