import {StyleSheet} from 'react-native'
import {Colors,  Metrics, Images, Constants} from "../../themes"

export default StyleSheet.create({
    mainView:{
        backgroundColor:'white',
        paddingBottom: Constants.Marin4,
        borderBottomLeftRadius: Constants.Marin6,
        borderBottomRightRadius: Constants.Marin6,
        borderBottomWidth:1,
        borderBottomColor: '#e6e6e6',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowColor: '#e6e6e6',
        shadowOpacity: 1
    },
    notMatchView:{
        height: Constants.Marin14,
        backgroundColor: '#ef6e71',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    sideView:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    circleView:{
        width: Constants.Marin5,
        height: Constants.Marin5,
        borderRadius: Constants.Marin5/2,
        borderColor: 'white',
        borderWidth: 1 ,
        alignItems: 'center' ,
        justifyContent:'center',
        marginRight: Constants.Marin1
    },
    smallText:{
        fontSize: Constants.Font16,
        textAlign: 'center',
        fontFamily: 'OpenSans-Light',
        color: 'white',
        backgroundColor:'transparent'
    },
    loginText:{
        fontSize: Constants.Font25,
        fontFamily: 'OpenSans-Bold',
        textAlign:'center',
        marginTop: Constants.Marin16
    },
    codeText:{
        fontSize: Constants.Font25,
        fontFamily: 'OpenSans-Light',
        textAlign:'center',
    },
    inputView:{
        flexDirection: 'row',
        paddingHorizontal: Constants.Marin8,
        justifyContent:'space-between'
    },
    eachView:{
        marginTop: Constants.Marin10,
        width: Constants.Marin10,
        height: Constants.Marin10,
        borderRadius: 2,
        borderWidth: 1,
        borderColor: '#ef6e71',
        textAlign:'center',
        justifyContent:'center',
        fontSize:Constants.Font30
    },
    forgotButton:{
        marginTop: Constants.Marin8
    },
    forgotText:{
        fontSize: Constants.Font15,
        textAlign:'center',
        fontFamily: 'OpenSans-Light'
    },
})
