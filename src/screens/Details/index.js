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

  goBack(){
    this.props.navigation.goBack()
  }

  goSave(){
    this.props.navigation.navigate('Save')
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
          <View style={styles.marginFirstView}>
            <Text style={styles.codeText}>Fill in your child&rsquo;s details</Text> 
          </View>
          <View style={styles.marginSecondView}>
            <Text style={styles.codeText}>Full name</Text> 
          </View>
          <View style={styles.inputView}>
            <TextInput placeholder='Mary Smith' style={styles.textInput} />  
          </View>
          <View style={styles.marginSecondView}>
            <Text style={styles.codeText}>Wristband ID</Text> 
          </View>
          <View style={styles.inputRowView}>
            <TextInput placeholder='AB 00000000' style={styles.textRowInput} /> 
            <View style={styles.cameraView}>
              <TouchableOpacity>
                <Image source={Images.camera} style={styles.camera}/>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.marginSecondView}>
            <Text style={styles.codeText}>Press the camera icon to take a{'\n'}picture of your wristband</Text> 
          </View>
          <View style={styles.marginThirdView}>
            <Text style={styles.codeText}>Add guardian (1-4)</Text> 
          </View>
          <View style={styles.marginSecondView}>
            <TouchableOpacity style={styles.circleView}>
              <Text style={styles.plusText}>+</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.remainView}>
            <TouchableOpacity onPress={this.goSave.bind(this)}  style={styles.shadowButton}>
              <Text style={styles.nextText}>Next</Text> 
            </TouchableOpacity>  
          </View>
      </View>
    )
  }
}
export default Welcome
