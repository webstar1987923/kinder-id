import React from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import styles from './styles';

const ListItem = (props) => {
    const { gaurdianName, inviteStatus } = props.gaurdian;
    let color;
    switch (inviteStatus) {
        case "Accepted":
            color = "#2ecc71";
            break;
        case "Pending":
            color = "#f39c12";
            break;
        case "Declined":
            color = "#e74c3c";
            break;

        default:
            break;
    }
        return (
            <TouchableWithoutFeedback onPress={() => { props.navigator.navigate('GuardianEdit', {gaurdian: props.gaurdian}); }}>
                <View style={styles.shadowView}>
                    <Text style={styles.boldText}>{gaurdianName}</Text>
                    <Text style={[styles.codeText, {color}]}>{inviteStatus}</Text>
                </View>
            </TouchableWithoutFeedback>
        );
};

export default ListItem;
