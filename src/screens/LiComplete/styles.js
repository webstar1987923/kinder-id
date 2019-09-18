import {StyleSheet} from 'react-native'

const React = require("react-native");
const { Dimensions, Platform } = React;
import {Colors,  Metrics, Images, Constants} from "../../themes"
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
  mainView:{
    flex:1,
    backgroundColor: '#ef6e71',
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
    fontFamily: 'OpenSans-Light',
  },
  eachView:{
    flex: 1,
    alignItems: 'center',
    justifyContent:'flex-end',
  },
  commonText:{
    fontSize: Constants.Font25,
    textAlign: 'center',
    fontFamily: 'OpenSans-Light',
    color: 'white',
    backgroundColor:'transparent'
  },
  nextText:{
    fontSize: Constants.Font25,
    textAlign: 'center',
    fontFamily: 'OpenSans-Light',
    backgroundColor:'transparent'
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
  textInput:{
    marginHorizontal: Constants.Marin16,
    height: Constants.Marin16,
    fontSize: Constants.Font30,
    fontFamily: 'OpenSans-Light',
    textAlign: 'center',
    shadowOffset: {
      width: 1,
      height: 10,
    },
    shadowColor: '#f7f7f7',
    shadowOpacity: 1
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
    fontFamily: 'OpenSans-Light',
    textAlign: 'center',
    shadowOffset: {
      width: 1,
      height: 10,
    },
    shadowColor: '#f7f7f7',
    shadowOpacity: 1
  },
  rowTextView:{
    flexDirection:'row',
  },
  smallText:{
    fontSize: Constants.Font30,
    textAlign: 'center',
    // fontFamily: 'OpenSans-Regular',
    color: 'white',
    backgroundColor:'transparent'
  },
  underlineSmallText:{
    fontSize: Constants.Font16,
    textAlign: 'center',
    fontFamily: 'OpenSans-Light',
    color: 'white',
    textDecorationLine: 'underline',
    backgroundColor:'transparent'
  },
  alignItemCenter:{
    alignItems: 'center',
  },
  circleView:{
    // width: Constants.Marin20,
    // height: Constants.Marin20,
    // borderRadius: Constants.Marin10,
    alignItems: 'center' ,
    justifyContent:'center',
    // backgroundColor:'white',
    marginBottom: Constants.Marin6
  },
  check:{
    width:Constants.Marin11,
    height:Constants.Marin8
  },
  plusText:{
    color: 'white',
    fontSize: Constants.Font30,
    alignSelf:'center',
    marginBottom: Constants.Marin1,
    fontFamily: 'OpenSans-Light',
  },
  loginText:{
    fontSize: Constants.Font25,
    fontFamily: 'OpenSans-Bold',
    textAlign:'center',
    marginTop: Constants.Marin16
  },
  codeText:{
    fontSize: Constants.Font25,
    fontFamily: 'OpenSans-Light',
    textAlign:'center',
  },
  inputView:{
    flexDirection: 'row',
    paddingHorizontal: Constants.Marin8,
    justifyContent:'space-between'
  },
  forgotButton:{
    marginTop: Constants.Marin8
  },
  forgotText:{
    fontSize: Constants.Font15,
    textAlign:'center',
    fontFamily: 'OpenSans-Light'
  },
  button:{
    width:Constants.Marin30,
    height:Constants.Marin14,
    borderRadius: Constants.Marin7,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'white',
    marginBottom: Constants.Marin6
  }
})
