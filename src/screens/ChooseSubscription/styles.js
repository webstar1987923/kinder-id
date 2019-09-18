import {StyleSheet} from 'react-native'
import {Colors, Fonts, Metrics, Images, Constants, Percent} from "../../themes"

export default StyleSheet.create({
    marginSecondView:{
        marginTop: Constants.Marin*120,
        alignItems:'center'
    },
    bigText:{
        fontSize: Constants.Font*24,
        fontWeight: '700',
        textAlign:'center',
    },
    smallText:{
        fontSize: Constants.Font16,
        textAlign: 'center',
        color: 'white',
        backgroundColor:'transparent'
    },
    inputView:{
        justifyContent:'center',
        alignItems:'center',
        marginTop: Constants.Marin8
    },
    textInput:{
        width:Constants.Marin*600,
        height: Constants.Marin14,
        fontSize: Constants.Font*17,
        backgroundColor:'#fff',
        textAlign: 'center',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowColor: '#f7f7f7',
        shadowOpacity: 1,
        borderRadius: Constants.Marin5,
        fontWeight: '300'
    },
    absoluteView:{
        position:'absolute',
        top: 0,
        right: Constants.Marin20,
        width: Constants.Marin8,
        height:Constants.Marin8,
        borderRadius: Constants.Marin4,
        backgroundColor:'#e76065',
        alignItems:'center',
        justifyContent:'center'
    },
    miniText:{
        fontSize: Constants.Font12,
        textAlign: 'center',
        color: 'white',
        backgroundColor:'transparent'
    },
    remainView:{
        flex: 1,
        justifyContent:'flex-end'
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
