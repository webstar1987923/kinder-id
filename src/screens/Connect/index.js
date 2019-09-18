import React, { Component } from "react"
import { View, Image, Text, TouchableOpacity, TextInput, ImageBackground, StatusBar} from "react-native"
import { Images } from "../../themes";
import globalStyle from '../globalStyle';
import styles from './styles'
import MyStatusBar from '../../components/MyStatusBar';


class Welcome extends Component {
    constructor(props){
        super(props)
        this.state={
            card: "",
            expiry: "",
            cvc: "",
        }
    }
    
    static navigationOptions = {
        header: false,
    };

    goLogin(navigate){
        
    }

    goBack(){
        this.props.navigation.goBack()
    }

    goNext(){
        //this.props.navigation.navigate('Connect')
    }
    handleCard = card => {
        const v = card.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
        const matches = v.match(/\d{4,16}/g);
        const match = (matches && matches[0]) || "";
        const parts = [];
        for (i = 0, len = match.length; i < len; i += 4) {
            parts.push(match.substring(i, i + 4));
        }
        if (parts.length) {
            this.setState({ card: parts.join(" ") });
        } else {
            this.setState({ card });
        }
    };
    handleExpiry = expiry => {
        const v = expiry.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
        const matches = v.match(/\d{2,5}/g);
        const match = (matches && matches[0]) || "";
        const parts = [];
        for (i = 0, len = match.length; i < len; i += 2) {
            parts.push(match.substring(i, i + 2));
        }
        if (parts.length) {
            this.setState({ expiry: parts.join("/") });
        } else {
            this.setState({ expiry });
        }
    };

    render(){
        const { navigate } = this.props.navigation;
        return(
            <View style = {globalStyle.container}>
                <MyStatusBar backgroundColor="white"/>
                <View style={globalStyle.headerView}>
                    <TouchableOpacity onPress={this.goBack.bind(this)}>
                        <Image source={Images.arrow_back} style={globalStyle.arrow_back} />                 
                    </TouchableOpacity>
                    <View>
                        <Image source={Images.kmark} style={globalStyle.kmark}/>
                    </View>
                    <View />
                </View>  
                <View style={styles.marginSecondView}>
                    <Text style={styles.codeText}>Payment information</Text> 
                    
                </View>
                <View style={styles.marginRowSecondView}>
                    <TextInput
                        style={styles.cardNumText}
                        placeholder="Card number"
                        autoCorrect={false}
                        value={this.state.card}
                        onChangeText={card => this.handleCard(card)}
                        underlineColorAndroid="transparent"
                        keyboardType="number-pad"
                        maxLength={19}
                    />
                </View>
                <View style={styles.other}>
                    <View style={styles.marginColSecondView}>
                        <TextInput
                            style={styles.commonText}
                            placeholder="Expiration"
                            autoCorrect={false}
                            value={this.state.expiry}
                            onChangeText={expiry => this.handleExpiry(expiry)}
                            underlineColorAndroid="transparent"
                            keyboardType="number-pad"
                            maxLength={5}
                        />
                    </View>
                    <View style={styles.marginColSecondView}>
                        <TextInput
                            style={styles.textInput}
                            placeholder="CVC"
                            autoCorrect={false}
                            value={this.state.cvc}
                            onChangeText={cvc => this.setState({ cvc })}
                            underlineColorAndroid="transparent"
                            keyboardType="number-pad"
                            maxLength={3}
                        />
                    </View>
                </View> 
                <View style={styles.stripe}>
                    <Text style={styles.miniText}>powered by</Text>
                    <Text style={styles.stripeText}>stripe</Text>
                </View>
                <View style={styles.marginSecondView}>
                    <Text style={styles.codeText}>Choose currency</Text> 
                </View>
                <View style={styles.nokView}>
                    <Text style={styles.nok}>NOK</Text>
                    <Image source={Images.dropdown} style={styles.dropdown}/>                    
                </View>
                <View style={styles.remainView}>
                    <ImageBackground source={Images.background} style = {styles.btnBackground}>
                        <TouchableOpacity onPress={()=>this.goNext()} style={styles.pay}>
                            <Text style={styles.whiteText}>Save</Text>
                        </TouchableOpacity>
                    </ImageBackground>
                </View>
            </View>
        )
    }
}
export default Welcome
