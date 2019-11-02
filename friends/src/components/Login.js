import React, { useState } from 'react';

function Login(props) {
  const [userData, setUserData] = useState({
    username: '',
    password: ''
  });
  return (
    <>
      <form>
        <label htmlFor='username'>Name:</label>
        <input
          type='text'
          id='username'
          name='username'
          placeholder='Username'
        />{' '}
      </form>
    </>
  );
}
export default Login;
