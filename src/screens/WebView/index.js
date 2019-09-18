import React, { Component } from 'react';
import { WebView, View, TouchableOpacity, Image} from 'react-native';
import globalStyle from '../globalStyle';
import { Images } from "../../themes";
import MyStatusBar from '../../components/MyStatusBar';

class MyWebView extends Component {
    
    static navigationOptions = {
        header: false,
        gesturesEnabled: false,
    };

    constructor(props){
        super(props);
        this.state={
        }
    }
    
    goBack(){
        this.props.navigation.goBack()
    }
    render() {
        const { params } = this.props.navigation.state;
        const url = params.url;
        return (
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
                <WebView
                    source={{uri: url}}
                />
            </View>
        );
    }
}
export default MyWebView