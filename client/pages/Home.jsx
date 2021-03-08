import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import UserCard from '../components/UserCard.jsx';
import fetch from 'isomorphic-fetch';
import regeneratorRuntime from "regenerator-runtime";

//Functional Component
const Home = (props) => {
  const { user } = props;

  // if(!user) props.history.push('/');

  const user1 = {
    username: 'rcaporino',
    user_profile: {
      interests: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pulvinar, massa id consectetur tempor, augue nisl rhoncus dui, et vulputate enim ante eu felis. Nulla rutrum eros enim. Nullam tincidunt ultrices iaculis. ',
      skills_to_improve: 'React, redux, hooks, recursion, closure',
      img: 'https://avatars.githubusercontent.com/u/24300955?v=4'
    }
  };

  const user2 = {
    username: 'mjsalvador',
    user_profile: {
      interests: 'Maecenas quis consequat orci. Etiam varius eros vitae augue bibendum, sit amet consectetur velit rutrum. Morbi eget ipsum metus. Donec sit amet augue sit amet arcu fringilla pretium vel sit amet nibh.',
      skills_to_improve: 'SQL, middleware, express',
      img: 'https://avatars.githubusercontent.com/u/24300955?v=4'
    }
  };

  const user3 = {
    username: 'ausarenglish',
    user_profile: {
      interests: 'Maecenas facilisis sit amet lectus in lobortis. Vivamus non mauris eget libero auctor efficitur. Nullam elit arcu, tincidunt quis accumsan vitae, varius ac dui. Aliquam euismod porttitor efficitur.',
      skills_to_improve: 'React, sass, OOP',
      img: 'https://avatars.githubusercontent.com/u/24300955?v=4'
    }
  };

  const user4 = {
    username: 'deadxears',
    user_profile: {
      interests: 'Sed feugiat blandit urna, nec aliquet enim lobortis tincidunt. In nec iaculis ligula, non finibus lacus. Sed et enim sagittis, aliquet mi sed, ultricies nunc. Morbi venenatis mollis tortor, eu mattis neque sollicitudin non. ',
      skills_to_improve: 'middleware, react, express, recursion',
      img: 'https://avatars.githubusercontent.com/u/24300955?v=4'
    }
  };

  const [potentialMatches, setPotentialMatches] = useState([user1, user2, user3, user4]);
  const [currPotMatch, setCurrPotMatch] = useState(potentialMatches[0]);

  useEffect(() => {
    setPotentialMatches(potentialMatches => potentialMatches.slice(1));
    console.log(potentialMatches);
    console.log(currPotMatch);
  },[]);

  const handleSwipe = (e, decision) => {
    //decision will be a string, 'reject' or 'accept' will matter when we have data, doesnt for now
    const nextPotMatch = potentialMatches.shift();
    console.log(potentialMatches);
    setCurrPotMatch(curr => curr = nextPotMatch);
  }
  console.log('USER: ', user);
  return (
    <UserCard currPotMatch={currPotMatch} handleSwipe={handleSwipe}/>
  );
};
export default withRouter(Home);