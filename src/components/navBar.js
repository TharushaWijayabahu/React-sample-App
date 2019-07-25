import React, { Component } from 'react';


class NavBar extends Component {
  render() {
    return (

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
        <div className="container">
          <a href="/" className="navbar-brand" >
            <img src="https://creativenerds.co.uk/wp-content/uploads/2017/09/badge-icon.jpg"
              alt="" height="50px" width="50px" /></a>

          <button className="navbar-toggler" type="button" data-toggle="collapse"
            data-target="#navbarResponsive" aria-controls="navbarResponsive"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a href="/" className="nav-link">Home
                <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">About</a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link">Services</a>
              </li>
              <li className="nav-item">
                <a href="/contact" className="nav-link">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
export default NavBar;