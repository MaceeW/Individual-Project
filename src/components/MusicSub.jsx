import React from 'react';
import '../styles/MusicSub.css';
import animationGif from '../assets/3d-animation.gif';

const MusicSub = () => {
  return (
    <section className="musicsub-section">
      <div className="musicsub-content">
        <div className="musicsub-text">
          <h2>The LUNA music</h2>
          <p>
            one LP a month, hand-selected by the LUNA crew for your tastes, shipped straight to yr door!
          </p>
          <p>
            Each record is lovingly packed & shipped straight to your door! Let the dance party / dinner jams / 3rd eye openers / heady sesh commence.
          </p>
          <button>Click here for the deets!</button>
        </div>
        <div className="musicsub-image-container">
          <img src={animationGif} alt="3D animation of a record player" />
        </div>
        
      </div>
      <div className="musicsub-arch-overlay"></div>
      
    </section>
  );
};

export default MusicSub;
