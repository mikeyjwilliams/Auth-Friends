import React from 'react';
import { connect } from 'react-redux';
import { checkUser } from '../actions';

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
        }
    }

    changeHandler = e => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitHandler = e => {
        e.preventDefault();
        const { username, password } = this.state;
        this.props.checkUser(username, password)

        this.setState({
            username,
            password
        })
    }


    render() {
        const { username, password } = this.state;
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <input
                        type="text"
                        name="username"
                        value={username}
                        onChange={this.changeHandler}
                        placeholder="Username..."
                    />
                    <br />
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={this.changeHandler}
                        placeholder="Password..."
                    />
                    <br />

                    <button
                        type="submit"
                    >
                        Login 
                    </button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = {
    checkUser: checkUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);