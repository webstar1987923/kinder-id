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
    borderWidth: 1,
    borderColor: '#d4d4d4'
  },
  arrow_back:{
    width: Constants.Marin4,
    height:Constants.Marin6,
  },
  check:{
    width: Constants.Marin7,
    height:Constants.Marin5,
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
  sideView:{
    flex: 1,
    alignItems: 'center'
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
    shadowOpacity: 1,
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
  smallText:{
    fontSize: Constants.Font16,
    textAlign: 'center',
    fontFamily: 'OpenSans-Light',
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
    marginVertical: Constants.Marin6,
    width: Constants.Marin12,
    height: Constants.Marin12,
    borderRadius: Constants.Marin6,
    backgroundColor:'#e76065',
    justifyContent:'center',
    alignItems:'center'
  },
  plusText:{
    color: 'white',
    fontSize: Constants.Font30,
    marginBottom:Constants.Marin1,
    backgroundColor:'transparent'
  },
  loginText:{
    fontSize: Constants.Font25,
    fontFamily: 'OpenSans-Bold',
    textAlign:'center',
    marginTop: Constants.Marin16
  },
  codeText:{
    fontSize: Constants.Font20,
    fontFamily: 'OpenSans-Light',
    textAlign:'center',
  },
  buttonText:{
    fontSize: Constants.Font15,
    fontFamily: 'OpenSans-Light',
    textAlign:'center',
    color:'white'
  },
  selectcodeText:{
    fontSize: Constants.Font25,
    fontFamily: 'OpenSans-Bold',
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
    fontFamily: 'OpenSans-Bold',
    textAlign:'center',
  },
  kmark:{
    width: Constants.Marin8,
    height:Constants.Marin10,
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
    justifyContent:'center',
    flex:1,
    paddingBottom:Constants.Marin20
  },
  redButton:{
    flex: 1,
    height:Constants.Marin12,
    backgroundColor:'#e76065',
    alignItems:'center',
    justifyContent:'center',
    borderBottomLeftRadius:10,
  },
  greenButton:{
    flex: 1,
    height:Constants.Marin12,
    backgroundColor:'#e76065',
    alignItems:'center',
    justifyContent:'center',
    borderBottomRightRadius:10,
    borderColor:'#d14c51',
    borderLeftWidth: 0.5,
  },
  rowView:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:Constants.Marin8,
    paddingHorizontal:Constants.Marin6,
  }
})
