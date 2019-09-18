import React, { Component } from "react"
import { View, Image, Text, TouchableOpacity, TextInput, ImageBackground, StatusBar, Dimensions} from "react-native"
import { Images } from "../../themes";
import {connect} from 'react-redux';
import globalStyle from '../globalStyle';
import styles from './styles'
import MapView from 'react-native-maps';
import Geocoder from 'react-native-geocoding';
import MyStatusBar from '../../components/MyStatusBar';
import Pulse from 'react-native-pulse';

import BackgroundGeolocation from "react-native-background-geolocation";

Geocoder.setApiKey('AIzaSyDJcWRkEzgEVgkeQfP7oHMOc1zvvSuQVmk');

const {width, height} =Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0922
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO

class FinderMapScreen extends Component {
    constructor(props){
        super(props);
        this.onLocation = this.onLocation.bind(this);
        this.registerConnection = this.registerConnection.bind(this);
        this.autozoom = this.autozoom.bind(this);
        this.state={
            address: "",
            phoneNumber: "",
            initialPosition:{
                latitude: 0,
                longitude: 0,
                latitudeDelta: 0,
                longitudeDelta: 0
            },
            mobilePosition:{
                latitude: 0,
                longitude: 0
            },
            webPosition:{
                latitude: 0,
                longitude: 0
            }
        }
    }
    
    static navigationOptions = {
        header: false,
        gesturesEnabled: false,
    };
    componentWillMount() {
        BackgroundGeolocation.on('location', this.onLocation, this.onError);
        BackgroundGeolocation.ready({
            desiredAccuracy: 0,
            distanceFilter: 10,
            stopTimeout: 1,
            debug: false,
            logLevel: BackgroundGeolocation.LOG_LEVEL_VERBOSE,
            stopOnTerminate: false,
            startOnBoot: true,
            }, (state) => {
                console.log("- BackgroundGeolocation is configured and ready: ", state);            
                if (!state.enabled) {
                    BackgroundGeolocation.start(function() {
                        console.log("- Start success");
                    });
                }
            }
        );
    }
    
    componentWillUnmount() {    
        BackgroundGeolocation.removeListeners();
    }
    onLocation(location) {
        const lat = parseFloat(location.coords.latitude);
        const long = parseFloat(location.coords.longitude);
        const lastRegion = {
            latitude: lat,
            longitude: long,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA
        }
        this.setState({ 
            initialPosition: lastRegion,
            mobilePosition: lastRegion
        })
        this.props.socket.emit("mobileUpdated", this.props.web_socket_id, {lat: lat, lng: long});
    }
    onError(error) {
        console.warn('- [event] location error ', error);
    }

    componentDidMount(){
        this.registerConnection();
        BackgroundGeolocation.getCurrentPosition((location) => {
            const lat = parseFloat(location.coords.latitude);
            const long = parseFloat(location.coords.longitude);
            const initialRegion = {
                latitude: lat,
                longitude: long,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA
            }
            this.setState({ 
                initialPosition: initialRegion,
                mobilePosition: initialRegion,
                webPosition: this.props.webInitLocation
            }, this.autozoom() );
        }, (error) => {
            alert(JSON.stringify(error))
        }, {
            persist: true,
            samples: 1
        });
    }
    registerConnection(){
        this.props.socket.on("locationUpdateFromWeb", (webPosition, phoneNumber)=>{
            this.setState({
                webPosition: webPosition,
                phoneNumber: phoneNumber
            })
            Geocoder.getFromLatLng(webPosition.latitude, webPosition.longitude).then(res => {
                this.setState({
                    address: res.results[0].formatted_address
                })
            }).catch(err => console.log(err))
        });
    }

    goBack(){
        this.props.navigation.goBack()
    }
    autozoom(){
        this.refs.map.fitToElements(true);
    }

    notReunited(){
        this.props.socket.emit("reunited_failed", this.props.web_socket_id, this.props.children);
        this.props.navigation.navigate('Reunited',{
            reUnited: false,
        })
    }

    goReunited(){
        this.props.socket.emit("reunited_success", this.props.web_socket_id, this.props.children);
        this.props.navigation.navigate('Reunited',{
            reUnited: true,
        })
    }
    callPhoneNumber(phoneNumber){
    }

    render(){    
        return(
            <View style = {globalStyle.container}>
                <MyStatusBar backgroundColor="white" barStyle='dark-content'/>
                <View style={globalStyle.headerView}>
                    <View />
                    <View>
                        <Image source={Images.kmark} style={globalStyle.kmark}/>
                    </View>
                    <View />
                </View>  
                <View style={styles.mapView}  >
                    <MapView
                        ref="map"
                        style={{flex:1}}
                        showsUserLocation={true}
                        initialRegion={this.state.initialPosition}
                    >
                        <MapView.Marker
                            coordinate={this.state.webPosition}
                        >
                            <Pulse 
                                color='#fe8787' 
                                numPulses={1} 
                                diameter={100} 
                                speed={40} 
                                duration={0} 
                                image={{
                                    style: {
                                        width: 20,
                                        height: 20,
                                        marginVertical: 40,
                                        marginHorizontal: 40
                                    },
                                    source: Images.marker_kid
                                }}
                            />
                        </MapView.Marker>
                    </MapView>
                    <View style={styles.absoluteView}>
                        <Text style={styles.finderText}>Finders number</Text>
                        <TouchableOpacity onPress={()=>this.callPhoneNumber(this.state.phoneNumber)}>
                            <Text style={styles.numberText}>{this.state.phoneNumber}</Text>
                        </TouchableOpacity>
                        <View style={styles.address}>
                            <Text style={styles.commonText}>{this.state.address}</Text>
                        </View>
                    </View>
                    <View style={styles.autozoomView}>
                        <TouchableOpacity onPress={this.autozoom} style={styles.autozoombutton}>
                            <Image source={Images.cursor} style={styles.autozoomCursor}/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.absoluteButtonView}>
                        <TouchableOpacity onPress={this.notReunited.bind(this)} style={styles.redbutton}>
                            <Text style={styles.buttonText}>Not reunited</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.goReunited.bind(this)} style={styles.greenbutton}>
                            <Text style={styles.buttonText}>Reuinted</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}
const mapStateToProps = ({ sockets, childrenReducer }) => {    
    const  {wristband_code, socket, webInitLocation, web_socket_id, mobile_socket_id} = sockets;
    const {children} = childrenReducer;
    return { wristband_code, socket, webInitLocation, web_socket_id, mobile_socket_id, children }
}
export default connect(mapStateToProps) (FinderMapScreen);
