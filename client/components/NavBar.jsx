import React, { useState, useEffect } from 'react';
import { Link, withRouter, useLocation } from 'react-router-dom';

const NavBar = (props) => {
  let { pathname } = useLocation();

  return (
    <nav className='navbar'>
      <Link to='/home' className={pathname === '/home' ? 'active': null}>
        <i className="far fa-home fa-2x"></i>
      </Link>
      <Link to='/matches'className={pathname === '/matches' ? 'active': null}>
        <i className="far fa-laptop-code fa-2x"></i>
      </Link>
      <Link to='/profile' className={pathname === '/profile' ? 'active': null}>
        <i className="far fa-user fa-2x"></i>
      </Link>
    </nav>
  );
};

export default withRouter(NavBar);
