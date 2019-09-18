import {
    REGISTER_SOCKET,
    UPDATE_WEBINITLOCATION
} from '../actions/types';

const initState = {
    endPoint: '',
    socket: '',
    wristband_code: '',
    webInitLocation: {}
}

const sockets = (state = initState, action)=>{
    switch(action.type){
        case REGISTER_SOCKET:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}

export default sockets;