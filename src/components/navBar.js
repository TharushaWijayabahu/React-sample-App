import React, { Component } from 'react';
/* import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Contact from './Contact';
import About from './About';
import Notfound from './notfound';
import App from '../App'; */


class NavBar extends Component{
  render() {
    return (

      /* <Router>
        <div>
          <h2>Welcome to React Router Tutorial</h2>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"> Home </Link></li>
            <li><Link to={'/contact'} className="nav-link">Contact</Link></li>
            <li><Link to={'/about'} className="nav-link">About</Link></li>
          </ul>
          </nav>
          <hr />
          <Switch>
              <Route exact path='/' component={App} />
              {<Route path='/contact' component={Contact}/>}
              {<Route path='/about' component={About} /> }
              {<Route path='/notfound' component={Notfound}/>}
          </Switch>
        </div>
      </Router> */
      
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
        <div className="container">
          <a href="/" className="navbar-brand" >
            <img src="https://creativenerds.co.uk/wp-content/uploads/2017/09/badge-icon.jpg" 
            alt="" height = "50px" width ="50px"/></a>

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