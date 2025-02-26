import React from "react";
import "./Experiences.css";


const Experiences = () => {
  return (
    <div className="Experiences">
      <h1  className=" Discover-heading">Discover Airbnb Experiences</h1>
      <div className="image-container">
        <div className="image-card">
          <img
            src="https://images.pexels.com/photos/2877375/pexels-photo-2877375.jpeg?auto=compress&cs=tinysrgb&w=600"
           alt="Airbnb experience"
            className="banner-image"
          />
          <div className="overlay">
            <p>Things to do <br/> on your trip</p>
            <button>Experiences</button>
          </div>
        </div>
        <div className="image-card">
          <img
            src=" https://images.pexels.com/photos/3298634/pexels-photo-3298634.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Airbnb experience"
            className="banner-image"
          />
          <div className="overlay">
            <p>Things to do<br/> from home</p>
            <button> Online Experiences</button>
            
    
        </div>

           
      </div>
  
    </div>
   
    </div>
  );
};

export default Experiences;
