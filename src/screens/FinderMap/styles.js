import {StyleSheet} from 'react-native'
import {Colors, Fonts, Metrics, Images, Constants, Percent} from "../../themes"

export default StyleSheet.create({
    mapView:{
        flex: 1,
        paddingBottom: Constants.Marin12
    },
    absoluteView:{
        position:'absolute',
        top: Constants.Marin6,
        left:Constants.width/8,
        width: Constants.width*3/4,
        height:Constants.Marin25,
        alignItems:'center',
        backgroundColor:'white',
        borderRadius: 5,
        paddingVertical: Constants.Marin2,
        opacity: 0.85
    },
    finderText:{
        fontSize: Percent.fontSize(23),
        fontWeight: 'bold',
        textAlign: 'center',
    },
    numberText:{
        fontWeight: '300',
        fontSize: Percent.fontSize(24),
        textAlign: 'center',
        paddingVertical: Constants.Marin2
    },
    address:{
        borderColor: '#E6E6E6',
        borderTopWidth: 1
    },
    commonText:{
        fontSize: Percent.fontSize(18),
        textAlign: 'center',
        paddingTop: Constants.Marin2
    },    
    absoluteButtonView:{
        position: 'absolute',
        left: 0,
        bottom: 0,
        height: Constants.Marin12,
        width:Constants.width,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    redbutton:{
        flex:1,
        height: Constants.Marin12,
        backgroundColor:'#ea6264',
        alignItems:'center',
        justifyContent:'center'
    },
    greenbutton:{
        flex:1,
        height: Constants.Marin12,
        backgroundColor:'#80d161',
        alignItems:'center',
        justifyContent:'center'
    },
    autozoomView:{
        position: 'absolute',
        right: Percent.width(8),
        bottom: Percent.width(18),
        shadowOffset: {
            width: 3,
            height: 3,
        },
        shadowColor: '#ccc',
        shadowOpacity: 1
    },
    autozoomCursor:{
        width: Percent.width(12),
        height: Percent.width(12)
    },
    buttonText:{
        fontSize: Percent.fontSize(18),
        color:'white'
    },
})
