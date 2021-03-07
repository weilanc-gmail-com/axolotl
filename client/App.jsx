import React, { Component, useState, useEffect } from 'react';
import { Switch, Route, Link, withRouter } from 'react-router-dom';
import Login from './pages/login.jsx';
import NavBar from './components/NavBar.jsx';
import Home from './pages/Home.jsx';
import Profile from './pages/Profile.jsx';
import Matches from './pages/Matches.jsx';

const App = () => {
  return (
    <div className='mainContainer'>
      <NavBar />
      <Switch>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/profile'>
          <Profile styles={profileStyles} />
        </Route>
        <Route path='/matches'>
          <Matches />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>

      <Link to='/login'>
        <button>login</button>
      </Link>
    </div>
  );
};

// function Home() {
//   return <h2>Home</h2>;
// }
// function Profile() {
//   return <h2>Profile</h2>;
// }
// function Matches() {
//   return <h2>Matches</h2>
// }
// function UserName() {
//   return(<h1> User’s Name </h1>);
// }
// inline styles
// styles for profile

const profileStyles = {
  padding: '5px 20px',
};

export default withRouter(App);
