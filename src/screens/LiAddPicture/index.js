import _ from 'lodash';
import React, { Component } from "react"
import { View, Image, Text, TouchableOpacity, TextInput, ImageBackground, StatusBar, ListView, KeyboardAvoidingView, PickerIOS} from "react-native"
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import axios from 'axios';
import {connect} from 'react-redux';
// import { ImagePicker } from 'expo';
import { Images } from "../../themes";
import styles from './styles';
import Spinner from '../../components/spinner';
import { childUpdate, saveImage } from '../../actions/regActions';
import ErrorContainer from '../../components/ErrorContainer';
import MyStatusBar from '../../components/MyStatusBar';

// const data = ["belal Nabhani", "Hakam Nabhani", "hussein Dib"];

class AddPicture extends Component {
  constructor(){
    super();

    
    this.state = {
      color: '#e76065',
      loading: false,
      showError: ''
    };    
  }  
  // componentWillMount() {
  //   const obj = [
  //      { name: "belal", email: "bel"},
  //      { name: "ahmad", email: "ahm"},
  //      { name: "rema", email: "rem"},
  //   ]
  //   AsyncStorage.setItem('test', JSON.stringify(obj))
  // let obj = await AsyncStorage.getItem('test')
  // obj = JSON.parse(obj)  
  // console.log(obj)
  // const data = _.map(obj, 'name')
  // this.createDataSource(data)  
  // }
  // componentWillReceiveProps(nextProps) {
  //   this.createDataSource(nextProps)
  // }
  
  
  // createDataSource(data) {
  //   console.log(data);
  //   const ds = new ListView.DataSource({
  //     rowHasChanged: (r1, r2) => r1 !== r2
  //   });
  
  //   this.dataSource = ds.cloneWithRows(data);
  // }
  
  static navigationOptions = {
    gesturesEnabled: false,
    header: false,
  };

  saveData = async () => {
    
  }

  takePhoto = async () => {
    // let pickerResult = await ImagePicker.launchCameraAsync();
    // console.log('PICTURE ', pickerResult);
    
    // if (!pickerResult.cancelled) {
    //   this.props.saveImage(pickerResult.uri);
    //   this.setState({color: '#53B768'})
    // }
  };

  

  handleSubmit = async() => {
    const { childName, wristband, uri } = this.props; 

    // if(wristband=='' || uri=='' || childName=='') {
    //   return this.setState({showError: 'All fields are required!'})
    // }

    // return this.props.navigation.navigate('Payment');
    return this.props.navigation.navigate('LiComplete');
  }

  addGuardian = () => {
    this.props.navigation.navigate('LiAddGaurdian');
  }

  goBack(){
    this.props.navigation.goBack()
  }

  render(){        
    console.log('im test screen');
    
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
          {
              this.state.showError?
              <ErrorContainer 
                  bgColor="#fd6d72"
                  color="white"
                  errMsg={this.state.showError}
              />
              :null
          }
          <KeyboardAwareScrollView>      
            <View style={styles.marginFirstView}>
              <Text style={styles.codeText}>Fill in your child&rsquo;s details</Text> 
            </View>
            <View style={styles.marginSecondView}>
              <Text style={styles.codeText}>Full Name</Text> 
            </View>
            <View style={styles.inputView}>
              <TextInput style={styles.textInput} 
                underlineColorAndroid='transparent'               
                placeholder="Mary Smith"
                value={this.props.childName}
                onChangeText={value => this.props.childUpdate({ prop: 'childName', value })}
                autoCorrect={false}
              />  
            </View>
            <View style={styles.marginSecondView}>
              <Text style={styles.codeText}>Wristband ID</Text> 
            </View>
            <View style={styles.inputRowView}>
              <TextInput style={styles.textRowInput} 
                underlineColorAndroid='transparent'               
                placeholder="AB 00000000"
                value={this.props.wristband}
                onChangeText={value => this.props.childUpdate({ prop: 'wristband', value })}
                autoCapitalize="none"
                autoCorrect={false}
              /> 
              <View style={[styles.cameraView, {backgroundColor: this.state.color }]}>
                <TouchableOpacity onPress={this.takePhoto} >
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
              <TouchableOpacity style={styles.circleView} onPress={this.addGuardian}>
                <Text style={styles.plusText}>+</Text>
              </TouchableOpacity>
            </View>
            </KeyboardAwareScrollView>           
            <View style={styles.remainView}>
              <TouchableOpacity onPress={this.handleSubmit} style={styles.shadowButton}>
                <Text style={styles.nextText}>Next</Text>
              </TouchableOpacity>
            </View>
      </View>
    )
  }
}

const mapStateToProps = ({ reg }) => {
  const { childName, wristband, uri } = reg;
  return { childName, wristband, uri }
}

export default connect(mapStateToProps, {childUpdate, saveImage})(AddPicture)
