import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch, NavLink } from "react-router-dom";
import Home from "./Home/Home";
import Profile from "./Profile/Profile";
import Resume from "./Resume/Resume";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";
import { Navbar, Nav } from "react-bootstrap";
import { AnimatePresence } from 'framer-motion';

function Header() {

  return (
    <Router>
      <div>
        <Navbar sticky="top" id="navbar"className="navbar" collapseOnSelect bg="dark" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navbar fixed-top navbar-expand-lg navbar-dark mr-auto">
            <NavLink to="/" className="navbar-brand" style={{ marginLeft: "1%"}}>
              <img src="../favicon.ico"></img>
            </NavLink>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink to="/resume" className="nav-link">
                    Resume
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/projects" className="nav-link">
                    Projects
                  </NavLink>
                </li>
                <li className="nav-item dropdown">
                  <NavLink to="/blog" className="nav-link">
                    Blog
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/contact" className="nav-link">
                    Contact
                  </NavLink>
                </li>
              </ul>
          </Nav>
          </Navbar.Collapse>
        </Navbar>

      <AnimatePresence exitBeforeEnter>
        <Switch >
          <Route exact path="/">
            <div className="container-fluid">
                <div className="row module stripe-6">
                  <Profile />
                  <Home />
                </div>
            </div>
          </Route>
          <Route path="/resume">
            <div className="container-fluid">
                <div className="row">
                  <Profile />
                  <Resume />
                </div>
            </div>
          </Route>
          <Route path="/projects">
            <div className="container-fluid">
                <div className="row">
                  <Profile />
                  <Projects />
                </div>
            </div>
          </Route>
          <Route path="/blog">
            <div className="container-fluid">
                <div className="row">
                  <Profile />
                  <Projects />
                </div>
            </div>
          </Route>
          <Route path="/contact">
            <div className="container-fluid">
                <div className="row">
                  <Profile />
                  <Contact />
                </div>
            </div>
          </Route>    
        </Switch>
      </AnimatePresence>
      </div>
    </Router>
  );
}

export default Header;
