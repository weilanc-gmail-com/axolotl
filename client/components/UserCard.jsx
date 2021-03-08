import React, { useState } from 'react';

const UserCard = (props) => {
  const { currPotMatch, handleSwipe } = props;

  const [cardClass, setCardClass] = useState('userCard slide-in-bottom');

  const swipes = (e, decision) => {
    if(decision === 'reject') setCardClass('userCard slide-out-left');
    else setCardClass('userCard slide-out-right');
  };


  return (
    <div
      className={cardClass}
      onAnimationEnd={(e) => {
        setCardClass('userCard slide-in-bottom');
        if(e.animationName === 'slide-out-left') handleSwipe(e, 'reject');
        if(e.animationName === 'slide-out-right') handleSwipe(e, 'accept');
      }}
    >
      <div className='cardContents'>
        <img src={currPotMatch.github_user_info ? currPotMatch.github_user_info.avatar : `https://github.com/${currPotMatch.username}.png`} alt='profile pic' />
        <div className='cardText'>
          <h2>{currPotMatch.username}</h2>
          <hr/>
          <p>
            <strong>Wants to study: </strong>
            {currPotMatch.user_profile ? currPotMatch.user_profile.userInterest1 : 'No skills to improve.'}
          </p>
          <p>
            <strong>Interests: </strong>
            {currPotMatch.user_profile ? currPotMatch.user_profile.userInterest2 : 'Not interested in anything.'}
          </p>
        </div>
        <div className='swipeBtns'>
          <button className='reject' onClick={(e) => swipes(e, 'reject')}>
            <i className='fal fa-times-circle fa-5x'></i>
          </button>
          <button className='accept' onClick={(e) => swipes(e, 'accept')}>
            <i className='fal fa-check-circle fa-5x'></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
