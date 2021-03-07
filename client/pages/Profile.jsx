import React, { useReducer, useState} from 'react';
const Profile = () => {
  return (
    <div className='wrapper' style={{ padding: '5px 20px'}} >
    <h2>Profile Information</h2>
    <form>
    <fieldset style={{margin: '20px 0', borderRadius: '10px'}}>
       <label>
         <p>Name</p>
         <input name='userName' style={{borderRadius: '10px'}} />
       </label>
     </fieldset>
     <fieldset style={{margin: '20px 0', height: '200px', borderRadius: '10px'}}>
     <label>
         <p>What do you want to work on?</p>
         <input name='userInterest' style={{height: '100px', width: '500px', borderRadius: '10px'}} />
       </label>
     </fieldset>
     <fieldset style={{margin: '20px 0', height: '200px', borderRadius: '10px'}}>
     <label>
         <p>Interests:</p>
         <input name='userInterest' style={{height: '100px', width: '500px', borderRadius: '10px'}} />
       </label>
     </fieldset>
     <button type='submit' style={{margin: '0 auto', display:'block', height: '30px', width: '100px', borderRadius: '10px'}}>Submit</button>
    </form>
  </div>
  );
};
export default Profile;