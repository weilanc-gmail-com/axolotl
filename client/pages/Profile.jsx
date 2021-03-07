import React, { useReducer, useState} from 'react';
const Profile = () => {
  return (
    <div className='profile'>
    <h2>Profile Information</h2>
    <form>
    <fieldset>
       <label>
         <p>Name</p>
         <input name='userName' />
       </label>
     </fieldset>
     <fieldset className="tallFieldSet">
     <label>
         <p>What do you want to work on?</p>
         <input className="bigInput" name='userInterest' />
       </label>
     </fieldset>
     <fieldset className="tallFieldSet">
     <label>
         <p>Interests:</p>
         <input className="bigInput" name='userInterest' />
       </label>
     </fieldset>
     <button type='submit' >Submit</button>
    </form>
  </div>
  );
};
export default Profile;