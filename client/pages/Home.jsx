import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import UserCard from '../components/UserCard.jsx';
import fetch from 'isomorphic-fetch';
import regeneratorRuntime from 'regenerator-runtime';

//Functional Component
const Home = (props) => {
  const { user } = props;

  if (user === {}) props.history.push('/');

  const user1 = {
    username: 'rcaporino',
    user_profile: {
      interests:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pulvinar, massa id consectetur tempor, augue nisl rhoncus dui, et vulputate enim ante eu felis. Nulla rutrum eros enim. Nullam tincidunt ultrices iaculis. ',
      skills_to_improve: 'React, redux, hooks, recursion, closure',
      img: 'https://avatars.githubusercontent.com/u/24300955?v=4',
    },
  };

  const user2 = {
    username: 'mjsalvador',
    user_profile: {
      interests:
        'Maecenas quis consequat orci. Etiam varius eros vitae augue bibendum, sit amet consectetur velit rutrum. Morbi eget ipsum metus. Donec sit amet augue sit amet arcu fringilla pretium vel sit amet nibh.',
      skills_to_improve: 'SQL, middleware, express',
      img: 'https://avatars.githubusercontent.com/u/24300955?v=4',
    },
  };

  const user3 = {
    username: 'ausarenglish',
    user_profile: {
      interests:
        'Maecenas facilisis sit amet lectus in lobortis. Vivamus non mauris eget libero auctor efficitur. Nullam elit arcu, tincidunt quis accumsan vitae, varius ac dui. Aliquam euismod porttitor efficitur.',
      skills_to_improve: 'React, sass, OOP',
      img: 'https://avatars.githubusercontent.com/u/24300955?v=4',
    },
  };

  const user4 = {
    username: 'deadxears',
    user_profile: {
      interests:
        'Sed feugiat blandit urna, nec aliquet enim lobortis tincidunt. In nec iaculis ligula, non finibus lacus. Sed et enim sagittis, aliquet mi sed, ultricies nunc. Morbi venenatis mollis tortor, eu mattis neque sollicitudin non. ',
      skills_to_improve: 'middleware, react, express, recursion',
      img: 'https://avatars.githubusercontent.com/u/24300955?v=4',
    },
  };

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
    <div>
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
