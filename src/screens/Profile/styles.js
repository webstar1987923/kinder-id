import {StyleSheet} from 'react-native'
import {Colors, Fonts, Metrics, Images, Constants, Percent} from "../../themes"

export default StyleSheet.create({
    textContainer:{
        marginTop: Percent.width(5),
    },
    deleteText:{
        color: '#747474',
        fontSize: Constants.Font18,
        fontFamily: 'OpenSans-Light',
        textAlign:'center',
    },
    shadowView:{
        flexDirection: 'row',
        justifyContent: 'center',
        width:Constants.width*2/3,
        paddingVertical: 10,
        borderRadius: 10,
        shadowOffset: {
            width: 3,
            height: 3,
        },
        shadowColor: '#f7f7f7',
        backgroundColor:'white',
        shadowOpacity: 1
    },
    countryName:{
        fontSize: Constants.Font25,
        fontFamily: 'OpenSans-Light',
        textAlign: 'center',
    }
})
