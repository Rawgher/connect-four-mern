import React from 'react';
import { useSelector } from 'react-redux';

function WelcomePage() {
  const { username } = useSelector((state) => state.user);
  return (
    <div>
      <h1>Welcome to the game, {username}!</h1>
      <p>Get ready to play!</p>
    </div>
  );
}

export default WelcomePage;
