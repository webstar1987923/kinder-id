import {StyleSheet} from 'react-native'

const React = require("react-native");
const { Dimensions, Platform } = React;
import {Colors, Fonts, Metrics, Images, Constants} from "../../themes"
const deviceHeight = Dimensions.get("window").height;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white',
  },
  statusBar:{
    height: 20
  },
  headerView:{
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingHorizontal: Constants.Marin8,
    height: Constants.Marin20,
  },
  arrow_back:{
    width: Constants.Marin4,
    height:Constants.Marin6,
  },
  kmark:{
    width: Constants.Marin8,
    height:Constants.Marin10,
  },
  notMatchView:{
    height: Constants.Marin14,
    backgroundColor: '#ef6e71',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
  },
  commonTextInput:{
    width: Constants.width*2/3,
    height:Constants.width*2/15,
    borderRadius: Constants.width*2/30,
    backgroundColor: 'white',
    textAlign:'center',
    justifyContent:'center',
    fontSize:Constants.Font25,
    paddingHorizontal: Constants.Marin6,
    
  },
  sideView:{
    flex: 1,
    alignItems: 'center'
  },
  commonText:{
    fontSize: Constants.Font25,
    textAlign: 'center',
    
    color: 'white',
    backgroundColor:'transparent'
  },
  blackText:{
    fontSize: Constants.Font20,
    backgroundColor:'transparent',
    width:Constants.Marin20
  },
  rememberText:{
    fontSize: Constants.Font20,
    backgroundColor:'transparent',
  },
  blackcvsText:{
    fontSize: Constants.Font20,
    backgroundColor:'transparent',
    width:Constants.Marin10,
    marginLeft: Constants.Marin4
  },
  marginView1:{
    marginTop: Constants.Marin16
  },
  marginView2:{
    marginTop: Constants.Marin10
  },
  marginView3:{
    marginTop: Constants.Marin6
  },
  marginView4:{
    marginTop: Constants.Marin4
  },
  marginView5:{
    marginTop: Constants.Marin2
  },
  bottomView: {
    flex: 1,
    alignItems:'center',
    justifyContent: 'flex-end',
    paddingBottom: Constants.Marin6
  },
  mail:{
    width: Constants.Marin4,
    height: Constants.Marin3,
    resizeMode: 'stretch'
  },
  cvs:{
    width: Constants.Marin4,
    height: Constants.Marin3,
    resizeMode: 'stretch',
    marginLeft: Constants.Marin2
  },
  textInput:{
    height: Constants.Marin10,
    fontSize: Constants.Font20,
    justifyContent:'center',
  },
  rowView:{
    flexDirection:'row',
    height: Constants.Marin10,
    paddingLeft:Constants.Marin3,
    alignItems:'center'
  },
  underLineView:{
    height: Constants.Marin10,
    borderColor: '#ededed',
    borderBottomWidth: 1,
    flex: 1,
    flexDirection:'row',
    alignItems:'center',
    marginLeft: Constants.Marin4
  },
  leftLineView:{
    height: Constants.Marin10,
    borderColor: '#ededed',
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    flex: 1,
    flexDirection:'row',
    alignItems:'center',
  },
  nextButton:{
    width: Constants.width/3,
    height: Constants.width/8,
    borderRadius: Constants.width/16,
    borderWidth: 1,
    borderColor: 'white',
    alignItems:'center',
    justifyContent:'center',
    marginBottom: Constants.Marin6
  },
  textInputID:{
    flex: 1,
    height: Constants.Marin16,
    fontSize: Constants.Font30,
    
    textAlign: 'center',
    shadowOffset: {
      width: 1,
      height: 10,
    },
    shadowColor: '#f7f7f7',
    shadowOpacity: 1
  },
  spaceView:{
    flex:1,
    backgroundColor:'white',
    marginTop: Constants.Marin6
  },
  bottomButton:{
    backgroundColor:'#e76065',
    height: Constants.Marin16,
    alignItems:'center',
    justifyContent:'center'
  },
  buttonText:{
    fontSize: Constants.Font20,
    textAlign: 'center',
    
    color: 'white',
    backgroundColor:'transparent'
  },
  whiteText:{
    fontSize: Constants.Font18,
    textAlign: 'center',
    
    color: 'white',
    backgroundColor:'transparent'
  },
  underlineSmallText:{
    fontSize: Constants.Font16,
    textAlign: 'center',
    
    color: 'white',
    textDecorationLine: 'underline',
    backgroundColor:'transparent'
  },
  alignItemCenter:{
    alignItems: 'center',
  },
  circleView:{
    width: Constants.Marin5,
    height: Constants.Marin5,
    borderRadius: Constants.Marin5/2,
    borderColor: 'white',
    borderWidth: 1 ,
    alignItems: 'center' ,
    justifyContent:'center'
  },
  switchView:{
    flex:1,
    alignItems:'flex-end',
    paddingRight:Constants.Marin6
  },
  sss:{
    transform: [{ scaleX: .8 }, { scaleY: .8 }]
  },
  plusText:{
    color: 'white',
    fontSize: Constants.Font30,
    alignSelf:'center',
    marginBottom: Constants.Marin1,
    
  },
  loginText:{
    fontSize: Constants.Font25,
    textAlign:'center',
    marginTop: Constants.Marin16
  },
  codeText:{
    fontSize: Constants.Font25,
    
    textAlign:'center',
  },
  inputView:{
    flexDirection: 'row',
    paddingHorizontal: Constants.Marin8,
    justifyContent:'space-between'
  },
  eachView:{
    marginTop: Constants.Marin10,
    width: Constants.Marin10,
    height: Constants.Marin10,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: '#ef6e71',
    textAlign:'center',
    justifyContent:'center',
    fontSize:Constants.Font30
  },
  forgotButton:{
    marginTop: Constants.Marin8
  },
  forgotText:{
    fontSize: Constants.Font15,
    textAlign:'center',
  }
})
