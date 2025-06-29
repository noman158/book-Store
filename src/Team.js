// Team.js

import React from 'react';
import './Team.css'; 
import Team1Image from './team-member1.jpeg';
import Team2Image from './team-member2.jpg';
import Team3Image from './team-member3.jpg';
const Team = () => {
  return (
    <div>
        {/* Header */}
        <header className="header">
          <div className="logo">
          <h1>Shelf Book Store</h1>
          </div>
          <nav className="nav">
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/Contact">Contact Us</a></li>
              <li><a href="/Team">Our Team</a></li>
            </ul>
          </nav>
        </header>

      <h1>Our Team</h1>
      <div className="team-member">
        <img src={Team1Image} width="300" height="400" alt="Team Member 1" />
        <h2>Mohsin Bhatti</h2>
        <p>Founder & CEO</p>
      </div>
      
      <div className="team-member">
        <img src={Team2Image} width="300" height="400" alt="Team Member 2" />
        <h2>Noman Maqsood</h2>
        <p>Chief Operations Officer</p>
      </div>
      
      <div className="team-member">
        <img src={Team3Image} width="300" height="400" alt="Team Member 3" />
        <h2>Naeem Mustafa</h2>
        <p>Head of Marketing</p>
      </div>
    </div>
  );
};

export default Team;
