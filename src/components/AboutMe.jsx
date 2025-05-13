import React from 'react';
import profilePic from '../assets/image000004.jpg'; 

function AboutMe() {
  return (
    <div className="about-me">
      <img src={profilePic} alt="Professional headshot of Suntha Lucas" />
      <p>
        Hi! My name is <strong>Suntha Lucas</strong>. I'm currently in the <strong>Software Engineering</strong> specialization at Atlas School, in my <strong>fifth trimester</strong>. I enjoy working with <strong>JavaScript, Python, React, and PostgreSQL</strong>. After graduation, I plan to pursue a role in <strong>full-stack web development</strong> or a hybrid technical leadership position. Outside of tech, I love <strong>reading, writing, bowling, tennis, pickleball, golf</strong>, and spending time outdoors.
      </p>
    </div>
  );
}

export default AboutMe;
