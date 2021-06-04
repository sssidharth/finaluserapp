import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import UserCard from './UserComponent';
import "./Box.css"
import {Button} from 'react-bootstrap';
import {NavLink, Link} from 'react-router-dom';
//import {BrowserRouter as Router, Route, Switch, Link, Redirect} from 'react-router-dom';
//import LikedUsers from './LikedUsers';
import {setUsers} from '../redux/Actions/userActions';
import {setLiked} from '../redux/Reducers/userReducer';

const UsersPage = () =>{
const users = useSelector((state)=>state.users);
const dispatch = useDispatch();
//const [people, setPeople] = useState(users);
  
let usersToShow = [];

const deleteUser = (id) =>{
  const filteredUsers = users?.filter((persron) => persron.id !== id)
  dispatch(setUsers(filteredUsers));
};

const addLikedUser=(likedUsers) => {
     dispatch(setLiked(likedUsers))
}

const renderUserCards=()=>{
  return(
    <div className="Container">
    <div className = "grid">    
      {users?.map((e)=>          
      <UserCard user={e} deleteUser= {deleteUser} addLikedUser={addLikedUser} key = {e.id}/>    
    )}
    </div>
    <div className="row row-content-justify-center">
    <Link type="button" to="/LikedUsers" style={{
     width: "150px",}} variant="primary">Liked Users</Link>
   </div>
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