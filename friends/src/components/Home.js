import React from 'react';

function Home(props) {
  return (
    <div>
      <h2>
        Login to <strong>Auth Friends</strong>!
      </h2>
      <button onClick={props.history.push('/signin')}>Sign in</button>
    </div>
  );
}

export default Home;
