import React, { Component } from "react"
import { View, Image, Text, TouchableOpacity, TextInput, ImageBackground, StatusBar, Switch} from "react-native"
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

  goComplete(){
    this.props.navigation.navigate('FinderMap');
  }
  render(){
    const { navigate } = this.props.navigation;
  	return(
      <ImageBackground source={Images.background} style = {styles.container}> 
      <MyStatusBar backgroundColor="transparent" barStyle="light-content"/>
          <View style={styles.headerView}>
              <View style={{flex:1}}>
              
              </View>
              <View style={{flex:1,alignItems:'center'}}>
              <Image source={Images.whitemark} style={styles.kmark}/>
              </View>
              <View style={{flex:1}}/>
          </View>
          <Text style={styles.whiteText}>Please pay the $14.90{'\n'}and #3 for delivery</Text> 
          <View style={styles.spaceView}>
            <View style={styles.spaceView}>
              <View style={styles.rowView}>
                <Image source={Images.mail} style={styles.mail}/>
                <View style={styles.underLineView}>
                  <Text style={styles.blackText}>Email</Text>
                  <TextInput placeholder='you@email.com' style={styles.textInput}/>
                </View>
              </View>
              <View style={styles.rowView}>
                <Image source={Images.card} style={styles.mail}/>
                <View style={styles.underLineView}>
                  <Text style={styles.blackText}>Card</Text>
                  <TextInput placeholder='•••• •••• •••• ••••' secureTextEntry={true} style={styles.textInput}/>
                </View>
              </View>
              <View style={styles.rowView}>
                <Image source={Images.calendar} style={styles.mail}/>
                <View style={styles.underLineView}>
                  <Text style={styles.blackText}>Expiry</Text>
                  <TextInput placeholder='MM / YY' style={styles.textInput}/>
                </View>
                <View style={styles.leftLineView}>
                  <Image source={Images.cvs} style={styles.cvs}/>
                  <Text style={styles.blackcvsText}>cvs</Text>
                  <TextInput placeholder='123' style={styles.textInput}/>
                </View>
              </View>
              <View style={styles.rowView}>
                <Image source={Images.account} style={styles.mail}/>
                <View style={styles.underLineView}>
                  <Text style={styles.rememberText}>Remember me</Text>
                  <View style={styles.switchView}>
                    <Switch style={styles.sss}/>
                  </View>  
                </View>
              </View>
            </View>
            <TouchableOpacity onPress={this.goComplete.bind(this)} style={styles.bottomButton}>
              <Text style={styles.buttonText}>Pay $17.90</Text>
            </TouchableOpacity>
          </View>
      </ImageBackground>
    )
  }
}
export default Welcome
