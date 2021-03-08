import React, { useState, useEffect } from "react";
import ProfileCard from "../components/ProfileCard.jsx";
import { withRouter } from 'react-router-dom';
import ProfilePicture from "../components/ProfilePicture.jsx";
import fetch from 'isomorphic-fetch';

///client/components/ProfilePicture.jsx


function Matches(props) {
  const {user} = props
  console.log(user._id);
  if(user.username === undefined) props.history.push('/');



  const [matches, setMatches] = useState([]);

  // const { img, userName } = props.user;

  /**
   *
   * @param {String} userId - The user id for the current logged in user
   * Method assumes that there will be a 'matches' API that will accept a user id, and return a list of matches
   */
  const fetchMatches = async (userId) => {
    // SAMPLE fetch code for when the matches API is ready
  

    // placeholder code start - replace with fetch to 'matches' API to get match data for logged in user (sample code above)
    const dummyMatches = [];
    for (let i = 0; i < 10; i++) {
      dummyMatches.push({
        img:
          "https://avatars.githubusercontent.com/u/51981800?s=460&u=49ffbe604fc41d779df1b19a2929b5b23e996077&v=4",
        name: "Dummy Match " + i,
        id: i,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu libero neque. Nam dignissim dignissim molestie. Nulla lobortis magna sit amet neque lacinia, sit amet.",
      });
    }


  
    setMatches(dummyMatches);
    // placeholder code end
  };

  const generateProfileCards = () => {

    // const result = words.filter(word => word.length > 6);

    // matches.filter((match) => {
      
    // })

    return matches.map((match, index) => {
      return (
        <ProfileCard
          user={match.potential_matches_username}
          key={match.potential_matches_id}
          className="profile-card"
        ></ProfileCard>
      );
    });
  // return profilecards

  };

  useEffect(() => {
    //grab info with fetch request
    fetch('/users/matches', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        userId: user._id
      })
    })
    .then(response => response.json())
    .then(data => {
      console.log('CLIENT-SIDE FILTERED MATCHES:', data);
      setMatches(data);
    })
    .catch(err => {
      console.log(err, "matche error!");
    }) 
  }, []);

  return (
  <div className="matches" >
    <h3>Hello {user.username}</h3>
    <ProfilePicture image={user.github_user_info.avatar}></ProfilePicture>
    <h2>Matches</h2>
    <hr className="rounded" className = "divcolor" ></hr>
    <div >{generateProfileCards()}</div>
  </div> 
   
  );
}

// {/* <div className= 'matches' >
// <h2>Your Matches</h2>
// <div >{/* card s */}</div>
// </div> */}

export default withRouter(Matches);






// const Matches = () => {
//   return (
//     // <div>
//     //   <h3>Welcome to Pairer!</h3>
//     //   <small>Main Page</small>
//     // </div>
//     <h2>Matches</h2>
//   );
// };
// export default Matches;
