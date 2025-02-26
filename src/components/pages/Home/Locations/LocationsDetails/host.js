import React from 'react';
import './locationDetails.css';
import StarIcon from '@mui/icons-material/Star';
import VerifiedIcon from '@mui/icons-material/Verified';
import TimerIcon from '@mui/icons-material/Timer';
import SecurityTwoToneIcon from '@mui/icons-material/SecurityTwoTone';

const Host = () => {
  return (
    <>
      <div className="host">
        <img
          className="profile-pic"
          src="https://c.stocksy.com/a/UMV200/z9/597214.jpg"
          alt="Airbnb stats"
        />
        <div className="host-content">
          <h3>Hosted by Rose</h3>
          <p>Joined December 2022</p>
          <span className="content-span">
            <p><StarIcon /> 12 Reviews <VerifiedIcon /> Identity verified <TimerIcon /> Superhost</p>
          </span>
          <h4>Rose is a Superhost</h4>
          <p>Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.</p>
          <p>Response rate: 100%</p>
          <p>Response time: within an hour</p>
          <button className="reviews-btn">Contact Host</button>
          <p className="security-info">
            <SecurityTwoToneIcon />
            Protect your payments. Never transfer money or communicate outside the Airbnb website or app.
          </p>
        </div>
      </div>
    </>
  );
};

export default Host;

