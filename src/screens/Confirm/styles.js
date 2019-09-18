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
        height:Constants.Marin15,
        justifyContent: 'center',
        alignItems: 'center',
        shadowOpacity: 0.1,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 5,
        },
    },
    codeText:{
        fontSize: Constants.Font20,
        fontFamily: 'OpenSans-Light',
    },
    rowView:{
        height:Constants.Marin12,
        flexDirection:'row',
        justifyContent:'space-between',
        width: Percent.width(80),
        marginBottom: Percent.height(10)
    },
    leftButton:{
        flex: 1,
        backgroundColor:'#ea6264',
        alignItems:'center',
        justifyContent:'center',
        borderBottomLeftRadius:10,        
        borderColor: '#c84449',
        borderRightWidth: 1
    },
    rightButton:{
        flex: 1,
        backgroundColor:'#ea6264',
        alignItems:'center',
        justifyContent:'center',
        borderBottomRightRadius:10,
    },
    buttonText:{
        fontSize: Constants.Font18,
        fontWeight: '600',
        fontFamily: 'OpenSans-Light',
        textAlign:'center',
        color:'white'
    },
})
