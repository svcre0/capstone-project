import React from 'react';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import PetsIcon from '@mui/icons-material/Pets';
import AirIcon from '@mui/icons-material/Air';
import CelebrationIcon from '@mui/icons-material/Celebration';
import VapingRoomsIcon from '@mui/icons-material/VapingRooms';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

import './locationDetails.css';

const HouseRules = () => {
  return (
    <>
      <div className="sections-container2">
        {/* Left Section for House Rules */}
        <div className="left-section-area2">
          <h4>House Rules</h4>
          <span><AccessTimeIcon /> <p>Check-in: after 4:00 PM</p></span>
          <span><AccessTimeFilledIcon /> <p>Check-out: 10:00 AM</p></span>
          <span><PetsIcon /> <p>No pets allowed</p></span>
          <span><VapingRoomsIcon /> <p>No smoking</p></span>
        </div>

        {/* Right Section for Health and Safety */}
        <div className="right-section-area2">
          <h4>Health and Safety</h4>
          <span><CelebrationIcon /> <p>No parties or events</p></span>
          <span>
            <AutoAwesomeIcon />
            <p>Enhanced cleaning process...</p>
            <p className="show-more">Show more</p>
          </span>
          <span><AirIcon /> <p>Carbon monoxide alarm</p></span>
          <span><NotificationsActiveIcon /> <p>Smoke alarm</p></span>
        </div>

        {/* Right Section for Cancellation Policy */}
        <div className="right-section-area2">
          <h4 className="cancellation-policy">Cancellation policy</h4>
          <span><p>Free cancellation before 14 Feb</p></span>
          <span><p className="show-more">Show more</p></span>
        </div>
      </div>
    </>
  );
};

export default HouseRules;
