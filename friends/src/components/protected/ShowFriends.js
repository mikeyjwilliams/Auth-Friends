import React, { useState, useEffect } from 'react';
import api from '../../utils/api';
import Friend from './Friend';

function ShowFriends(props) {
  const { friends, setFriends } = props;
  const [error, setError] = useState();

  useEffect(() => {
    api()
      .get('/api/friends')
      .then(response => {
        console.log(response.data);
        setFriends(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  if (!friends) return <h3>Loading</h3>;
  return (
    <div>
      {friends.map(friend => (
        <Friend friend={friend} key={friend.id} />
      ))}
    </div>
  );
}

export default ShowFriends;
