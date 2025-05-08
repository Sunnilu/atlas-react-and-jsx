import React from 'react';
import dayImg from '../assets/day.svg';
import eveningImg from '../assets/evening.svg';
import nightImg from '../assets/night.svg';

function Greeting() {
  const hour = new Date().getHours();

  let message = '';
  let image = '';

  if (hour >= 6 && hour < 12) {
    message = 'Good Morning!';
    image = dayImg;
  } else if (hour >= 12 && hour < 17) {
    message = 'Good Afternoon!';
    image = dayImg;
  } else if (hour >= 17 && hour < 21) {
    message = 'Good Evening!';
    image = eveningImg;
  } else {
    message = 'Good Night!';
    image = nightImg;
  }

  return (
    <h1 className="greeting">
      <img src={image} alt="Greeting Time Visual" />
      {message}
    </h1>
  );
}

export default Greeting;
