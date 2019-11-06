import React, { useState } from 'react';
import { Link, Route, withRouter } from 'react-router-dom';

import './App.css';

import Login from './components/Login';
import ProtectedRoute from './components/protected/ProtectedRoute';
import AddFriend from './components/protected/AddFriend';
import ShowFriends from './components/protected/ShowFriends';
import Home from './components/Home';

import { getToken } from './utils/api';

function App() {
  const [friends, setFriends] = useState();
  const loggedIn = getToken();

  return (
    <div className='App'>
      <header className='App-header'>Auth Friends</header>
      <nav className='nav-space-between'>
        <Link to='/'>Home</Link>
        {!loggedIn && <Link to='/signin'>Login</Link>}
        {loggedIn && <Link to='/addfriend'>Add Friend</Link>}
        {loggedIn && <Link to='/showfriends'>Show Friends</Link>}
      </nav>

      {/* <Route exact path='/' component={Home} /> */}
      <Route exact path='/signin' component={Login} />
      <ProtectedRoute
        exact
        path='/addfriend'
        setFriends={setFriends}
        component={AddFriend}
      />
      <ProtectedRoute
        exact
        path='/showfriends'
        friends={friends}
        setFriends={setFriends}
        component={ShowFriends}
      />
    </div>
  );
}

export default withRouter(App);
