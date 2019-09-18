import {StyleSheet} from 'react-native'
import {Colors, Fonts, Metrics, Images, Constants, Percent} from "../../themes"

export default StyleSheet.create({
    topback:{
        width: Constants.Marin*920,
        height: Constants.Marin*920/691*654,
        alignSelf:'center',
        marginTop: Constants.Marin9
    },
    marginSecondView:{
        height: Constants.Marin*230,
        alignItems:'center',
        justifyContent:'center',
        borderColor: '#cdcdcd',
        borderBottomWidth: 1,
    },
    bigText:{
        fontSize: Percent.fontSize(24),
        fontWeight: '700',
        textAlign:'center',
    },
    
    marginRowSecondView:{
        height: Constants.Marin*490,
        alignItems:'center',
        justifyContent:'center',
        borderColor: '#cdcdcd',
        borderBottomWidth: 1,
    },
    hugeText:{
        fontSize: Percent.fontSize(50),
        fontFamily: 'OpenSans-Light',
        fontWeight: '300',
        textAlign:'center',
    },
    commonText:{
        fontSize: Percent.fontSize(16),
        fontWeight: '300',
        textAlign:'center',
    },
    smallText:{
        color: '#9a9696',
        fontSize: Percent.fontSize(16),
        fontWeight: '300',
        textAlign:'center',
        marginTop: Percent.width(3)
    },
    smallText1:{
        fontSize: Percent.fontSize(16),
        fontWeight: '300',
        textAlign:'center',
        marginTop:Constants.Marin10
    },
    rowView:{
        flexDirection:'row',
        paddingHorizontal:Constants.Marin6,
        alignItems:'center',
        justifyContent:'space-between',
        marginTop:Constants.Marin3
    },
    visaText:{
        fontSize: Percent.fontSize(16),
        fontWeight: '600',
        textAlign:'center',
        marginTop:Constants.Marin2
    },
    remainView:{
        flex: 1,
        justifyContent:'flex-end',
        paddingBottom:Constants.Marin4
    },
    pay:{
        height: Constants.Marin*140,
        width: Constants.Marin*280,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:Constants.Marin*70,
        alignSelf:'center'
    },
    whiteText:{
        fontSize: Percent.fontSize(24),
        textAlign:'center',
    },
})
