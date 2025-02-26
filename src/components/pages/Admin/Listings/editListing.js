import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './CreateListing.css';
import Header2 from '../../../layout/Header/Header2';

const EditListing = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [property, setProperty] = useState({
    title: '',
    location: '',
    description: '',
    companyName: '',
    images: [],
    rooms: '',
    baths: '',
    propertyType: '',
    amenities: [],
  });

  const handleImageChange = (e) => {
    const files = e.target.files;
    const imagesArray = Array.from(files).map((file) => URL.createObjectURL(file));

    // Replace the images array with the newly selected images
    setProperty((prevProperty) => ({
      ...prevProperty,
      images: imagesArray, // Replace the existing images with the new ones
    }));
  };

  useEffect(() => {
    const listings = JSON.parse(localStorage.getItem('listings')) || [];
    const listing = listings.find((listing) => listing.id === parseInt(id));
    if (listing) {
      setProperty(listing);
    } else {
      navigate('/listing'); // Redirect to home if the listing is not found
    }
  }, [id, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProperty({
      ...property,
      [name]: value,
    });
  };

  const handleAmenitiesChange = (e) => {
    const { value } = e.target;
    setProperty((prev) => ({
      ...prev,
      amenities: prev.amenities.includes(value)
        ? prev.amenities.filter((amenity) => amenity !== value)
        : [...prev.amenities, value],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const listings = JSON.parse(localStorage.getItem('listings')) || [];
    const updatedListings = listings.map((listing) =>
      listing.id === parseInt(id) ? { ...listing, ...property } : listing
    );
    localStorage.setItem('listings', JSON.stringify(updatedListings));
    navigate(`/view-listing/${id}`);
  };

  const handleCancel = () => {
    navigate(`/view-listing/${id}`);
  };

  return (
    <>
      <Header2 />
      <div className="property-listing-container">
        <form className="property-listing-form" onSubmit={handleSubmit}>
          <div className="property-listing-input-sections">
            <div className="property-listing-left">
              <div className="property-listing-input-group">
                <label className="property-listing-label" style={{ marginLeft: '26px' }}>
                  Listing Name
                </label>
                <input
                  className="property-listing-input-small"
                  type="text"
                  id="title"
                  name="title"
                  value={property.title}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="property-listing-input-group">
                <label className="property-listing-label" htmlFor="companyName">
                  Address
                </label>
                <input
                  className="property-listing-input-small"
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={property.companyName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="property-listing-input-group">
                <label className="property-listing-label" style={{ marginLeft: '22px' }}>
                  Description
                </label>
                <textarea
                  className="property-listing-textarea"
                  id="description"
                  name="description"
                  value={property.description}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="property-listing-right">
              <div className="property-listing-input-group flex-row">
                <div style={{ marginLeft: '10px', marginTop: '-38px' }}>
                  <label className="property-listing-label" htmlFor="rooms">
                    Beds
                  </label>
                  <input
                    className="property-listing-input-small"
                    type="number"
                    id="rooms"
                    name="rooms"
                    value={property.rooms}
                    onChange={handleChange}
                    required
                    placeholder="Rooms"
                    min="1"
                    max="20"
                  />
                </div>
                <div style={{ marginLeft: '10px', marginTop: '-38px' }}>
                  <label className="property-listing-label">Baths</label>
                  <input
                    className="property-listing-input-small"
                    type="number"
                    id="baths"
                    name="baths"
                    value={property.baths}
                    onChange={handleChange}
                    required
                    placeholder="Baths"
                    min="1"
                    max="20"
                  />
                </div>
                <div style={{ marginTop: '-44px' }}>
                  <label className="property-listing-label" style={{ marginLeft: '44px' }}>
                    Type
                  </label>
                  <select
                    className="property-listing-select-small"
                    id="propertyType"
                    name="propertyType"
                    value={property.propertyType}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Type</option>
                    <option value="Apartment">Apartment</option>
                    <option value="House">House</option>
                    <option value="Condo">Condo</option>
                  </select>
                </div>
              </div>

              <div className="property-listing-input-group" style={{ marginTop: '8px' }}>
                <label className="property-listing-label" style={{ marginLeft: '32px' }}>
                  Location
                </label>
                <select
                  style={{ marginLeft: '22px', marginTop: '8px' }}
                  className="property-listing-select-small"
                  id="location"
                  name="location"
                  value={property.location}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Location</option>
                  <option value="Location 1">jhb</option>
                  <option value="Location 2">pta</option>
                  <option value="Location 3">dbn</option>
                  <option value="Location 4">cpt</option>
                </select>
              </div>

              <div className="property-listing-input-group">
                <label className="property-listing-label-amt">Amenities</label>
                <div className="property-listing-amenities">
                  <label>
                    <input type="checkbox" value="Pool" onChange={handleAmenitiesChange} />
                    Pool
                  </label>
                  <label>
                    <input type="checkbox" value="Gym" onChange={handleAmenitiesChange} />
                    Gym
                  </label>
                  <label>
                    <input type="checkbox" value="Parking" onChange={handleAmenitiesChange} />
                    Parking
                  </label>
                  <label>
                    <input type="checkbox" value="WiFi" onChange={handleAmenitiesChange} />
                    WiFi
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="property-listing-upload-group">
            <label className="property-listing-label" htmlFor="imageUrl">
              Upload Image
            </label>
            <input
              className="property-listing-input"
              type="file"
              id="imageUrl"
              name="imageUrl"
              accept="image/*"
              onChange={handleImageChange}
              multiple
              required
            />
            <div className="uploaded-image-preview">
              {property.images.map((image, index) => (
                <img key={index} src={image} alt={`Uploaded Preview ${index + 1}`} />
              ))}
            </div>
          </div>

          <div className="property-listing-button-group">
            <button type="submit" className="property-listing-button-create">
              Update
            </button>
            <button type="button" className="property-listing-button-cancel" onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditListing;
