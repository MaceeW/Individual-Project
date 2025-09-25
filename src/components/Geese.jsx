import React from 'react';
import '../styles/Geese.css';
import geeseImage from '../assets/geese.jpg';

const Geese = () => {
  return (
    <section id="we-buy-vinyl" className="geese-section">
      <div className="geese-content">
        <div className="geese-text">
          <h2>Geese</h2>
          <h3>
            Getting Killed 
            <br />
            Listening Party!
            <br />
            Thursday, September 25th
            <br />
            6pm / Free / ALL-ages!
          </h3>
          <p>Announcing… The Geese Getting Killed Listening Party! 🎉
            <br /> 
            We will be playing the LP in full the day before release!
            <br />
            We will have free signed prints with purchase of the new album as well as free posters for attendees while supplies last! 👀
            <br />
            Geese has been steadily becoming one of the most interesting bands to watch and we are stoked to host this event! See you there!</p>
        </div>
        <div className="geese-image-container">
          <a href="https://shop.lunamusic.net/Geese-Getting-Killed-Clear-Vinyl-VINYL-LP-p/5400863188023.htm" target="_blank" rel="noopener noreferrer">
            <img src={geeseImage} alt="Geese - Getting Killed Vinyl LP" />
          </a>
        </div>
      </div>
      <button>Preorder 'Getting Killed'</button>
      <div className="geese-arch-overlay"></div>
    </section>
  );
};

export default Geese;
