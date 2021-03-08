
import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import fetch from 'isomorphic-fetch';
import regeneratorRuntime from 'regenerator-runtime';

const handleOAuth = async () => {
  try {
    const oAuthUrl = await fetch('/login', {
      mode: 'no-cors',
    });
    const url = await oAuthUrl.json();

    window.location.href = await url;
  } catch (err) {
    console.log(err);
  }
};

const Login = (props) => {
  return (
    <div className='mainContainer'>
      <div className='loginContainer'>
        <h2>Welcome</h2>
        <p>dotConnect()</p>
        <div className='loginButtonContainer'>
          <button onClick={handleOAuth}><i class="fab fa-github-square fa-2x"></i>LOGIN WITH GITHUB </button>
        </div>
      </div>
    </div>
  );
};

<<<<<<< HEAD


export default withRouter(Login);
=======
export default withRouter(Login);
>>>>>>> 446daabce449cd69a18ec3a8d1f21349b34e0429
