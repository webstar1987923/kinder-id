import {StyleSheet} from 'react-native'
import {Colors, Fonts, Metrics, Images, Constants, Percent} from "../../themes"

export default StyleSheet.create({
    main:{
        flex:1,
        alignItems: 'center',
        justifyContent:'center',
    },
    textbox:{
        backgroundColor: 'white',
        width: Percent.width(80),
        paddingHorizontal:Percent.width(2),
        height:Constants.Marin20,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#f5f5f5',
        shadowOpacity: 1,
        shadowOffset: {
            width: 1,
            height: 5,
        },
    },
    codeText:{
        fontSize: Percent.fontSize(20),
        fontFamily: 'OpenSans-Light',
        textAlign:'center',
    },
    redButton:{
        width: Percent.width(80),
        height: Percent.width(12),
        backgroundColor:'#e76065',
        alignItems:'center',
        justifyContent:'center',
        borderBottomLeftRadius:5,
        borderBottomRightRadius:5,
        marginBottom: Percent.width(30)
    },
    buttonText:{
        fontSize: Percent.fontSize(18),
        fontWeight: '400',
        fontFamily: 'OpenSans-Light',
        textAlign:'center',
        color:'white'
    },
})
