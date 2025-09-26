import React from 'react';
import '../styles/BlogPage.css';
import imageSource from '../assets/blog.jpg'; 

const newsclips = [
  {
    image: imageSource,
    date: '10/25/25',
    title: 'Oct 25 Newsclip',
    artists: 'The Black Keys, Sharon Van Etten, The War on Drugs, Japanese Breakfast',
    emoji: '🔥',
    link: '#',
  },
  {
    image: imageSource,
    date: '9/27/25',
    title: 'Sept 27 Newsclip',
    artists: 'The Cure, The National, Alan Sparhawk, Jason Isbell, Wilco',
    emoji: '🧡',
    link: '#',
  },
  {
    image: imageSource,
    date: '8/9/25',
    title: 'Aug 9 Newsclip',
    artists: 'Fontaines D.C. Listening Party, Spoon, King Gizz, Pharoah Sanders',
    emoji: '🍂',
    link: '#',
  },
];

const BlogPage = () => {
  return (
    <div className="blog-page">
      <h1 className="blog-page-title">The LUNA Music Newsclip</h1>
      
      {newsclips.map((clip, index) => (
        <NewsclipItem
          key={index}
          image={clip.image}
          date={clip.date}
          title={clip.title}
          artists={clip.artists}
          emoji={clip.emoji}
          link={clip.link}
        />
      ))}
    </div>
  );
};

const NewsclipItem = ({ image, date, title, artists, emoji, link }) => {
  return (
    <div className="newsclip-item">
      <div className="newsclip-image-container">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img src={image} alt={title} />
        </a>
      </div>
      <div className="newsclip-content">
        <p className="newsclip-date">{date}</p>
        <h2 className="newsclip-title">
          <a href={link} target="_blank" rel="noopener noreferrer" className="read-more-link">
            {title}
          </a>
        </h2>
        <p className="newsclip-artists">
          <span className="newsclip-emoji" role="img" aria-label="emoji">
            {emoji}
          </span>
          {artists}
        </p>
      </div>
    </div>
  );
};

export default BlogPage;