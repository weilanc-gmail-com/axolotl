import React, { Component, useState, useEffect} from "react";
import { Switch, Route, Link, withRouter } from "react-router-dom";
import Login from './pages/login.jsx';
import NavBar from './components/NavBar.jsx';

const App = () => {
  return (
      <div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav> */}

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path='/profile' >
            <Profile />
          </Route>
          <Route path='/matches' >
            <Matches />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <NavBar />
      </div>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function Profile() {
  return <h2>Profile</h2>;
}

function Matches() {
  return <h2>Matches</h2>
}

export default withRouter(App);
