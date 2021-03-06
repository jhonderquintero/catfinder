import {types} from '../types/types';

const {login, logout} = types;

export const authReducer =  (state = {}, action) => {
    switch(action.type){
        case login:
            return{
                ...action.payload,
                logged: true
            }
        case logout:
            return{
                logged: false
            }
        default: 
        return state; 
    }
};