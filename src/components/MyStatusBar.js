import React, {Component} from 'react';
import { View, StyleSheet, StatusBar} from 'react-native';
import globalStyle from '../screens/globalStyle';
import {Percent} from "../themes"

const MyStatusBar = ({ backgroundColor, ...props }) => (
    <View style={[globalStyle.statusBar, { backgroundColor }]}>
        <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
);

const styles = StyleSheet.create({
});

export default MyStatusBar;