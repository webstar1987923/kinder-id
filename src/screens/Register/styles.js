import {StyleSheet} from 'react-native'
import {Colors,  Metrics, Images, Constants, Percent} from "../../themes"

export default StyleSheet.create({
    footerView:{
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: Percent.width(10),
        paddingBottom: Percent.width(5)
    },
    marginFirstView:{
        marginTop: Constants.Marin5,
        alignItems:'center'
    },
    codeText:{
        fontSize: Constants.Font20,
        fontFamily: 'OpenSans-Light',
        textAlign:'center',
    },
    marginView2:{
        marginTop: Constants.Marin10
    },
    errorText:{
        fontSize: Constants.Font25,
        textAlign: 'center',    
        color: Colors.kinderIdColor,
        backgroundColor:'transparent'
    },
})
