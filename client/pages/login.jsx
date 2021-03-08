import React, { useState, useEffect } from 'react';
import { withRouter, useLocation, useHistory } from 'react-router-dom';
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

const Login = React.memo((props) => {
  const { handleSetUser, handleSetUserInfo } = props;
  let token = '';
  const { search } = useLocation();
  const code = search;

  const getToken = async (code) => {
    try {
      document.cookie =
        'logging_in=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
      const serverResponse = await fetch(`/login/home${code}`);
      token = await serverResponse.json();
      console.log('Token: ', await token);

      const getUser = await fetch(`https://api.github.com/user`, {
        headers: {
          Authorization: `token ${token}`,
        },
      });

      const userResponse = await getUser.json();
      const userName = await userResponse.login;

      const userInfo = {
        avatar: await userResponse.avatar_url,
        profileLink: await userResponse.html_url,
      };

    
      const login = await fetch('/users/login', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username: userName,
          token: token,
          githubUserInfo: userInfo
        })
      })

      const user = await login.json();

      handleSetUser(await user);


      props.history.push('/home');

    } catch (err) {
      console.log(err);
    }
  };

  const cookies = document.cookie.split('=');
  console.log(cookies.includes('logging_in'));
  if (code && cookies.includes('logging_in')) {
    getToken(code);
  }

  return (
    <div className='mainContainer'>
      <div className='loginContainer'>
        <h2>Welcome</h2>
        <p>dotConnect()</p>
        <div className='loginButtonContainer'>
          <button onClick={handleOAuth}>
            <i className='fab fa-github-square fa-2x'></i>
            LOGIN WITH GITHUB
          </button>
        </div>
      </div>
    </div>
  );
});

export default withRouter(Login);
