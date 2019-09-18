import {StyleSheet} from 'react-native'
import {Colors,  Metrics, Images, Constants} from "../../themes"

export default StyleSheet.create({
    marginSecondView:{
        marginTop: Constants.Marin5,
        alignItems:'center'
    },
    marginThirdView:{
        marginTop: Constants.Marin7,
        alignItems:'center'
    },
    inputRowView:{
        marginTop: Constants.Marin1,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row'
    },
    textRowInput:{
        width:Constants.width*5/9,
        height: Constants.Marin12,
        fontSize: Constants.Font25,
        fontFamily: 'OpenSans-Light',
        textAlign: 'center',
        shadowOffset: {
            width: 3,
            height: 3,
        },
        shadowColor: '#f7f7f7',
        backgroundColor:'white',
        shadowOpacity: 1
    },
    cameraView:{    
        height: Constants.Marin12,
        width:Constants.width*1/9,
        alignItems:'center',
        justifyContent:'center',
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5
    },
    camera:{
        height:Constants.Marin3,
        width:Constants.Marin4,
        resizeMode:'stretch'
    },
    codeText:{
        fontSize: Constants.Font20,
        fontFamily: 'OpenSans-Light',
        textAlign:'center',
    },
    circleView:{
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
})
