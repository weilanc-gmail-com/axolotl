//import React from 'react';
import React, { useReducer, useState} from 'react';
import fetch from "isomorphic-fetch"
//Functional Component
const Matches = (props) => {
  const { user }= props

  //grab info with fetch request


  //did mount to load matches
  //grid of cards

  console.log(props.user)
  return (
  
    // <div>
    //   <h3>Welcome to Pairer!</h3>
    //   <small>Main Page</small>
    // </div>

<div>
<h2>Your Matches</h2>
</div>
  );
};
export default Matches;

//display everyone connected the person is connected with
//need fetch request to database
//take components in homepage
//matches in grids of square