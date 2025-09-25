import React from 'react';
import '../styles/KickingJams.css';
import storefrontImage from '../assets/luna-storefront.webp';

const KickingJams = () => {
  return (
    <section id="kickingjams" className="kickingjams-section">
      <div className="kickingjams-content">
        <div className="kickingjams-image-container">
          <img src={storefrontImage} alt="LUNA music storefront" />
        </div>
        <div className="kickingjams-text">
          <h2>Kicking out 
            <br />
            jams since ‘94</h2>
          <p>
            LUNA music is a 30-year old, full-service Vinyl LP/CD/Cassette shop, stocking new and pre-loved titles. In addition to over 35,000 LPs, we offer LUNA music t-shirts & hats, totes, vinyl care & cleaning necessities, books, magazines, lovingly-curated greeting cards, and a variety of new and used turntables — and of course host top-notch in-store performances by some of your favorite artists!
          </p>
          <button>
            About Luna 
            <br />
            Music
          </button>
        </div>
      </div>
    </section>
  );
};

export default KickingJams;
