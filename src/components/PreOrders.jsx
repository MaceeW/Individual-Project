import React, { useState, useEffect } from 'react';
import '../styles/PreOrders.css';
import preorder1 from '../assets/buckin.webp';
import preorder2 from '../assets/tron.jpg';
import preorder3 from '../assets/pixies.jpg';

const preOrderAlbums = [
  {
    cover: preorder1,
    albumName: 'The Dark Side of the Moon',
    artist: 'Pink Floyd',
  },
  {
    cover: preorder2,
    albumName: 'Rumours',
    artist: 'Fleetwood Mac',
  },
  {
    cover: preorder3,
    albumName: 'Abbey Road',
    artist: 'The Beatles',
  },
];
const extendedAlbums = [...preOrderAlbums, ...preOrderAlbums, ...preOrderAlbums];

const PreOrders = () => {
  const [currentIndex, setCurrentIndex] = useState(preOrderAlbums.length);
  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
    if (currentIndex === 0 || currentIndex === 2 * preOrderAlbums.length) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(preOrderAlbums.length);
      }, 500);
    }
  }, [currentIndex]);


  return (
    <section className="preorders-section">
      <h2>
        Vinyl Lp
        <br />
        Pre-orders
      </h2>
      <div className="carousel-container">
        <button className="carousel-button prev" onClick={() => {
          setIsTransitioning(true);
          setCurrentIndex(prev => prev - 1);
        }}>&#10094;</button>
        <button className="carousel-button next" onClick={() => {
          setIsTransitioning(true);
          setCurrentIndex(prev => prev + 1);
        }}>&#10095;</button>
        <div
          className="carousel-wrapper"
          style={{
            transform: `translateX(calc(-${currentIndex * 100 / 3}% + 33.333%))`,
            transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none',
          }}
        >
          {extendedAlbums.map((album, index) => (
            <div className="carousel-slide" key={index}>
              <img src={album.cover} alt={`${album.albumName} by ${album.artist}`} />
              <div className="album-info">
                <p className="album-name">{album.albumName}</p>
                <p className="artist-name">{album.artist}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <a href="https://shop.lunamusic.net/LUNA-music-pre-orders-s/1821.htm" target="_blank" rel="noopener noreferrer" className="preorder-link">
        <button>View All Preorders</button>
      </a>
    </section>
  );
};

export default PreOrders;
