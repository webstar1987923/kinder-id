import {StyleSheet} from 'react-native'
import {Colors,  Metrics, Images, Constants, Percent} from "../../themes"

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center',
    },
    markImage:{
        width: Constants.width/2,
        height:Constants.width/11.2,
        resizeMode: 'stretch',
        marginTop: Constants.Marin15
    },
    marginView1:{
        marginTop: Constants.Marin16
    },
    commonText:{
        fontSize: Constants.Font25,
        textAlign: 'center',
        fontWeight: '600',
        fontFamily: 'OpenSans-Light',
        color: 'white',
        backgroundColor:'transparent'
    },
    marginView5:{
        marginTop: Constants.Marin2
    },
    bottomView: {
        flex: 1,
        alignItems:'center',
        justifyContent: 'flex-end',
        paddingBottom: Constants.Marin6
    },
    spinnerStyle: {
        marginBottom: Percent.width(10),
        width: Constants.width/3,
        height: Constants.width/8,
        alignItems: 'center',
    },
    rowTextView:{
        flexDirection:'row',
    },
    smallText:{
        fontSize: Constants.Font16,
        textAlign: 'center',
        fontFamily: 'OpenSans-Light',
        color: 'white',
        backgroundColor:'transparent'
    },
    underlineSmallText:{
        fontSize: Constants.Font16,
        textAlign: 'center',
        fontFamily: 'OpenSans-Light',
        color: 'white',
        textDecorationLine: 'underline',
        backgroundColor:'transparent'
    },
})
