import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
export default class navbar extends Component {
  render() {
    return (
      <div>
        <Navbar bg="secondary" variant="dark">
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={this.props.logo}
              width="60"
              height="45"
              className="d-inline-block align-top mr-3 rounded"
            />{" "}
            Apple
          </Navbar.Brand>
        </Navbar>
      </div>
    );
  }
}
