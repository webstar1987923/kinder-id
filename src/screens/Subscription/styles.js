import {StyleSheet} from 'react-native'
import {Colors, Fonts, Metrics, Images, Constants, Percent} from "../../themes"

export default StyleSheet.create({
    marginFirstView:{
        justifyContent:'center',
        paddingLeft: Constants.Marin*45,
        height: Constants.Marin*200,
        borderBottomWidth:1,
        borderColor: '#cdcdcd'
    },
    settingText:{
        fontSize: Constants.Font17,
        color: '#5d5d5d'
    },
    marginSecondView:{
        paddingRight: Constants.Marin*70,
        paddingLeft: Constants.Marin*45,
        height: Constants.Marin*200,
        borderBottomWidth:1,
        borderColor: '#cdcdcd',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    nameText:{
        fontSize: Percent.fontSize(25),
        // fontWeight: 'bold'
    },
    commonText:{
        fontSize: Constants.Font*19,
        paddingTop: Percent.width(1)
    },
    arrow_forward:{
        width: Constants.Marin2,
        height:Constants.Marin2/192*320,
        marginLeft: Constants.Marin2,
    },
    textWrapper:{
        flexDirection: 'row'
    }
})
