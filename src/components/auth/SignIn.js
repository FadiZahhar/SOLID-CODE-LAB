import React, { Component } from 'react';

class SignIn extends Component {
    state = {
        email: '',
        password: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }
    render() {
        return(
            <div className="sign-up-wrapper">
            <h2>Sign in</h2>
            <form onSubmit={this.handleSubmit} className="sign-up-form">
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  id="email" onChange={this.handleChange}
                />
              </div>
              <div>
                <input
                  type="password"
                  name="password"
                  placeholder="Password" 
                  id="password" onChange={this.handleChange}
                  />
              </div>
              <div>
              <button className="btn pink lighten-1 z-depth-0">Login</button>
              </div>
            </form>
          </div>
        )
    }
}

export default SignIn;