import React from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import styles from './styles';

const ListItem = (props) => {
        return ( 
            <TouchableWithoutFeedback onPress={() => { props.navigator.navigate('EditChild', {child: props.child}); }}>   
                <View style={styles.shadowView}>
                    <Text style={styles.boldText}>{props.child.childrenName}</Text> 
                    <Text style={styles.codeText}>{props.child.wristband || 'No wristband connected'}</Text> 
                </View>
            </TouchableWithoutFeedback>
        );    
};

export default ListItem;
