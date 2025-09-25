import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="image-container">
        <div className="slogan-content">
          <h1>
            <span className="line-one">a music shop for</span>
            <br />
            <span className="line-two">music lovers—since 1994!</span>
          </h1>
        </div>
        <div className="arch-overlay"></div>
      </div>
      <div className="text-content">
        <p>
           How we do: tens of thousands of new AND used vinyl LPs across all genres – plus CDs, tapes, superfly LUNA music t-shirts & swag, turntables & record accessories, and more. Not local? The LUNA Crew ships around the world, eight days a week!  
        </p>
        <p>
           Come see us soon at “the 52” – we love you! 
        </p>
      </div>
    </section>
  );
};

export default About;
