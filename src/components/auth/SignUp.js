import React, { Component } from 'react';

class SignUp extends Component {
    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: ''
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
            <h2>Sign Up</h2>
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
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name" 
                  id="firstName" onChange={this.handleChange}
                  />
              </div>
              <div>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name" 
                  id="lastName" onChange={this.handleChange}
                  />
              </div>
              <div>
              <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
              </div>
            </form>
          </div>
        )
    }
}

export default SignUp;