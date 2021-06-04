import {ActionTypes} from  '../Constants/actionTypes';
import{setLikedUsers} from '../Actions/userActions';
const intitialState = {
    users : [],
    liked: []
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

export const setLiked = (likedUsers) => async (dispatch, getState) => {
      await dispatch(setLikedUsers(likedUsers))
};