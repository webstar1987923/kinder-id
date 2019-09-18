import React, {Component} from 'react';
import { View, StyleSheet, Text} from 'react-native';
import {Percent} from "../themes"

class ErrorContainer extends Component{

    render(){
        return (
            <View style={[styles.container, {backgroundColor: this.props.bgColor}]}>
                <View style={styles.sideView}>
                    <View style={[styles.circleView, {borderColor: this.props.color}]}>
                        <Text style={[styles.smallText, {color: this.props.color}]}>i</Text>
                    </View>
                    <Text style={[styles.smallText, {color: this.props.color}]}>{this.props.errMsg}</Text>
                </View>
            </View>
        );
    }   
};

const styles = StyleSheet.create({
    container:{
        paddingHorizontal: 20,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    sideView:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    circleView:{
        width: Percent.width(5),
        height: Percent.width(5),
        borderRadius: Percent.width(2.5),
        borderColor: 'white',
        borderWidth: 1 ,
        alignItems: 'center' ,
        justifyContent:'center',
        marginRight: 10
    },
    smallText:{
        fontSize: Percent.fontSize(16),
        textAlign: 'center',
        fontFamily: 'OpenSans-Light',
        paddingVertical: 10
    },
});

export default ErrorContainer;