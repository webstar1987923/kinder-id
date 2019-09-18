import {   
    REGISTER_SOCKET
} from './types';

export const register_socket = (payload)=>{
    return {
        type: REGISTER_SOCKET,
        payload: payload
    };
};