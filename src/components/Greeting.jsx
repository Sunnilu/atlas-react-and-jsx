import React from 'react';
import dayImg from '../assets/day.svg';
import eveningImg from '../assets/evening.svg';
import nightImg from '../assets/night.svg';

function Greeting() {
  const hour = new Date().getHours();
  let image, message;

  if (hour >= 6 && hour < 12) {
    image = dayImg;
    message = 'Good Morning!';
  } else if (hour >= 12 && hour < 17) {
    image = dayImg;
    message = 'Good Afternoon!';
  } else if (hour >= 17 && hour < 21) {
    image = eveningImg;
    message = 'Good Evening!';
  } else {
    image = nightImg;
    message = 'Good Night!';
  }

  return (
    <h1 className="greeting">
      <img src={image} alt="Time of Day" />
      {message}
    </h1>
  );
}

export default Greeting;
