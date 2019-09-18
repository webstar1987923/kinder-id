import {StyleSheet} from 'react-native'
import {Colors,  Metrics, Images, Constants, Percent} from "../../themes"

export default StyleSheet.create({
    marginSecondView:{
        alignItems:'center',
        justifyContent:'center',
        height: Constants.Marin20,
        borderBottomWidth: 1,
        borderColor: '#d4d4d4'
    },
    titleText: {
        fontSize: Percent.fontSize(20),
        fontWeight: '400',
        fontFamily: 'OpenSans-Light',
        textAlign:'center',
    },
    codeText:{
        fontSize: Constants.Font25,
        fontFamily: 'OpenSans-Light',
        textAlign:'center',
    },
    listContainer:{
        flex: 1,
    },
    listView:{
        flexDirection:'row',
        paddingHorizontal:Constants.Marin10,
        alignItems:'center',
        justifyContent:'space-between',
        height: Constants.Marin16,
        borderBottomWidth: 1,
        borderColor: '#dbdbdb'
    },
    selectcodeText:{
        fontSize: Constants.Font25,
        fontWeight: '600',
        fontFamily: 'OpenSans-Light',
        textAlign:'center',
    },
    check:{
        width: Constants.Marin7,
        height:Constants.Marin5,
    },
    textContainer:{
        marginTop: Percent.width(5),
    },
    deleteText:{
        color: '#747474',
        fontSize: Constants.Font18,
        fontFamily: 'OpenSans-Light',
        textAlign:'center',
    },  
})
