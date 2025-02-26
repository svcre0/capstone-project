import React from 'react'; 
import './Card.css';

const Card = ({ src, title, description, price }) => {
  return (
    <div className='container'>
    <div className='card'>
    
      <img src={src} alt="property" />
      <div className='card-info'>
        <h2>{title}</h2>
        <h4>{description}</h4>
        <h3>{price}</h3>
      </div>
    </div>
    </div>
  );
}

export default Card;
