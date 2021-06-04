
import {ActionTypes} from '../Constants/actionTypes';

export const setUsers = (users) => {
    return {
        type : ActionTypes.SET_USERS,
        payload : users,
    };
};

export const setLikedUsers = (likedUsers) => {
    return {
        type : ActionTypes.SET_LIKED,
        payload : likedUsers,
    };
};
