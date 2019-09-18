import {StyleSheet} from 'react-native'
import {Colors, Fonts, Metrics, Images, Constants, Percent} from "../../themes"

export default StyleSheet.create({
    marginSecondView:{
        marginTop: Constants.Marin5,
        marginHorizontal: Constants.Marin10,
        height: Constants.Marin15,
        justifyContent:'center',
        borderBottomWidth: 1,
        borderColor: '#cdcdcd',
    },
    codeText:{
        fontSize: Constants.Font*27,
        fontWeight: '700',
    },
    marginRowSecondView:{
        height:Constants.Marin*220,
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-between',
        borderBottomWidth: 1,
        borderColor: '#cdcdcd',
        marginHorizontal: Constants.Marin10,
    },
    eachView:{
        justifyContent:'space-between',
        height:Constants.Marin*220,
        paddingVertical: Constants.Marin5
    },
    subText:{
        fontSize:Constants.Font20,
        fontWeight :'700'
    },
    amountText:{
        fontSize:Constants.Font20,
        fontWeight :'400'
    },
    miniText:{
        marginTop: Percent.width(2),
        color: '#5d5d5d',
        fontSize:Constants.Font1,
        marginLeft: Constants.Marin1
    },
    marginColSecondView:{
        height:Constants.Marin*340,
        marginHorizontal: Constants.Marin10,
        borderBottomWidth: 1,
        borderColor: '#cdcdcd',
        justifyContent:'space-between',
        paddingVertical:Constants.Marin4
    },
    visa:{
        width: Constants.Marin*800,
        height: Constants.Marin*800/597*43,
    },
    voucherText:{
        fontSize: Constants.Font20,
        textAlign:'center',
        marginTop: Constants.Marin4
    },
    textInput:{
        textAlign: 'center',
        fontSize: Percent.fontSize(18)
    }
})
