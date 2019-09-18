import {StyleSheet} from 'react-native'
import {Colors, Fonts, Metrics, Images, Constants, Percent} from "../../themes"

export default StyleSheet.create({
    marginSecondView:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginHorizontal: Constants.Marin10,
        marginTop: Constants.Marin5,
    },
    codeText:{
        fontFamily: 'OpenSans-Light',
        fontWeight: 'bold',
        fontSize: Constants.Font25,        
        textAlign:'center',
    },
    stripe:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        height: Constants.Marin*65,
        backgroundColor:'#9a9696',
        borderRadius:Constants.Marin1,
        paddingHorizontal:Constants.Marin1
    },
    miniText:{
        fontFamily: 'OpenSans-Light',
        fontSize:Constants.Font1,
        color:'white',
        fontWeight:'600'
    },
    stripeText:{
        fontFamily: 'OpenSans-Light',
        fontSize:Constants.Font10,
        color:'white',
        fontWeight:'bold'
    },
    marginRowSecondView:{
        marginTop: Constants.Marin*90,
        height:Constants.Marin*100,
        alignItems:'center',
        borderBottomWidth: 1,
        borderColor: '#cdcdcd',
        justifyContent:'center',
        marginHorizontal: Constants.Marin10,
    },
    cardNumText:{
        color: '#505050',
        fontSize: Constants.Font*20,
        textAlign: 'center',
        width: Percent.width(80)
    },
    commonText:{
        color: '#505050',
        fontSize: Constants.Font*20,
        textAlign: 'center',
        backgroundColor:'transparent'
    },
    other:{
        flexDirection:'row',
        marginHorizontal:Constants.Marin10,
        justifyContent:'space-between'
    },
    marginColSecondView:{
        height:Constants.Marin*150,
        width: Constants.Marin*360,
        borderBottomWidth: 1,
        borderColor: '#cdcdcd',
        alignItems: 'center',
        justifyContent:'center',
        paddingTop: Percent.width(3),
    },
    pay:{
        height: Constants.Marin*165,
        alignItems:'center',
        justifyContent:'center',
    },
    whiteText:{
        fontSize: Constants.Font*24,
        color: 'white',
        textAlign:'center',
        fontWeight:'800'
    },
    btnBackground:{
        width: Percent.width(100),
        alignSelf:'center',
    },
})
