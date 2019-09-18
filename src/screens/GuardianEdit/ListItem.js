import React, { Component } from 'react';
import _ from 'lodash';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Images } from "../../themes";
import styles from './styles';

class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            select: false
        });
    }

    componentDidMount() {
        _.map(this.props.childrenIdArray, id => {
            if (this.props.child._id === id) {
                this.setState({select: true});
            }
        });
    }


    async check() {
        await this.setState({select: !this.state.select});
        if (this.state.select) {
            this.props.setChild(this.props.child._id);
        } else {
            this.props.removeChild(this.props.child._id);
        }
    }

    render() {
        return (
            <View>
                <TouchableOpacity onPress={this.check.bind(this)} style={styles.listView}>
                    {
                        (this.state.select) ?
                        <Text style={styles.selectcodeText}>{this.props.child.childrenName}</Text>
                        :
                        <Text style={styles.codeText}>{this.props.child.childrenName}</Text>
                    }
                    {
                        (this.state.select) ?
                        <Image source={Images.check} style={styles.check} />
                        : null
                    }
                </TouchableOpacity>
            </View>
        );
    }
}

export default ListItem;
