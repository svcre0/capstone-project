import React from "react";
import './HomePage.css';
const HomePage = () => {
  return (
    

 
    <div className="home-page">

      <div className="home-page-container">
        <img
          src="https://s3-media0.fl.yelpcdn.com/bphoto/AGnb9XrSoZbvAcGI4Beu7g/o.jpg"
          alt="Airbnb experience"
          className="banner-image"
        />
        <div className="overlay"></div> {/* Overlay div */}
        <p>Not sure where to go? Perfect.</p>
        <button>I'm flexible</button>
      </div>
      <button className='non-btn'>plain</button>
    </div>


  );
};

export default HomePage;
