import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Search.css';

const Search = () => {
  const [locations, setLocations] = useState([]); // State for storing locations

  // Fetch data from the backend using axios
  const fetchLocations = async () => {
    try {
      const response = await axios.get('http://localhost:5000/locations');
      setLocations(response.data); // Update state with fetched data
    } catch (error) {
      console.error('Error fetching locations:', error);
    }
  };

  // Fetch data when the component mounts
  useEffect(() => {
    fetchLocations();
  }, []);

  return (
    <div className="searchResults">
      {locations.length > 0 ? (
        locations.map((location) => (
          <div key={location._id} className="searchResult">
          
            <img
              src={location.images && location.images.length > 0 ? location.images[0] : 'default_image_url'}
              alt={`image-${location._id}`}
            />
            <div className="searchResult__info">
              <div className="searchResult__infoTop">
                <p>{location.name}</p>
                <h3>{location.title}</h3>
                <p>____________________________</p>
                <p>{location.description}</p>
              </div>
              <div className="searchResult__infoBottom">
                <div className="searchResult__stars">
                  <p>{location.ratings} ⭐</p>
                </div>
                <div className="searchResult__price">
                  <h2>{location.price}</h2>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No locations found</p>
      )}
    </div>
  );
};

export default Search;
