import '../styles/AboutPage.css';
import About1 from '../assets/About1.webp';
import About2 from '../assets/About2.webp';
import About3 from '../assets/About3.png';

const AboutPage = () => {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>About LUNA music</h1>
      </header>
      <img 
        src={About1} 
        alt="Interior of LUNA music record shop with many records" 
        className="about-inline-image"
      />

      <p className="text-block">
        <strong>LUNA music</strong> is a <strong>30-year old, full-service Vinyl LP, CD, Cassette shop</strong>, stocking new and pre-loved titles. Voted Best Record Shop eight years in a row by NUVO Newsweekly, Best Record Shop by Indianapolis Monthly, and recently featured in{' '}
        <a href="https://www.timeout.com/indianapolis/things-to-do/best-things-to-do-in-indianapolis" target="_blank" rel="noopener noreferrer">TIME OUT</a> as one of the "24 Best Things To Do in Indianapolis" and{' '}
        <a href="https://www.nytimes.com/2019/11/14/travel/36-Hours-what-to-do-Indianapolis.html" target="_blank" rel="noopener noreferrer">The New York Times</a> as an "Essential Spot" for you to check out—when you visit our fine, fine city! LUNA music is the music shop, for music lovers!
      </p>

      <div className="clear-both"></div> 

      <h2>Scouring the universe for sounds since ‘94</h2>
      <p className="text-block">
        Our new vinyl LP inventory is <strong>over 10,000</strong> titles, and our pre-loved vinyl selection sits at <strong>over 25,000 LPs</strong> — ranging in price from $1-$10,000. In addition, LUNA offers a wide range of music and music-related items:
      </p>
      
      <ul className="about-list text-block">
        <li><strong>• stay stylin’</strong>: world-famous LUNA music t-shirts, hats, & onesies;</li>
        <li><strong>• protect yr wax</strong>: slipmats, totes, & vinyl care/cleaning supplies;</li>
        <li><strong>• set the vibe</strong>: sage, incense, candles, coffee mugs & pint glasses;</li>
        <li><strong>• word up</strong>: lovingly curated greeting cards, books, and magazines;</li>
        <li><strong>• jam out</strong>: new and used turntables & stereo equipment</li>
      </ul>

      <p className="text-block">
        We also host in-store performances by your favorite artists! Low, Ben Watt (Everything But The Girl), The Black Keys, Ride, St. Vincent, Julien Baker, Jens Lekman, Julian Casablancas, Mojave 3, Sylvan Esso, Richard Swift, GBV, the Impossible Shapes, Sean Lennon, John Mayer, Nat Russell, Foals, Broken Social Scene, Super Furry Animals, Kurt Vile, The Head & The Heart, & Hiss Golden Messenger to name a few…
      </p>

      <h2>Live outside Indy? We ship!</h2>
      <p className="text-block">
        We hand-pick each LP and pack them with luv, shipping from our storefront six days a week (<strong>yes, we tried eight…</strong>)
      </p>
      <p className="text-block" style={{ fontStyle: 'normal' }}>
        Why buy online from us?
      </p>
      <ul className="about-list text-block">
        <li><strong>• custom LUNA mailers</strong> made to safely ship yr wax stack</li>
        <li><strong>• each order shipped from our storefront</strong>, carefully packed by the LUNA Crew’s resident record experts</li>
        <li><strong>• free LUNA music Analog Times zine + LUNA postcard</strong> with every order (<strong>because we love ya</strong>)</li>
        <li><strong>• wanna pick-up locally & save on shipping?</strong> We do that!</li>
        <li><strong>• …your order supports a mom-and-pop shop</strong> that loves music as much as you!</li>
      </ul>
      <img 
        src={About3}
        alt="Image related to shipping or customer appreciation" 
        className="about-inline-image"
      />

      <h2>LUNA music</h2>
      <address className="about-address">
        <a href="https://maps.app.goo.gl/nccWCmdvLRBynbfj7" target="_blank" rel="noopener noreferrer">
            5202 N College Ave Indianapolis, IN 46220
        </a>
        <br />
        317-283-5862 (LUNA)
      </address>
      <p className="about-hours">
        <em>Hours of Operation:</em><br />
        <strong>Monday-Saturday:</strong> 10am - 7pm<br />
        <strong>Sunday:</strong> 11am - 6pm
      </p>
    </div>
  );
};

export default AboutPage;