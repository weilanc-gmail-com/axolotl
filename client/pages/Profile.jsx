import React, { useReducer, useState, useEffect} from 'react';
import fetch from "isomorphic-fetch";
import regeneratorRuntime from 'regenerator-runtime';


const formReducer = (state, event) => {
  return {
    ...state,
    [event.name]: event.value
  }
}

const Profile = (props) => {

  if(props.username === undefined) props.history.push('/');

  const [formData, setFormData] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);

  useEffect (() => {
    fetch("http://localhost:8080/users/profile", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: props.user.username
      })
    })
    .then (res => res.json())
    .then (data => {
      console.log('DATA: ', data);
      document.getElementById("realNameId").value  = data.user_profile.realName;
      document.getElementById("userNameInterest1Id").value  = data.user_profile.userInterest1;
      document.getElementById("userNameInterest2Id").value  = data.user_profile.userInterest2;
      console.log("data: ", data)
      console.log("user: ", props.user)
    })
    .catch ((error) => {
      console.log(error);
    })

 }, [])


  const handleSubmit = event => {
    event.preventDefault();
    setSubmitting(true);
    console.log("formData: ", formData)
    console.log("userNameId: ", document.getElementById("userNameId"))

  // store profile info submitted by user
  // const profileInfo = {
  //   profile: formData,
  //   username: props.user,
  // }
  
   // post user data to server
    fetch('http://localhost:8080/users/new-profile', {
      method: "POST",
      body: JSON.stringify({
        profile: formData,
        username: props.user.username
      }),
      headers: {
        "Content-Type": "application/json; charset=UTF-8"
      }
    })
    .then(response => response.json()) 
    .then(json => {
      console.log("json: ", json);
    })
    .catch(err => {console.log(err)});
  }

const handleChange = event => {
  setFormData({
    name: event.target.name,
    value: event.target.value,
    usrname: props.user,
  })
  // console.log("state", formData )
}

  return (
    <div className='profile'>
    <h2>Profile Information</h2>
    <form onSubmit={handleSubmit}>
    <fieldset>
       <label>
         <p>Name</p>
         <input  name='realName' id="realNameId" onChange={handleChange} value={formData.realName} />
       </label>
     </fieldset>
     <fieldset className="tallFieldSet">
     <label>
         <p>What do you want to work on?</p>
        
         <textarea className="bigInput" name='userInterest1' id="userNameInterest1Id" onChange={handleChange} value={formData.userInterest1 } />
       </label>
     </fieldset>
     <fieldset className="tallFieldSet">
     <label>
         <p>Interests:</p>
         <textarea className="bigInput" name='userInterest2' id="userNameInterest2Id"  onChange={handleChange} value={formData.userInterest2 } />
       </label>
     </fieldset>
     <button type='submit' >Submit</button>
    </form>
    {submitting &&
        <div>Submtting Info...</div>
      }
  </div>
  );
};
export default Profile;








































// old code//


// import React, { useReducer, useState} from 'react';
// const Profile = () => {
//   return (
//     <div className='profile'>
//     <h2>Profile Information</h2>
//     <form>
//     <fieldset>
//        <label>
//          <p>Name</p>
//          <input name='userName' />
//        </label>
//      </fieldset>
//      <fieldset className="tallFieldSet">
//      <label>
//          <p>What do you want to work on?</p>
//          <input className="bigInput" name='userInterest' />
//        </label>
//      </fieldset>
//      <fieldset className="tallFieldSet">
//      <label>
//          <p>Interests:</p>
//          <input className="bigInput" name='userInterest' />
//        </label>
//      </fieldset>
//      <button type='submit' >Submit</button>
//     </form>
//   </div>
//   );
// };
// export default Profile;