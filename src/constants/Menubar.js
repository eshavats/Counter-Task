import React, { Component } from "react";
import "./styles/Menubar.css";

class Menubar extends Component {
  render() {
    return (
      <>
        <div className="ui inverted segment">
          <div className="ui inverted secondary pointing menu">
            <a href="/" className="item logo">
              <i className="globe icon"></i> Counter
            </a>
            <a href="/" className="active item">
              Home
            </a>
            <a href="/" className="item">
              Messages
            </a>
            <a href="/" className="item">
              Friends
            </a>
            <div className="right menu">
              <a href="/" className="item">
                <i className="shopping cart icon"></i> Cart{" "}
                <div className="floating ui red label circular">
                  {this.props.cartItems}
                </div>
              </a>
              <a href="/" className="item">
                Logout
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Menubar;
