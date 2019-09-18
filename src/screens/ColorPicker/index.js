import React, { Component } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import {connect} from 'react-redux';
import { Images } from "../../themes";
import globalStyle from '../globalStyle';
import styles from './styles';
import MyStatusBar from '../../components/MyStatusBar';
import {colorUpdate} from '../../actions/regActions';


class ColorPicker extends Component {
    static navigationOptions = {
        header: false,
    };

    constructor(props) {
        super(props);
        this.onSelectColor = this.onSelectColor.bind(this);
        this.state = {
            color: 'blue'
        };
    }
    onSelectColor(color) {
        this.setState({ color });
        this.props.colorUpdate(color);
    }

    goBack() {
        this.props.navigation.goBack();
    }

    goNext() {
        this.props.navigation.navigate('Visa', {action: 'replace', amount: 49});
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
                <View style={styles.marginSecondView}>
                    <Text style={styles.titleText}>Choose your color</Text>
                </View>
                <View style={styles.marginSecondView}>
                    <Text style={styles.codeText}>Please select a color, to add press choose</Text>
                    <Text style={styles.codeText}>One size - 170mm * 12mm * 3mm</Text>
                    <Text style={styles.codeText}>Fits age 3 to 11 years</Text>
                </View>
                <View style={styles.colorWrapper}>
                    <TouchableOpacity onPress={() => this.onSelectColor('blue')} style={this.state.color === 'blue' ? styles.active : styles.inActive}>
                        <View style={[styles.circle, styles.blue]} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.onSelectColor('red')} style={this.state.color === 'red' ? styles.active : styles.inActive}>
                    <View style={[styles.circle, styles.red]} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.onSelectColor('black')} style={this.state.color === 'black' ? styles.active : styles.inActive}>
                    <View style={[styles.circle, styles.black]} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.onSelectColor('gray')} style={this.state.color === 'gray' ? styles.active : styles.inActive}>
                    <View style={[styles.circle, styles.gray]} />
                    </TouchableOpacity>
                </View>
                <View style={styles.marginSecondView}>
                    <Text style={styles.codeText}>This order is only a new wristband.</Text>
                    <Text style={styles.codeText}>You will keep your current subscription.</Text>
                </View>
                <View style={globalStyle.remainView}>
                    <TouchableOpacity onPress={this.goNext.bind(this)} style={globalStyle.shadowButton}>
                        <Text style={globalStyle.buttonText}>Next</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
export default connect(null, {colorUpdate})(ColorPicker);
