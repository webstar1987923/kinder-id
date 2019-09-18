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
        this.props.setCardId(this.props.card._id);        
    }   
    
    render() {         
        return (    
            <View>
                <TouchableOpacity onPress={()=>this.check(this.props.card._id)} style={styles.listView}>
                    {
                        (this.props.cardId === this.props.card._id)?
                        <Text style={styles.selectcodeText}>{this.props.card.cardName}</Text>
                        :
                        <Text style={styles.codeText}>{this.props.card.cardName}</Text>
                    }
                    {
                        (this.props.cardId === this.props.card._id)?
                        <Image source={Images.check} style={styles.check}/>
                        :null
                    }
                </TouchableOpacity>  
            </View>
        );
    }
}

export default ListItem;