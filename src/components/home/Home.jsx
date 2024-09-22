import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <header className="home">
      <h2>Your Trusted Moving Partner</h2>
      <p>Delivering top-notch services to make your life easier. Get in touch today!</p>
      <a href="#services"> <button className="cta-btn" >Get Started</button> </a>
    </header>
  );
};

export default Home;
