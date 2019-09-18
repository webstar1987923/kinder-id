import React, { Component } from "react"
import { View, Image, Text, TouchableOpacity, TextInput, ImageBackground, StatusBar,ScrollView} from "react-native"
import { Images } from "../../themes"
import styles from './styles'
import MyStatusBar from '../../components/MyStatusBar';


class NewOrder extends Component {
  constructor(props){
    super(props)
    this.state=({
      select1: true,
      select2: false,
    })
  }
  
  static navigationOptions = {
    header: false,
    gesturesEnabled: false,
  };

  goBack(){
    return this.props.navigation.navigate('MainScreen');
  }

  goOrder(){
    return this.props.navigation.navigate('NewOrderDetails');
  }

  render(){
    const { navigate } = this.props.navigation;
  	return(
      <View style = {styles.container}>
      <MyStatusBar backgroundColor="white"/>
          <View style={styles.headerView}>
              <View style={{flex:1}}>
                
              </View>
              <View style={{flex:1,alignItems:'center'}}>
              <Image source={Images.kmark} style={styles.kmark}/>
              </View>
              <View style={{flex:1}}/>
          </View>          
          <View style={styles.marginSecondView}>
            <Text style={styles.codeText}>Do you wish to order a new KinderId?</Text>
            <View style={styles.rowView}>
              <TouchableOpacity onPress={this.goBack.bind(this)} style={styles.redButton}>
                <Text style={styles.buttonText}>Go back</Text> 
              </TouchableOpacity>
               <TouchableOpacity onPress={this.goOrder.bind(this)} style={styles.greenButton}>
                <Text style={styles.buttonText}>Order</Text> 
              </TouchableOpacity>
            </View> 
          </View>
      </View>
    )
  }
}
export default NewOrder;
