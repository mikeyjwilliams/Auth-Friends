import React, { useState, useEffect } from 'react';
import api from '../../utils/api';

function ShowFriends(props) {
  const [friends, setFriends] = useState();
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
  console.log('friends', friends);
  return (
    <div>
      <p>show friends</p>
    </div>
  );
}

export default ShowFriends;
