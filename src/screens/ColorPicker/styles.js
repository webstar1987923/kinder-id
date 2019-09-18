import {StyleSheet} from 'react-native'
import {Colors, Fonts, Metrics, Images, Constants, Percent} from "../../themes"

export default StyleSheet.create({
    marginSecondView:{
        alignItems:'center',
        justifyContent:'space-between',
        marginTop: Constants.Marin10,
    },
    titleText:{
        fontSize: Constants.Font*26,
        fontWeight: '700',
        textAlign:'center',
    },
    codeText:{
        fontSize: Percent.fontSize(20),
        fontFamily: 'OpenSans-Light',
        textAlign:'center',
    },
    colorWrapper:{
        paddingHorizontal:Percent.width(10),
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginTop: Percent.width(10),
    },
    circle:{
        width: Percent.width(15),
        height: Percent.width(15),
        borderRadius: Percent.width(15),
    },
    blue:{
        backgroundColor: '#9ee3fd',
    },
    red:{
        backgroundColor: '#fa7372',
    },
    black:{
        backgroundColor: '#272727',
    },
    gray:{
        backgroundColor: '#c6c6c6',
    },
    active:{
        backgroundColor: 'transparent',
        width: Percent.width(17),
        height: Percent.width(17),
        borderRadius: Percent.width(17),
        borderWidth: Percent.width(1),
        borderColor: 'white',
        shadowOffset: {
            width: 3,
            height: 3,
        },
        shadowColor: '#c6c6c6',
        shadowOpacity: 1
    },
    inActive:{
        backgroundColor: 'transparent',
        width: Percent.width(17),
        height: Percent.width(17),
        borderRadius: Percent.width(17),
        borderWidth: Percent.width(1),
        borderColor: 'transparent',
        shadowOffset: {
            width: 3,
            height: 3,
        },
        shadowColor: '#dedede',
        shadowOpacity: 1
    }
})
