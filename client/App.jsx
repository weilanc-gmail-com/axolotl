import React, { useState, useEffect } from 'react';
import { Switch, Route, Link, withRouter } from 'react-router-dom';
import Login from './pages/login.jsx';
import NavBar from './components/NavBar.jsx';
import Home from './pages/Home.jsx';
import Profile from './pages/Profile.jsx';
import Matches from './pages/Matches.jsx';

const App = React.memo(() => {
  const [user, setUser] = useState('');
  console.log('APP');

  const handleSetUser = (username) => {
    setUser((prevUsername)=> prevUsername = username);
  };

  return (
    <div className='mainContainer'>
      <Switch>
        <Route path='/home'>
          <NavBar />
          <Home user={user} />
        </Route>
        <Route path='/profile'>
          <NavBar />
          <Profile user={user} />
        </Route>
        <Route path='/matches'>
          <NavBar />
          <Matches user={user} />
        </Route>
        <Route path='/'>
          <Login handleSetUser={handleSetUser} user={user}/>
        </Route>
      </Switch>
    </div>
  );
});

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
