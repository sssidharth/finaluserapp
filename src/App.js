import './App.css';
import React, {useEffect, useState} from 'react'; 
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from 'react-router-dom';
import UsersPage from './components/UsersListComponent';
import LikedUsers from './components/LikedUsers';
import { useDispatch} from 'react-redux';
import {setUsers} from './redux/Actions/userActions';
import Navbar from './components/Header/Header';

const App = () =>{
  const [light, setLight] = useState(true);
  const url = "https://jsonplaceholder.typicode.com/users";
  const dispatch = useDispatch();

  async function fetchUsers (){
    const data = await fetch(url)
    .then(response => response.json())
    .then((data) => (data?.map((e) =>{
      e.isLiked = false;
      return{...e}
    })))
    .then((data) => dispatch(setUsers(data)))
    console.log("data is =>",data);    
}

useEffect(()=>{
  fetchUsers();
},[])

    return (   

      <div className={light ? 'lightMode' : 'darkMode'}>
      <Router>
        <Navbar theme={light} setTheme={setLight}/>
        <Switch>
        <Route path="/Home" component={() => <UsersPage light={light}/>}/>
        <Route path="/LikedUsers" component={()=><LikedUsers/>}/>
        <Redirect to="/Home"/>
        </Switch>
      </Router>
    </div>
  );
}
export default App;

