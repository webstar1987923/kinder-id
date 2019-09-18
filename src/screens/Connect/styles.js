import {StyleSheet} from 'react-native'
import {Colors, Fonts, Metrics, Images, Constants, Percent} from "../../themes"

export default StyleSheet.create({
    marginSecondView:{
        alignItems:'center',
        justifyContent:'space-between',
        marginTop: Constants.Marin10,
    },
    codeText:{
        fontSize: Constants.Font*26,
        fontWeight: '700',
        textAlign:'center',
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
    commonText:{
        color: '#505050',
        fontSize: Constants.Font*20,
        textAlign: 'center',
        backgroundColor:'transparent'
    },
    stripe:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        height: Constants.Marin*65,
        width: Constants.Marin*240,
        backgroundColor:'#9a9696',
        borderRadius:Constants.Marin1,
        paddingHorizontal:Constants.Marin1,
        alignSelf:'center',
        marginTop:Constants.Marin*120
    },
    miniText:{
        fontSize:Constants.Font1,
        color:'white'
    },
    stripeText:{
        fontSize:Constants.Font10,
        color:'white',
        fontWeight:'600'
    },
    nokView:{
        flexDirection:'row',
        marginHorizontal:Constants.Marin*400,
        paddingHorizontal:Constants.Marin2,
        borderBottomWidth:1,
        borderColor:'#cdcdcd',
        height:Constants.Marin8,
        alignItems:'center',
        justifyContent:'space-between',
        marginTop:Constants.Marin*100
    },
    nok:{
        fontSize:Constants.Font18,
    },
    dropdown:{
        width:Constants.Marin*30,
        height:Constants.Marin*30/672*406
    },
    remainView:{
        flex:1,
        justifyContent:'flex-end',
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
