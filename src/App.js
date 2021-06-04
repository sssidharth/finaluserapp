import logo from './logo.svg';
import './App.css';
import React, {useEffect} from 'react'; 
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from 'react-router-dom';
import UsersPage from './components/UsersListComponent';
import LikedUsers from './components/LikedUsers';
import {useSelector, useDispatch} from 'react-redux';
import {setUsers} from './redux/Actions/userActions';

const App = () =>{
  
  const url = "https://jsonplaceholder.typicode.com/users";
  const dispatch = useDispatch();

  async function fetchUsers (){
    const data = await fetch(url)
    .then(response => response.json())
    .then((data) => dispatch(setUsers(data)))
    console.log(data);    
}

useEffect(()=>{
  fetchUsers();
},[])
const liked = useSelector((state)=>state.liked)
    return (    
      <div className="Container">
      <Router>
        <Switch>
        <Route path="/Home" component={() => <UsersPage/>}/>
        <Route path="/LikedUsers" component={()=><LikedUsers likedUsers={liked}/>}/>
        <Redirect to="/Home"/>
        </Switch>
      </Router>
    </div>
  );
}
export default App;

