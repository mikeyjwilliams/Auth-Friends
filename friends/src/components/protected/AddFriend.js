import React, { useState } from 'react';
import api from '../../utils/api';

function AddFriend(props) {
  const { setFriends } = props;
  const [friendData, setFriendData] = useState({
    name: '',
    age: 0,
    email: ''
  });

  const changeHandler = e => {
    setFriendData({
      ...friendData,
      [e.target.name]: e.target.value
    });
  };

  const submitHandler = e => {
    e.preventDefault();
    api()
      .post('/api/friends', friendData)
      .then(res => {
        setFriends(res.data);
        props.history.push('/showfriends');
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type='text'
          name='name'
          value={friendData.name}
          onChange={changeHandler}
          placeholder='Name...'
        />
        <br />
        <input
          type='number'
          name='age'
          value={friendData.age}
          onChange={changeHandler}
          placeholder='Age...'
        />
        <br />
        <input
          type='email'
          name='email'
          value={friendData.email}
          onChange={changeHandler}
          placeholder='Email...'
        />
        <br />
        <button type='submit'>Add a Friend</button>
      </form>
    </div>
  );
}

export default AddFriend;
