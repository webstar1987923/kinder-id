import React, { Component } from "react"
import { View, Image, Text, TouchableOpacity, TextInput, ImageBackground, StatusBar, KeyboardAvoidingView} from "react-native"
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {connect} from 'react-redux';
import { Images } from "../../themes";
import styles from './styles';
import Spinner from '../../components/spinner';
import { gaurdianUpdate, guardianSave } from '../../actions/regActions';
import ErrorContainer from '../../components/ErrorContainer';
import MyStatusBar from '../../components/MyStatusBar';

class AddGaurdian extends Component {
  constructor(props){
    super(props);
    this.state={
      showError: ""
    }
  }
  
  static navigationOptions = {
    header: false,
    gesturesEnabled: false,
  };
  
  goBack(){
    this.props.navigation.goBack()
  }

  goSave(){
    const { gaurdianName, gaurdianTel, gaurdianEmail, gaurdianData } = this.props;
    const data = { gaurdianName, gaurdianTel, gaurdianEmail };
    let dataArray = gaurdianData;
    dataArray.push(data);
    this.props.guardianSave(dataArray);
    this.props.navigation.navigate('LiAddPicture')
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
            <View style={styles.marginSecondView}>
              <Text style={styles.codeText}>Guardian&rsquo;s name</Text> 
            </View>
            <View style={styles.inputView}>
              <TextInput  style={styles.textInput}
                underlineColorAndroid='transparent'
                placeholder='Mary Smith'
                value={this.props.gaurdianName}
                onChangeText={value => this.props.gaurdianUpdate({ prop: 'gaurdianName', value })}
                autoCorrect={false}
              />  
            </View>
            <View style={styles.marginSecondView}>
              <Text style={styles.codeText}>Tlf. with countrycode</Text> 
            </View>
            <View style={styles.inputView}>
              <TextInput   style={styles.textInput} 
                underlineColorAndroid='transparent'
                placeholder='(+47) 000 00 000'
                keyboardType='phone-pad'
                value={this.props.gaurdianTel}
                onChangeText={value => this.props.gaurdianUpdate({ prop: 'gaurdianTel', value })}
              />  
            </View>
            <View style={styles.marginSecondView}>
              <Text style={styles.codeText}>Email</Text> 
            </View>
            <View style={styles.inputView}>
              <TextInput  style={styles.textInput} 
                underlineColorAndroid='transparent'
                placeholder='marysmith@mail.com'
                keyboardType='email-address'
                value={this.props.gaurdianEmail}
                onChangeText={value => this.props.gaurdianUpdate({ prop: 'gaurdianEmail', value })}
                autoCorrect={false}
              />  
            </View>
          </KeyboardAwareScrollView>
          <View style={styles.remainView}>
            <TouchableOpacity onPress={this.goSave.bind(this)} style={styles.shadowButton}>
              <Text style={styles.nextText}>Save</Text> 
            </TouchableOpacity>  
          </View>
      </View>
    )
  }
}

const mapStateToProps = ({ reg }) => {
  const { gaurdianName, gaurdianTel, gaurdianEmail, gaurdianData } = reg;
  return { gaurdianName, gaurdianTel, gaurdianEmail, gaurdianData }
}

export default connect(mapStateToProps, {gaurdianUpdate, guardianSave})(AddGaurdian)
