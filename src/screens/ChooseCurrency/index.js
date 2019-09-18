import _ from 'lodash';
import React, { Component } from "react";
import { View, Image, Text, TouchableOpacity, TextInput, ImageBackground, StatusBar,ScrollView} from "react-native"
import { connect } from 'react-redux';
import { Images } from "../../themes";
import globalStyle from '../globalStyle';
import styles from './styles';
import ListItem from './ListItem';
import MyStatusBar from '../../components/MyStatusBar';

class ChooseCurrency extends Component {
    constructor(props){
        super(props);
        this.state = ({
            currency:[
                {_id: 0, currencyName: 'NOK'},
                {_id: 1, currencyName: 'SEK'},
                {_id: 2, currencyName: 'USD'},
            ],
            currencyId: 0
        });
    }
    
    static navigationOptions = {
        header: false,
        gesturesEnabled: false,
    };
    
    setCurrencyId = (id) => {
        this.setState({ currencyId: id})  
    }

    goBack() {
        this.props.navigation.goBack();
    }
    
    render(){
        return(
            <View style = {globalStyle.container}>
                <MyStatusBar backgroundColor="white"/>
                <View style={globalStyle.headerView}>
                    <TouchableOpacity onPress={this.goBack.bind(this)}>
                        <Image source={Images.arrow_back} style={globalStyle.arrow_back} />                 
                    </TouchableOpacity>
                    <View>
                        <Image source={Images.kmark} style={globalStyle.kmark}/>
                    </View>
                    <View />
                </View>         
                <View style={styles.marginSecondView}>
                    <Text style={styles.titleText}>Choose currency</Text> 
                </View>
                <View style={styles.listContainer}>
                    {
                        this.state.currency.map((currency, index)=>{
                            return <ListItem
                                key={index}
                                currency={currency}
                                currencyId = {this.state.currencyId}
                                setCurrencyId = {this.setCurrencyId}
                            />
                        })
                    }
                </View>
            </View>
        )
    }
}
export default ChooseCurrency; 
