import axios from 'axios';
import React, { Component } from "react"
import { connect } from 'react-redux';
import { View, Image, Text, TouchableOpacity, TextInput, ImageBackground, StatusBar, AsyncStorage} from "react-native"
import { resetForm } from '../../actions/regActions';
// let { Lottie } = DangerZone;
import { Images } from "../../themes"
import styles from './styles';
import MyStatusBar from '../../components/MyStatusBar';


class Complete extends Component {
  constructor(props){
    super(props);
    this.state = {
      message: "Registering User..."      
    };
  }
  
  static navigationOptions = {
    header: false,
    gesturesEnabled: false,
  };

  componentDidMount() {
    this._handleRegisterUser();    
  }
  
  _handleRegisterUser = async () => {
    const {    
      childName,
      wristband,
      // uri,
      gaurdianData
    } = this.props;
    console.log('guardian newData ', gaurdianData);
    
    const apiUrl = "https://api.kinder-id.com/mobile/addchildren";   
    const token = await AsyncStorage.getItem('kinderID_sessionToken');
    const newData = new FormData();        
    // newData.append('avatar', {
    //   uri,
    //   type: 'image/jpg', 
    //   name: wristband
    // });
       
    newData.append( 'childrenName', childName );
    newData.append( 'wristband', wristband ) ;
    // if(gaurdianData)
    newData.append('gaurdians', JSON.stringify(gaurdianData));
    console.log('newData', newData);
    try {
      let response = await fetch(apiUrl, {
        method: 'post',
        body: newData,        
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': 'Bearer ' + token        
        }
      });
      this.setState({message: "Payment Complete"});
      this.props.resetForm();
       
    } catch (err) {
      this.setState({message : "An error occured while registering"});   
    }
    
  };
 
  goBack(){
    this.props.navigation.goBack()
  }

  goNext(){    
    this.props.navigation.navigate('MainScreen')
  }

  render(){
    console.log('Im new complete screen');
    
    const { navigate } = this.props.navigation;
  	return(
      <View style = {styles.container}>
      <MyStatusBar backgroundColor="white"  barStyle="dark-content"/>
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
          <View style={styles.mainView}>
            <View style={styles.eachView}>
                <View style={styles.circleView}>
                  {/* add image here */}
                </View>
                <Text style={styles.smallText}>{this.state.message}</Text> 
            </View>
            <View style={styles.eachView}>
              <TouchableOpacity style={styles.button} onPress={() => this.goNext()}>
                <Text style={styles.nextText}>Next</Text> 
              </TouchableOpacity>
            </View>
          </View>
      </View>
    )
  }
}

const mapStateToProps = ({ reg, auth }) => {
  const {    
    childName,
    wristband,
    // uri,
    gaurdianData
   } = reg;
   const { email } = auth.userEmail.user;
  return {        
    childName,
    wristband,
    // uri,
    gaurdianData
   }
};

export default connect(mapStateToProps, {resetForm})(Complete);
