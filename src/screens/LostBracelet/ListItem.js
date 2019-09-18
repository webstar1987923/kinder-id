import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Images } from "../../themes";
import styles from './styles';

class ListItem extends Component {
    constructor(props) {
        super(props);
        this.check = this.check.bind(this);
    }

    check() {
        if (this.props.childId === this.props.child._id) {
            this.props.setChildId('');
        } else {
            this.props.setChildId(this.props.child._id);
        }
    }

    render() {
        return (
            <View>
                <TouchableOpacity onPress={() => this.check()} style={styles.listView}>
                    {
                        (this.props.childId === this.props.child._id) ?
                        <Text style={styles.selectcodeText}>{this.props.child.childrenName}</Text>
                        :
                        <Text style={styles.codeText}>{this.props.child.childrenName}</Text>
                    }
                    {
                        (this.props.childId === this.props.child._id) ?
                        <Image source={Images.check} style={styles.check} />
                        : null
                    }
                </TouchableOpacity>
            </View>
        );
    }
}

export default ListItem;
