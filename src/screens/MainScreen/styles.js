import {StyleSheet} from 'react-native'
import {Colors,  Metrics, Images, Constants, Percent} from "../../themes"

export default StyleSheet.create({
    shadowView:{
        marginTop: Constants.Marin6,
        marginBottom: Constants.Marin6,
        marginHorizontal:Constants.Marin6,
        height: Constants.Marin30,
        alignItems:'center',
        justifyContent:'center',
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
        shadowOpacity: 1,
        shadowColor: '#f5f5f5',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        backgroundColor:'white',
    },
    boldText:{
        fontSize: Constants.Font25,
        // fontWeight: '300',
        fontFamily: 'OpenSans',
        textAlign:'center',
    },
    codeText:{
        marginTop: Constants.Marin1,
        fontSize: Percent.fontSize(22),
        fontFamily: 'OpenSans-Light',
        textAlign:'center',
    },
})
