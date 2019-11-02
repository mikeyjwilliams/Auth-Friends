import React from 'react';

function Friends(props) {
  const { name, age, email } = props.friend;
  return (
    <div>
      <h2>{name}</h2>
      <p>{age}</p>
      <p>{email}</p>
    </div>
  );
}

export default Friends;
