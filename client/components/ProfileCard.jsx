import React from "react";
//import "./ProfileCard.css";

const ProfileCard = (props) => {
  const { user } = props;
  const { className } = props;
  console.log("className", className);
  return (
    <React.Fragment>
      <div className={`${className} profile-card-container`}>
        <img className="profile-card-pic" src={`https://github.com/${user}.png`} alt="profile pic"></img>
        <div className="profile-card-copy">
          <h3>{user}</h3>
          <p>{'some description'}</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProfileCard;
