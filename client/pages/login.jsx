import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import fetch from 'isomorphic-fetch';
import regeneratorRuntime from "regenerator-runtime";

  const handleOAuth = async () => {
    try {
      const oAuthUrl = await fetch('/login', {
        mode: 'no-cors'
      });
      const url = await oAuthUrl.json();
      
      window.location.href = await url;
    }
    catch(err) {
      console.log(err);
    }
  };

const Login = (props) => {
  return (
    <div>
      <button onClick={handleOAuth}>Log in with git </button>
    </div>
  );
};

export default withRouter(Login);
