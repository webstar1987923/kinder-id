
import openSocket from 'socket.io-client';
import Config from '../config/config';


export const registerSocket = (component)=>{
    const socket = openSocket(Config.socketEndPoint, {reconnection: false});
    component.props.register_socket({
        endPoint: Config.socketEndPoint,
        socket: socket
    })
    socket.on('connect', ()=>{
        socket.on('disconnect', ()=>{
            register(socket, component);
        })
        register(socket, component);
    })
    
}

const register = (socket, component)=>{
    component.props.children.map((child, index)=>{
        socket.emit("mobileOn", child.wristband, component.props._id);        
    })
    socket.on("searchMobile", (web_socket_id, mobile_socket_id, webInitLocation, wristband_code)=>{
        component.props.register_socket({
            web_socket_id: web_socket_id,
            mobile_socket_id: mobile_socket_id,
            wristband_code: wristband_code,
            webInitLocation: webInitLocation
        })
        component.props.navigation.navigate('MichaelMissingScreen',{
            childData: null
        });
    })
    socket.on("searchGuardian", (web_socket_id, mobile_socket_id, webInitLocation, childData)=>{
        component.props.register_socket({
            web_socket_id: web_socket_id,
            mobile_socket_id: mobile_socket_id,
            wristband_code: childData.wristband_code,
            webInitLocation: webInitLocation
        })
        component.props.navigation.navigate('MichaelMissingScreen',{
            childData: childData
        });
    })
    socket.on("someoneConnected", ()=>{
        component.props.navigation.navigate('SomeoneConnected');
    })
}