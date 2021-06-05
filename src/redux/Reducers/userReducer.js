import {ActionTypes} from  '../Constants/actionTypes';

const intitialState = {
    users : [],
};

export const usersReducer = (state = intitialState , {type,payload}) => {
    switch(type){
        case ActionTypes.SET_USERS :
            return {...state, users : payload};
        case ActionTypes.SET_LIKED :
            return {...state, liked : payload};
        default : 
            return state;
    }        
    
};
