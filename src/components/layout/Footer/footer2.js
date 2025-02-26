import React from 'react';
import './footer2.css';

const Footer2 = () => {
  return (
    <>
      <div className="second-footer">
        <div className="footer-info">
          <p  >&copy; Airbnb clone </p>
          
          <div className="social-media">
            <p>
              <img
                src="https://cdn4.iconfinder.com/data/icons/zoldo-miscellaneous-003/64/language_translator_translate_translation-64.png"
                alt="language"
                className="social-picture"
              />
              English (US)
            </p>

            <p>
              <img
                src="https://cdn3.iconfinder.com/data/icons/aami-web-internet/64/aami4-39-64.png"
                alt="currency"
                className="social-picture"
              />
              USD
            </p>

            <img
              src="https://cdn3.iconfinder.com/data/icons/picons-social/57/06-facebook-64.png"
              alt="facebook"
            />
            <img
              src="https://cdn4.iconfinder.com/data/icons/miu-black-social-2/60/twitter-64.png"
              alt="X"
            />
            <img
              src="https://cdn1.iconfinder.com/data/icons/social-media-circle-7/512/Circled_Instagram_svg-64.png"
              alt="instagram"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer2;

