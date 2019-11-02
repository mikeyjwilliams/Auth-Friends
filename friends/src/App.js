import React from 'react';
import { Link, Route } from 'react-router-dom';

import './App.css';

import Login from './components/Login';
import ProtectedRoute from './components/protected/ProtectedRoute';
import AddFriend from './components/protected/AddFriend';
import ShowFriends from './components/protected/ShowFriends';
import Home from './components/Home';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>Auth Friends</header>
      <nav className='nav-space-between'>
        <Link to='/'>Home</Link>
        <Link to='/signin'>Login</Link>
        <Link to='/addfriend'>Add Friend</Link>
        <Link to='/showfriends'>Show Friends</Link>
      </nav>

      <Route exact path='/' component={Home} />
      <Route exact path='/signin' component={Login} />
      <ProtectedRoute exact to='/addfriend' component={AddFriend} />
      <ProtectedRoute exact path='/showfriends' component={ShowFriends} />
    </div>
  );
}

export default App;
