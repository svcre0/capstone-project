import React from 'react';
import './Questions.css'; // Import the CSS file for styling
import Footer from '../../../layout/Footer/Footer';

const Questions = () => {
  return (
    <>
    <div className="question-container">

      <img
        src="https://hackspirit.com/wp-content/uploads/2024/06/newimagesize-650.png"
        alt="Airbnb gift cards"
        className="question-image"
      />

      <h1 className="question-title">Questions <br/> about <br/> hosting?</h1>
      <button className="question-button">Ask a super host</button>

      <h1 className="inspiration-title">Inspiration for Future Getaways</h1>
      <div className="destination-spans">
        <span className="destination">Destinations for Arts and Culture</span>
        <span className="destination">Adventurous Escapes</span>
        <span className="destination">Romantic Getaways</span>
        <span className="destination">Family-Friendly Vacations</span>
        <span className="destination">Foodie Experiences</span>
        <span className="destination">Relaxing Retreats</span>
      </div>

      <div className="attraction-container">
        <div className="attractions-row">
          <div className="attraction-item">
            <h3 className="attraction-title">Eiffel Tower</h3>
            <p className="attraction-location">Paris, France</p>
          </div>
          <div className="attraction-item">
            <h3 className="attraction-title">Colosseum</h3>
            <p className="attraction-location">Rome, Italy</p>
          </div>
          <div className="attraction-item">
            <h3 className="attraction-title">Statue of Liberty</h3>
            <p className="attraction-location">New York, USA</p>
          </div>
          <div className="attraction-item">
            <h3 className="attraction-title">Machu Picchu</h3>
            <p className="attraction-location">Cusco, Peru</p>
          </div>
          <div className="attraction-item">
            <h3 className="attraction-title">Great Wall of China</h3>
            <p className="attraction-location">Beijing, China</p>
          </div>
          <div className="attraction-item">
            <h3 className="attraction-title">Sydney Opera House</h3>
            <p className="attraction-location">Sydney, Australia</p>
          </div>
          <div className="attraction-item">
            <h3 className="attraction-title">Taj Mahal</h3>
            <p className="attraction-location">Agra, India</p>
          </div>
          <div className="attraction-item">
            <h3 className="attraction-title">Burj Khalifa</h3>
            <p className="attraction-location">Dubai, UAE</p>
          </div>
          <div className="attraction-item">
            <h3 className="attraction-title">Christ the Redeemer</h3>
            <p className="attraction-location">Rio de Janeiro, Brazil</p>
          </div>
          <div className="attraction-item">
            <h3 className="attraction-title">Santorini</h3>
            <p className="attraction-location">Greece</p>
          </div>
          <div className="attraction-item">
            <h3 className="attraction-title">Grand Canyon</h3>
            <p className="attraction-location">Arizona, USA</p>
          </div>
          <div className="attraction-item">
            <h3 className="attraction-title">Angkor Wat</h3>
            <p className="attraction-location">Siem Reap, Cambodia</p>
          </div>
          <div className="attraction-item">
            <h3 className="attraction-title">Niagara Falls</h3>
            <p className="attraction-location">Ontario, Canada</p>
          </div>
          <div className="attraction-item">
            <h3 className="attraction-title">Sagrada Familia</h3>
            <p className="attraction-location">Barcelona, Spain</p>
          </div>
          <div className="attraction-item">
            <h3 className="attraction-title">Mount Fuji</h3>
            <p className="attraction-location">Japan</p>
          </div>
          <div className="attraction-item">
            <h3 className="attraction-title">Stonehenge</h3>
            <p className="attraction-location">Wiltshire, England</p>
          </div>
        </div>
      </div>

      <footer className="footer">
        <Footer />
      </footer>
    </div>
    </>
  );
};

export default Questions;

