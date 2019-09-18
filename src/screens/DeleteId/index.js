import React, { Component } from "react"
import { View, Image, Text, TouchableOpacity, TextInput, ImageBackground, StatusBar} from "react-native"
import { Images } from "../../themes"
import styles from './styles'
import MyStatusBar from '../../components/MyStatusBar';


class Welcome extends Component {
  constructor(props){
    super(props)
  }
  
  static navigationOptions = {
    header: false,
    gesturesEnabled: false,
  };

  goLogin(navigate){
    this.props.navigation.goBack();
  }

  goBack(){
    this.props.navigation.goBack()
  }

  goForgot(){
    this.props.navigation.navigate('Delivery')
  }

  render(){
    const { navigate } = this.props.navigation;
  	return(
      <View style = {styles.container}>
      <MyStatusBar backgroundColor="white"/>
          <View style={styles.headerView}>
              <View style={{flex:1}}>
                <TouchableOpacity onPress={this.goBack.bind(this)} style={styles.arrow_back}>
                  <Image source={Images.arrow_back} style={styles.arrow_back}/>
                </TouchableOpacity>  
              </View>
              <View style={{flex:1,alignItems:'center'}}>
              <Image source={Images.kmark} style={styles.kmark}/>
              </View>
              <View style={{flex:1}}/>
          </View>
          <View style={styles.notMatchView}>
            <View style={styles.sideView}>
                <View style={styles.circleView}>
                  <Text style={styles.smallText}>i</Text> 
                </View>
            </View>    
            <Text style={styles.smallText}>Your security code does not match</Text> 
            <View style={styles.sideView} />
          </View>
          <Text style={styles.loginText}>Are you sure?</Text> 
          <Text style={styles.codeText}>Enter your security code to{'\n'}delete your KinderId</Text> 
          <View style={styles.inputView}>
            <TextInput secureTextEntry={true} autoFocus={true} keyboardType='phone-pad' style={styles.eachView} />
            <TextInput secureTextEntry={true} style={styles.eachView} />
            <TextInput secureTextEntry={true} style={styles.eachView} />
            <TextInput secureTextEntry={true} style={styles.eachView} />
            <TextInput secureTextEntry={true} style={styles.eachView} />
            <TextInput secureTextEntry={true} style={styles.eachView} />           
          </View>
          <TouchableOpacity onPress={this.goForgot.bind(this)} style={styles.forgotButton}>
            <Text style={styles.forgotText}>Forgotten password?</Text> 
          </TouchableOpacity>  
      </View>
    )
  }
}
export default Welcome
