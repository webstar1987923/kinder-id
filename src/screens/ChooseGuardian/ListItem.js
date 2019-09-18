import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Images } from "../../themes";
import styles from './styles';

class ListItem extends Component {
    constructor(props){
        super(props);               
        this.state=({
            select: false,                  
        });
    }

    async check(){
        await this.setState({select:!this.state.select});
        if(this.state.select) {
            this.props.setGuardian(this.props.guardian._id);
        } else {
            this.props.removeGuardian(this.props.guardian._id);
        }
        
    }   
    
    render() {         
        return (    
            <View>
                <TouchableOpacity onPress={this.check.bind(this)} style={styles.listView}>
                    {
                        (this.state.select)?
                        <Text style={styles.selectcodeText}>{this.props.guardian.guardianName}</Text>
                        :
                        <Text style={styles.codeText}>{this.props.guardian.guardianName}</Text>
                    }
                    {
                        (this.state.select)?
                        <Image source={Images.check} style={styles.check}/>
                        :null
                    }
                </TouchableOpacity>  
            </View>
        );
    }
}

export default ListItem;