import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';

const NavBar = (props) => {
  const [currPath, setCurrPath] = useState(props.location.pathname);

  console.log(currPath);


  return (
    <nav className='navbar'>
      <Link to='/home' onClick={() => setCurrPath(props.location.pathname)} className={currPath === '/home' ? 'active': null}>
        <i className="far fa-home fa-3x"></i>
      </Link>
      <Link to='/matches' onClick={() => setCurrPath(props.location.pathname)} className={currPath === '/matches' ? 'active': null}>
        <i className="far fa-laptop-code fa-3x"></i>
      </Link>
      <Link to='/profile' onClick={() => setCurrPath(props.location.pathname)} className={currPath === '/profile' ? 'active': null}>
        <i className="far fa-user fa-3x"></i>
      </Link>
    </nav>
  );
};

export default withRouter(NavBar);
