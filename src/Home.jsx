import React from 'react';
import {Link}  from 'react-router-dom';
import './App.css';

function Home() {
  const handleButtonClick1 = () => {
    // Add your action for button 1 click here
    console.log("Button 1 Clicked!");
  };

  const handleButtonClick2 = () => {
    // Add your action for button 2 click here
    console.log("Button 2 Clicked!");
  };

  return (
    <div className="home">
      <Link className="home-btn" to="/rainbow">Rainbow</Link>
      <Link className="home-btn" to="/both">Both</Link>
      <Link className="home-btn" to="/mono">Mono</Link>
    </div>
  );
}

export default Home;