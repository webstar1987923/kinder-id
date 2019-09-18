import {StyleSheet} from 'react-native'
import {Colors, Fonts, Metrics, Images, Constants, Percent} from "../../themes"

export default StyleSheet.create({
    main:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textbox:{
        backgroundColor: 'white',
        width: Percent.width(80),
        paddingHorizontal:Constants.Marin10,
        height:Constants.Marin20,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#f5f5f5',
        shadowOpacity: 1,
        shadowOffset: {
            width: 1,
            height: 5,
        },
    },
    codeText:{
        fontSize: Constants.Font20,
        fontFamily: 'OpenSans-Light',
        textAlign: 'center'
    },
    rowView:{
        flexDirection:'row',
        justifyContent:'space-between',
        width: Percent.width(80),
        marginBottom: Percent.height(10)
    },
    redButton:{
        flex: 1,
        height:Constants.Marin12,
        backgroundColor:'#ea6264',
        alignItems:'center',
        justifyContent:'center',
        borderBottomRightRadius:10,
    },
    greenButton:{
        flex: 1,
        height:Constants.Marin12,
        backgroundColor:'#80d161',
        alignItems:'center',
        justifyContent:'center',
        borderBottomLeftRadius:10,
    },
    buttonText:{
        fontSize: Constants.Font18,
        fontWeight: '400',
        fontFamily: 'OpenSans-Light',
        textAlign:'center',
        color:'white'
    },
    remainView:{
        marginBottom: Percent.width(5),
        alignItems: 'center'
    },
    selectcodeText:{
        textAlign: 'center',
        color: '#616060'
    }
})
