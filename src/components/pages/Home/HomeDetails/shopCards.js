import React from 'react';
import './ShopCards.css'; // Import the CSS file for styling

const ShopCards = () => {
  return (
    <div className="gift-card">
      <h1 className="shop-title">Shop Airbnb <br/> gift cards</h1>
      <button className="learn-more-button">Learn more</button>
      <img
        className="gift-card-image"
        src="/Assets/card12.JPEG"
           
        alt="Airbnb gift cards"
      />


    </div>
  );
};

export default ShopCards;

