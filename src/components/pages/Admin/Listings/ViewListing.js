import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './viewListing.css';
import Header2 from '../../../layout/Header/Header2';

const ViewListing = () => {
  const [listings, setListings] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedListings = JSON.parse(localStorage.getItem('listings')) || [];
    setListings(storedListings);
  }, []);

  const handleDelete = (id) => {
    const updatedListings = listings.filter(listing => listing.id !== id);
    setListings(updatedListings);
    localStorage.setItem('listings', JSON.stringify(updatedListings));
  };

  // Button click handler to redirect to the '/listing' page
  const handleRedirect = () => {
    navigate('/listing');
  };

  return (
    <>
      <Header2 />
      {listings.length > 0 && (
        <button className="view-listing" onClick={() => navigate('/listing')}>
        Create Listing 
        </button>
      )}
      <div className="property-listing-container">
        <h1>Listings</h1>
        <div className="property-listings">
          {listings.length > 0 ? (
            listings.map((listing) => (
              <div key={listing.id} className="property-listing-card">
                <img src={listing.images[0]} alt="Listing" className="property-listing-image" />
                <div className="property-listing-details">
                  <h3 className="property-listing-name">{listing.title}</h3>
                  <p className="property-listing-description">{listing.description}</p>
                </div>

                <div className="button-container">
                  <Link to={`/edit-listing/${listing.id}`} className="edit-link">
                    <button className="update-button">Update</button>
                  </Link>
                  <button onClick={() => handleDelete(listing.id)} className="delete-button">Delete</button>
                </div>
              </div>
            ))
          ) : (
            <div className="no-listings">
              <p>No listings available. Click below to add a listing.</p>
              <button onClick={handleRedirect} className="redirect-button">
                Go to Listings Page
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ViewListing;
