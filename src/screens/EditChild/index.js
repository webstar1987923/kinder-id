import _ from 'lodash';
import React, { Component } from "react";
import { View, Image, Text, TouchableOpacity, TextInput, ScrollView} from "react-native";
import {connect} from 'react-redux';
import { childUpdate } from '../../actions/regActions';
import { Images } from "../../themes";
import globalStyle from '../globalStyle';
import MyStatusBar from '../../components/MyStatusBar';

class EditChild extends Component {
    static navigationOptions = {
        header: false,
        gesturesEnabled: false,
    };

    constructor(props) {
        super(props);
        this.handleWristband = this.handleWristband.bind(this);
        this.state = {
            editable: false
        };
    }

    async componentDidMount() {
        const { child } = this.props.navigation.state.params;
        _.each(child, (value, prop) => {
            this.props.childUpdate({ prop, value });
        });
        this.props.childUpdate({ prop: 'childId', value: child._id });
        await this.props.childUpdate({ prop: 'wristband', value: child.wristband });
        if (this.props.wristband === null) {
            this.setState({editable: true});
        }
    }


    goBack() {
        this.props.navigation.goBack();
    }

    goSave() {
        const { child } = this.props.navigation.state.params;
        return this.props.navigation.navigate('VerifyAction', {action: "update", name: child.childrenName});
    }

    handleWristband(value) {
        const val = value.toUpperCase().replace(/\s/g, '');
        if (val.length > 8) return false;
        const testStr = val + "AB000000".slice(val.length);
        const regex = /[A-Z]{2}[0-9]{6}/g;
        if (regex.test(testStr)) {
            let output = val;
            if (val.length > 2) {
                output = [val.slice(0, 2), ' ', val.slice(2)].join('');
            }
            this.props.childUpdate({ prop: 'wristband', value: output });
        }
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
                    <View style={globalStyle.formGroup}>
                        <Text style={globalStyle.labelText}>Child full name</Text>
                        <TextInput
                            style={globalStyle.shadowTextInput}
                            underlineColorAndroid='transparent'
                            value={this.props.childrenName}
                            onChangeText={value => this.props.childUpdate({ prop: 'childrenName', value })}
                            autoCorrect={false}
                        />
                    </View>
                    <View style={globalStyle.formGroup}>
                        <Text style={globalStyle.labelText}>Wristband ID</Text>
                        <TextInput
                            style={globalStyle.shadowTextInput}
                            underlineColorAndroid='transparent'
                            value={this.props.wristband}
                            onChangeText={value => this.handleWristband(value)}
                            autoCorrect={false}
                            editable={this.state.editable}
                        />
                    </View>
                </ScrollView>
                <View style={globalStyle.remainView}>
                    <TouchableOpacity onPress={this.goSave.bind(this)} style={globalStyle.shadowButton}>
                        <Text style={globalStyle.buttonText}>Save</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
const mapStateToProps = ({ reg }) => {
    const { childrenName, wristband } = reg;
    return { childrenName, wristband };
};
export default connect(mapStateToProps, {childUpdate})(EditChild);
