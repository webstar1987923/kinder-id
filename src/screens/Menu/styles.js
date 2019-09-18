import {StyleSheet} from 'react-native'
import {Colors,  Metrics, Images, Constants, Percent} from "../../themes"

export default StyleSheet.create({
    titleView:{
        justifyContent: 'flex-start',
        paddingVertical: Percent.width(7),
        height: Percent.width(20),
        borderColor: '#E6E6E6',
        borderBottomWidth: 1,
    },
    titleText:{
        fontSize: Percent.fontSize(16),
        fontWeight: '500',
        fontFamily: 'OpenSans-Light',
        textAlign:'left',
        color: '#5d5d5d',
        marginLeft: Constants.Marin4,
        marginBottom: Percent.width(2)
    },
    listContainer:{
        flex: 1,
    },
    eachItem: {
        borderColor: '#E6E6E6',
        borderBottomWidth: 1,
        height: Percent.width(14),
        justifyContent: 'center',
    },
    leftText:{
        fontSize: Constants.Font20,
        fontFamily: 'OpenSans-Light',
        fontWeight: '400',
        textAlign:'left',
        marginLeft: Constants.Marin4,
    },
    buttonView:{
        width: Constants.Marin14,
        height: Constants.Marin14,
        backgroundColor: Colors.done,
        alignItems:'center',
        justifyContent: 'center',
        borderRadius: Constants.Marin4,
        alignSelf: 'center',
        marginTop: Constants.Marin6,
    },
    whitemark:{
        width: Percent.width(15),
        height: Percent.width(15),
    },
    versionText:{
        fontSize: Constants.Font10,
        fontFamily: 'OpenSans-Light',
        textAlign:'center',
        marginVertical: Percent.width(5),
        color: Colors.version,
    },
    bottomView:{    
        alignItems:'center',
        justifyContent:'center',
        height: Constants.Marin14,
        borderColor: '#E6E6E6',
        borderTopWidth: 1,
    },
    centerText:{
        fontSize: Constants.Font20,
        fontWeight: '500',
        fontFamily: 'OpenSans-Light',
        textAlign:'center',
    },    
})
