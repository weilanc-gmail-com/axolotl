import React from 'react';
// import './ProfilePicture.css'

const ProfilePicture = (props) => {
    return (  
        <React.Fragment><img className='profilepic' src={props.image} alt="Profile Pic"></img></React.Fragment>
    );
}
 
export default ProfilePicture;