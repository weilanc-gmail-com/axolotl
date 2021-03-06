import React, { Component, useState, useEffect} from "react";
import { Switch, Route, Link, withRouter } from "react-router-dom";
import Login from './pages/login.jsx';


const App = () => {
  return (
      <div style = {mainStyles.container}>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/match">
            <Match />
          </Route>
        </Switch>

            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                <Link to="/profile">Profile</Link>
                </li>
                <li>
                <Link to="/match">Match</Link>
                </li>
              </ul>
            </nav>
      </div>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function Profile() {
  return <h2>Profile</h2>;
}

function Match() {
  return <h2>Match</h2>;
}




// styles //

// styles for mainContainer
const mainStyles = {
  container: {
    maxWidth: '1200px',
  }
}



export default withRouter(App);