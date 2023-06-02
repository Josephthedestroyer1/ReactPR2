import React from 'react';
import Profile from './profile/Profile';
import './App.css';
import Img from './profile-image.jpg'
const App = () => {
  const handleName = () => {
    alert('Profile user name: Youssef Hadi');
  };

  return (
    <div className="App">
      <Profile
        fullName="Youssef Hadi"
        bio="Fullstack Developer"
        profession="Web Developer"
        handleName={handleName}
      >
        <img
          src={Img}
          alt="Profile"
          style={{ width: '200px', height: '200px', borderRadius: '50%' }}
        />
      </Profile>
    </div>
  );
};

export default App;

