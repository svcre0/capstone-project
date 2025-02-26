import React from "react";  
import "./Footer.css";




const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-container">
        <div className="footer-section">
          <h3>About</h3>
          <p>Our Story</p>
          <p>Careers</p>
          <p>Press</p>
          <p>Policies</p>
          <p>Mission</p>
          <p>Investors</p>
        </div>
        <div className="footer-section">
          <h3>Support</h3>
          <p>Contact Us</p>
          <p>Support</p>
          <p>Cancellation Options</p>
          <p>Safety Information</p>
          <p>FAQs</p>
          <p>Accessibility</p>
        </div>
        <div className="footer-section">
          <h3>Community</h3>
          <p>Destinations</p>
          <p>Travel Guides</p>
          <p>Unique Stays</p>
          <p>Airbnb Experiences</p>
          <p>Local Adventures</p>
          <p>Weekend Getaways</p>
        </div>
        <div className="footer-section">
          <h3>Hosting</h3>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
          <p>Cookie Policy</p>
          <p>Company Details</p>
          <p>Intellectual Property</p>
          <p>Dispute Resolution</p>
        </div>
      </div>
      <div className="footer-info">
        <p className='footer-tag'>&copy; 2024 - Airbnb clone</p>
        <div className="social-media">
        
         
       <p> 
       <img src='https://cdn4.iconfinder.com/data/icons/zoldo-miscellaneous-003/64/language_translator_translate_translation-64.png ' alt=" language" className="social-picture"/>
        English (US) </p> 


     
   
 
    <p>  <img src=' https://cdn3.iconfinder.com/data/icons/aami-web-internet/64/aami4-39-64.png ' alt="currency"  className="social-picture"/>  USD </p>


      
         
          <img src='https://cdn3.iconfinder.com/data/icons/picons-social/57/06-facebook-64.png' alt="facebook"/>
          <img src='https://cdn4.iconfinder.com/data/icons/miu-black-social-2/60/twitter-64.png' alt="X"/>
          <img src='https://cdn1.iconfinder.com/data/icons/social-media-circle-7/512/Circled_Instagram_svg-64.png' alt="instagram"/>
      
        </div>
      </div>
    </div>
  );
};

export default Footer;
