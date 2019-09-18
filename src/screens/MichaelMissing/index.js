import React, { Component } from "react"
import {Alert, View, Image, Text, TouchableOpacity, TextInput, ImageBackground, StatusBar,ScrollView} from "react-native"
import { Images } from "../../themes";
import globalStyle from '../globalStyle';
import styles from './styles';
import {connect} from 'react-redux';
import _ from 'lodash';
import MyStatusBar from '../../components/MyStatusBar';

class MissingScreen extends Component {
    constructor(props){
        super(props)
        this.state=({
            childName: ''
        })
    }
    
    static navigationOptions = {
        header: false,
        gesturesEnabled: false,
    };
    
    componentDidMount(){
        if(this.props.navigation.state.params.childData){
            this.setState({ childName: this.props.navigation.state.params.childData.childName });
        }else{
            const wristband_code = this.props.wristband_code;
            const childObject = _.find(this.props.children, {wristband: wristband_code});
            this.setState({ childName: childObject.childrenName });
        }
    }

    goBack(){
        this.props.socket.emit("mobileNo", this.props.web_socket_id);
        this.props.navigation.goBack()
    }

    goreunited(){
        navigator.geolocation.getCurrentPosition((position)=>{
            const mobileInitLocation = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            }
            this.props.socket.emit("mobileYes", this.props.web_socket_id, this.props.mobile_socket_id, mobileInitLocation, this.props.children, this.props._id);
            this.props.navigation.navigate('MapScreen');
        },function(err){
            Alert.alert('Error', 'Please check location is allowed');
        });
    }

    render(){
        return(
            <View style = {globalStyle.container}>
                <MyStatusBar backgroundColor="white"/>
                <View style={globalStyle.headerView}>
                    <View style={{flex:1}}>                        
                    </View>
                    <View style={{flex:1,alignItems:'center'}}>
                        <Image source={Images.kmark} style={globalStyle.kmark}/>
                    </View>
                    <View style={{flex:1}}/>
                </View>          
                <View style={styles.main}>
                    <View style={styles.textbox}>
                        <Text style={styles.codeText}>Is {this.state.childName } missing?</Text>
                    </View>                    
                    <View style={styles.rowView}>
                        <TouchableOpacity onPress={this.goBack.bind(this)} style={styles.redButton}>
                            <Text style={styles.buttonText}>No</Text> 
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.goreunited.bind(this)} style={styles.greenButton}>
                            <Text style={styles.buttonText}>Yes</Text> 
                        </TouchableOpacity>
                    </View> 
                </View>
            </View>
        )
    }
}
const mapStateToProps = ({ childrenReducer, sockets }) => {    
    const  {children, _id} = childrenReducer;
    const {wristband_code, socket, web_socket_id, mobile_socket_id} = sockets
    return { children, _id, wristband_code,socket, web_socket_id, mobile_socket_id}
}
export default connect(mapStateToProps) (MissingScreen);
