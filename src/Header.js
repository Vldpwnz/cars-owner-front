
import React, { Component } from "react";


class Header extends React.Component {
  render() {
    return (
      <div id="nav-bar" class="nav-bar">
          <div id="site-name">
            <h1 class="site-name-header">Car's Owner</h1>
          </div>
        <div>
          <button>CARS</button>
          <button>USERS</button>
        </div>
      </div>
    );
  }
}

export default Header;
