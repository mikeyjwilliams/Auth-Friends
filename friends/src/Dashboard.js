import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Login</h1>
      </div>
    );
  }
}
export default withRouter(connect(null)(App));
