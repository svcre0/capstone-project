import React, { useEffect, useState } from 'react';
import './ViewReservation.css';
import { useNavigate } from 'react-router-dom';
import Header2 from '../../../layout/Header/Header2';
import Button from '@mui/material/Button';

const ViewReservation = () => {
  const [reservation, setReservation] = useState(null);
  const navigate = useNavigate();

  // Load reservation from localStorage
  useEffect(() => {
    const storedReservation = JSON.parse(localStorage.getItem('reservation'));
    if (storedReservation) {
      setReservation(storedReservation);
    } else {
      // If no reservation exists, redirect to the home page or location details
      navigate('/search');
    }
  }, [navigate]);

  // Handle reservation cancellation
  const handleCancel = () => {
    // Remove the reservation from localStorage
    localStorage.removeItem('reservation');
    // Redirect to the homepage or any other page
    navigate('/search');
  };

  // Handle redirect to search page
  const handleRedirectToSearch = () => {
    navigate('/search');
  };

  // Render the reservation table
  const renderReservationTable = () => {
    if (reservation) {
      return (
        <table className="reservation-table">
          <thead>
            <tr>
              <th>Check-In Date</th>
              <th>Check-Out Date</th>
              <th>Guest Count</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{new Date(reservation.checkIn).toLocaleDateString()}</td>
              <td>{new Date(reservation.checkOut).toLocaleDateString()}</td>
              <td>{reservation.guestCount}</td>
            </tr>
          </tbody>
        </table>
      );
    } else {
      return <p>No reservation found</p>;
    }
  };

  return (
    <div>
      <Header2 />
      <div className="view-reservation">
        <h1>View Your Reservation</h1>
        {renderReservationTable()}

        {/* If no reservation is found, show the redirect button */}
        {!reservation && (
          <div className="redirect-to-search">
            <Button 
              variant="contained" 
              color="primary" 
              onClick={handleRedirectToSearch}
              className="redirect-btn"
            >
              Search for Reservations
            </Button>
          </div>
        )}

        <div className="cancel-reservation">
          <Button 
            variant="contained" 
            color="error" 
            onClick={handleCancel}
            className="cancel-btn"
          >
            Cancel Reservation
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ViewReservation;
