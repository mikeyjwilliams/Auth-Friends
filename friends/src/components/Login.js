import React, { useState } from 'react';
import api from '../utils/api';

function Login(props) {
  const [userData, setUserData] = useState({
    username: '',
    password: ''
  });

  const handleChange = e => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = e => {
    e.preventDefault();
    api()
      .post('/api/login', userData)
      .then(res => {
        console.log(res.data.payload);
        localStorage.setItem('token', res.data.payload);
        props.history.push('/showfriends');
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor='username'>Name:</label>
        <input
          type='text'
          id='username'
          name='username'
          placeholder='Username...'
          onChange={handleChange}
          value={userData.username}
        />
        <br />
        <label htmlFor='user-password'>Password:</label>
        <input
          type='password'
          id='user-password'
          name='password'
          placeholder='Password...'
          onChange={handleChange}
          value={userData.password}
        />
        <button type='submit'>Sign in</button>
      </form>
    </>
  );
}
export default Login;
