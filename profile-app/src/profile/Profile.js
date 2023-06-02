import React from "react";
import PropTypes from "prop-types";

const Profile = ({ fullName, bio, profession, children, handleName }) => {
  return (
    <div style={{ textAlign: "center" }}>
    <h2>{fullName}</h2>
    <p>{bio}</p>
    <p>{profession}</p>
      {children}
      <button onClick={handleName}>Show Name</button>
    </div>
  );
};

Profile.propTypes = {
  fullName: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  profession: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  handleName: PropTypes.func.isRequired,
};

Profile.defaultProps = {
  fullName: "John Doe",
  bio: "No bio available",
  profession: "Unknown profession",
};

export default Profile;
