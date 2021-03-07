import React from 'react';

const UserCard = (props) => {
  const { currPotMatch, handleSwipe } = props;
  return (
    <div className='userCard'>
      <div className='cardContents'>
        <img src={currPotMatch.user_profile.img} alt='profile pic' />
        <div className='cardText'>
          <h2>{currPotMatch.username}</h2>
          <p>
            <strong>Wants to study: </strong>
            {currPotMatch.user_profile.skills_to_improve}
          </p>
          <p>
            <strong>Interests: </strong>
            {currPotMatch.user_profile.interests}
          </p>
        </div>
        <div className='swipeBtns'>
          <button className='reject' onClick={(e) => handleSwipe(e, 'reject')}>
            <i className='fal fa-times-circle fa-5x'></i>
          </button>
          <button className='accept' onClick={(e) => handleSwipe(e, 'accept')}>
            <i className='fal fa-check-circle fa-5x'></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
