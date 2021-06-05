import React from 'react';
import {useSelector} from 'react-redux';
import {NavLink, Link} from 'react-router-dom';

const LikedUsers = () => {
    const users = useSelector((state)=>state.users);
    return(
        <div className="Container">
           {users?.map((user)=>{
               if(user.isLiked){
                   return (
                       <h3>{user.name}</h3>
                   )
               }
           })}
        </div>
    )
}

export default LikedUsers;