import React, { useState } from 'react';

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
  return (
    <>
      <form>
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
      </form>
    </>
  );
}
export default Login;
