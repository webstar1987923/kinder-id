import {StyleSheet} from 'react-native'
import {Colors, Fonts, Metrics, Images, Constants} from "../../themes"

export default StyleSheet.create({
    mainView:{
        flex:1,
        backgroundColor: '#ef6e71',
        justifyContent:'space-between',
        alignItems:'center',
    },
    eachView:{
        flex: 1,
        alignItems: 'center',
        justifyContent:'flex-end',
    },
    checked:{
        width: Constants.width/4,
        height: Constants.width/4,
    },
    smallText:{
        fontSize: Constants.Font30,
        textAlign: 'center',
        
        color: 'white',
        backgroundColor:'transparent'
    }
})
