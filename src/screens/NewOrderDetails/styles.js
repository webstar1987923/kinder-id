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
    borderColor: '#E6E6E6',
    borderBottomWidth: 1,
    backgroundColor: 'white'
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
    marginTop: Constants.Marin4
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
  colorView:{
    marginTop: Constants.Marin6,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingHorizontal:Constants.Marin20,
  },
  sideView:{
    flex: 1,
    alignItems: 'center'
  },
  shadowView:{
    marginTop: Constants.Marin3,
    marginHorizontal:Constants.Marin20,
    alignItems:'center',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowColor: '#f5f5f5',
    shadowOpacity: 1,
    backgroundColor:'white',
    paddingVertical: Constants.Marin1
  },
  commonText:{
    fontSize: Constants.Font25,
    textAlign: 'center',
    fontFamily: 'OpenSans-Light',
    color: 'white',
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
    width:Constants.width*2/3,
    height: Constants.Marin14,
    fontSize: Constants.Font30,
    fontFamily: 'OpenSans-Light',
    textAlign: 'center',
    shadowOffset: {
      width: 1,
      height: 3,
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
  rowTextView:{
    flexDirection:'row',
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
  absoluteCircle:{
    position:'absolute',
    top:0,
    right:0,
    width: Constants.Marin4,
    height: Constants.Marin4,
    borderRadius: Constants.Marin2,
    backgroundColor:'white',
    alignItems:'center',
    justifyContent:'center'
  },
  smallText:{
    fontSize:Constants.Font12,
    fontFamily: 'OpenSans-Light',
  },
  miniText:{
    fontSize:Constants.Font11,
    fontFamily: 'OpenSans-Light',
  },
  clickText:{
    fontSize:Constants.Font14,
    fontFamily: 'OpenSans-Light',
  },
  circleView1:{
    width: Constants.Marin10,
    height: Constants.Marin10,
    borderRadius: Constants.Marin6,
    backgroundColor:'#3fc1e6',
  },
  circleView2:{
    width: Constants.Marin10,
    height: Constants.Marin10,
    borderRadius: Constants.Marin6,
    backgroundColor:'#fb6a6a',
  },
  circleView3:{
    width: Constants.Marin10,
    height: Constants.Marin10,
    borderRadius: Constants.Marin6,
    backgroundColor:'#f5f2f2',
  },
  circleView4:{
    width: Constants.Marin10,
    height: Constants.Marin10,
    borderRadius: Constants.Marin6,
    backgroundColor:'#7e7e7e',
  },
  plusText:{
    color: 'white',
    fontSize: Constants.Font30,
    marginBottom:Constants.Marin1,
    backgroundColor:'transparent',
    fontFamily: 'OpenSans-Light',
  },
  loginText:{
    fontSize: Constants.Font25,
    textAlign:'center',
    marginTop: Constants.Marin16,
    fontFamily: 'OpenSans-Light',
  },
  codeText:{
    fontSize: Constants.Font20,
    fontFamily: 'OpenSans-Light',
    textAlign:'center',
  },
  adminiText:{
    marginTop: Constants.Marin1,
    fontSize: Constants.Font18,
    fontFamily: 'OpenSans-Light',
    textAlign:'center',
  },
  johnText:{
    marginTop: Constants.Marin3,
    fontSize: Constants.Font25,
    textAlign:'center',
  },
  numberText:{
    fontSize: Constants.Font25,
    fontFamily: 'OpenSans-Light',
    textAlign:'center',
  },
  nextText:{
    fontSize: Constants.Font25,
    fontFamily: 'OpenSans-Light',
    textAlign:'center',
  },
  marginFirstView:{
    marginTop: Constants.Marin5,
    alignItems:'center'
  },
  marginSecondView:{
    marginTop: Constants.Marin5,
    alignItems:'center'
  },
  inputView:{
    marginTop: Constants.Marin1,
    justifyContent:'center',
    alignItems:'center',
  },
  remainView:{
    flex:1,
    alignItems:'center',
    justifyContent:'flex-end',
    paddingBottom:Constants.Marin4
  },
  shadowButton:{
    width:Constants.Marin30,
    height:Constants.Marin15,
    borderRadius:Constants.Marin7,
    alignItems:'center',
    justifyContent:'center',
    shadowOffset: {
      width: 3,
      height: 4,
    },
    shadowColor: '#f5f5f5',
    backgroundColor:'white',
    shadowOpacity: 1,
  },
  countrySelect:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
  },
  countryCheck:{
    width: Constants.Marin3,
    height: Constants.Marin2,
  }
})
