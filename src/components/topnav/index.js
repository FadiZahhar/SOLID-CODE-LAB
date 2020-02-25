import React, { Component } from 'react';
import logo from './logo.png';
class TopNav extends Component {

    render() {
        return(
            <div class="container">
  <div class="header-wrapper">
    <header id="main-header" >
      <img src={logo} width="120" />
      <nav class="navigation">
        <ul >
          <li><a href="/signin">Login</a></li>
          <li><a href="/signup">Register</a></li>
          
        </ul>
      </nav>
    </header>
  </div>
</div>

        )
    }
}
export default TopNav;