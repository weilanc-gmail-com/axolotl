import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import UserCard from '../components/UserCard.jsx';
import fetch from 'isomorphic-fetch';
import regeneratorRuntime from 'regenerator-runtime';

//Functional Component
const Home = (props) => {
  const { user } = props;

  if (user.username === undefined) props.history.push('/');

  const [potentialMatches, setPotentialMatches] = useState({});

  useEffect(() => {
    async function getData() {
      try {
        const allUsers = await fetch('/users/users');
        const allUsersJson = await allUsers.json();
        console.log('LINE 56: ', await allUsersJson);
        const currPotMatch = allUsersJson.shift();
        setPotentialMatches({
          allPotMatches: allUsersJson,
          currPotMatch: currPotMatch,
          loaded: true,
        });
      } catch (err) {
        console.log(err);
      }
    }
    getData();
  }, []);

  const handleSwipe = (e, decision) => {
    //decision will be a string, 'reject' or 'accept' will matter when we have data, doesnt for now

    if (decision === 'accept') {
      fetch('/users/potential-matches', {
        method: 'POST',
        headers:{
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          userId: user._id,
          username: user.username,
          potentialMatchId: potentialMatches.currPotMatch._id,
          potentialMatchUsername: potentialMatches.currPotMatch.username,
        }),
      }).then((response) => {
        console.log('potentials');
        setPotentialMatches({
          ...potentialMatches,
          currPotMatch: potentialMatches.allPotMatches.shift(),
        });
      });
    } else {
      setPotentialMatches({
        ...potentialMatches,
        currPotMatch: potentialMatches.allPotMatches.shift(),
      });
    };
  };

  console.log('USER: line90', user);

  return (
    <div className='mainContainer'>
      {potentialMatches.loaded ? (
        <UserCard
          currPotMatch={potentialMatches.currPotMatch}
          handleSwipe={handleSwipe}
        />
      ) : null}
    </div>
  );
};
export default withRouter(Home);
