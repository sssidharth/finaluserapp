import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import UserCard from './UserComponent';
import "./Box.css"
import {setUsers} from '../redux/Actions/userActions';

const UsersPage = (light) =>{
const users = useSelector((state)=>state.users);
const dispatch = useDispatch();

const deleteUser = (id) =>{
  const filteredUsers = users?.filter((persron) => persron.id !== id)
  dispatch(setUsers(filteredUsers));
};

const addLikedUser= (id) => {
     let likedUsers = users?.map((person)=>{
       if(id === person.id){
         person.isLiked = !person.isLiked
       }
       return {...person}
     })
     dispatch(setUsers(likedUsers));
};

const renderUserCards=()=>{
  return(
    <div className = "grid">    
      {users?.map((e)=>          
      <UserCard user={e} deleteUser= {deleteUser} addLikedUser={addLikedUser} light={light} key = {e.id}/>    
    )}
    </div>   
  )
}

return(
<div className = "Container">
{renderUserCards()}
</div>
)

}
export default UsersPage;