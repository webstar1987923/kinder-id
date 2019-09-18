import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Images } from "../../themes";
import styles from './styles';

class ListItem extends Component {
    constructor(props){
        super(props);
        this.check = this.check.bind(this)
        this.state=({          
        });
    }

    check(){
        this.props.setCurrencyId(this.props.currency._id);        
    }   
    
    render() {         
        return (    
            <View>
                <TouchableOpacity onPress={()=>this.check(this.props.currency._id)} style={styles.listView}>
                    {
                        (this.props.currencyId === this.props.currency._id)?
                        <Text style={styles.selectcodeText}>{this.props.currency.currencyName}</Text>
                        :
                        <Text style={styles.codeText}>{this.props.currency.currencyName}</Text>
                    }
                    {
                        (this.props.currencyId === this.props.currency._id)?
                        <Image source={Images.check} style={styles.check}/>
                        :null
                    }
                </TouchableOpacity>  
            </View>
        );
    }
}

export default ListItem;