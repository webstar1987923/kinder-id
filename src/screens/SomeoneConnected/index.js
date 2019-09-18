import React, { Component } from "react"
import { View, Image, Text, TouchableOpacity, TextInput, ImageBackground, StatusBar,ScrollView} from "react-native"
import { Images } from "../../themes";
import globalStyle from '../globalStyle';
import styles from './styles'
import MyStatusBar from '../../components/MyStatusBar';
class Welcome extends Component {
    constructor(props){
        super(props)
        this.state=({
        })
    }
    
    static navigationOptions = {
        header: false,
        gesturesEnabled: false,
    };

    goBack(){
        this.props.navigation.navigate("MainScreen");
    }

    render(){
        return(
            <View style = {globalStyle.container}>
                <MyStatusBar backgroundColor="white"/>
                <View style={globalStyle.headerView}>
                    <View />
                    <View>
                        <Image source={Images.kmark} style={globalStyle.kmark}/>
                    </View>
                    <View />
                </View>     
                <View style={styles.main}>                    
                    <View style={styles.textbox}>
                        <Text style={styles.codeText}>
                            Someone is looking for child            
                        </Text>
                    </View>
                    <TouchableOpacity onPress={this.goBack.bind(this)} style={styles.redButton}>
                        <Text style={styles.buttonText}>Go back</Text> 
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
export default Welcome
