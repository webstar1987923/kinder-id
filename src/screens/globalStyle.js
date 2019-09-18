import {StyleSheet} from 'react-native';
import {Colors, Fonts, Metrics, Images, Constants, Percent} from "../themes";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    statusBar: {
        height: 20
    },
    headerView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: Constants.Marin8,
        height: Constants.Marin20,
        borderColor: '#E6E6E6',
        borderBottomWidth: 1
    },
    main: {
        flex: 1
    },
    settings: {
        width: Percent.width(8),
        height: Percent.width(8),
    },
    add: {
        width: Percent.width(7),
        height: Percent.width(7),
    },
    arrow_back: {
        width: Percent.width(5),
        height: Percent.width(7),
    },
    kmark: {
        width: Percent.width(8),
        height: Percent.width(10),
    },
    formGroup: {
        marginTop: Constants.Marin8,
        alignItems: 'center'
    },
    labelText: {
        fontSize: Constants.Font20,
        fontFamily: 'OpenSans-Light',
        textAlign: 'center',
        marginBottom: Constants.Marin3,
    },
    shadowTextInput: {
        width: Constants.width * 2 / 3,
        paddingVertical: 10,
        fontSize: Constants.Font25,
        fontFamily: 'OpenSans-Light',
        textAlign: 'center',
        borderRadius: 10,
        shadowOffset: {
            width: 3,
            height: 3,
        },
        shadowColor: '#f7f7f7',
        backgroundColor: 'white',
        shadowOpacity: 1
    },
    remainView: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-around',
        paddingBottom: Constants.Marin8
    },
    footerView: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: Percent.width(15),
        paddingBottom: Percent.width(10)
    },
    shadowButton: {
        width: Constants.Marin30,
        paddingVertical: 10,
        borderRadius: Constants.Marin7,
        alignItems: 'center',
        backgroundColor: 'white',
        justifyContent: 'center',
        shadowOffset: {
            width: 3,
            height: 3,
        },
        shadowColor: '#f5f5f5',
        shadowOpacity: 1,
    },
    button: {
        width: Constants.Marin30,
        paddingVertical: 10,
        borderRadius: Constants.Marin7,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        marginBottom: Constants.Marin6
    },
    buttonText: {
        fontSize: Constants.Font25,
        fontWeight: '400',
        fontFamily: 'OpenSans-Light',
        textAlign: 'center',
    },
    innerButton: {
        width: Percent.width(28),
        height: Percent.width(14),
        borderRadius: Percent.width(7),
        borderWidth: 1,
        borderColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: Constants.Marin6,
    },
    innerButtonText: {
        fontSize: Constants.Font25,
        textAlign: 'center',
        fontWeight: '600',
        fontFamily: 'OpenSans-Light',
        color: 'white',
        backgroundColor: 'transparent'
    },
    commonTextInput: {
        width: Constants.width * 2 / 3,
        height: Percent.width(16),
        borderRadius: Percent.width(16),
        backgroundColor: 'white',
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: Constants.Font25,
        paddingHorizontal: Constants.Marin6,
        fontFamily: 'OpenSans-Light',
    },
});
