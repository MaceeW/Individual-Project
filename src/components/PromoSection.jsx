import React from 'react';
import '../styles/PromoSection.css';
import promoImage1 from '../assets/turntables.webp';
import promoImage2 from '../assets/tshirts.jpg';
import promoImage3 from '../assets/gift.jpg';

const promoItems = [
  {
    link: 'https://shop.lunamusic.net/category-s/1858.htm',
    image: promoImage1,
    alt: 'Shop Vinyl LPs',
  },
  {
    link: 'https://shop.lunamusic.net/LUNA-music-t-shirts-s/1814.htm',
    image: promoImage2,
    alt: 'Shop LUNA music t-shirts',
  },
  {
    link: 'https://shop.lunamusic.net/LUNA-music-gift-cards-s/1477.htm',
    image: promoImage3,
    alt: 'Shop LUNA music gift cards',
  },
];

const PromoSection = () => {
  return (
    <section className="promo-section">
      <div className="promo-grid">
        {promoItems.map((item, index) => (
          <div className="promo-item" key={index}>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <img src={item.image} alt={item.alt} />
            </a>
          </div>
        ))}
      </div>
      <div className="promo-arch-overlay"></div>
    </section>
  );
};

export default PromoSection;
