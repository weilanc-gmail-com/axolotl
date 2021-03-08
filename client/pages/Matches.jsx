//import React from 'react';
import React, { useEffect, useReducer, useState } from "react";
import fetch from "isomorphic-fetch";
//Functional Component
const Matches = (props) => {
  const { user } = props;

  useEffect(() => {
    //grab info with fetch request
    // fetch('/matches').then(data=>{
    //   console.log(data, "jjkjkj")
    //   return data.text()
    // }).then(data=>{
    //   console.log(data, "info???")
    // })
  });

  //grid of cards

  //console.log(props.user, "props.iser")
  return (
    <div className='mainContainer'>
      <h2>Your Matches</h2>
      <div className='matches'>{/* card s */}</div>
    </div>
  );
};
export default Matches;
