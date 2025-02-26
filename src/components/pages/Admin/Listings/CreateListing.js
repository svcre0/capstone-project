import React, { useState } from 'react';
import './CreateListing.css';
import Header2 from '../../../layout/Header/Header2';
import { useNavigate } from 'react-router-dom';

const CreateListing = () => {
  const navigate = useNavigate();
  const [property, setProperty] = useState({
    id: Date.now(),
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

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files).slice(0, 5);
    const newImages = files.map(file => URL.createObjectURL(file));
    setProperty({ ...property, images: newImages });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedListings = JSON.parse(localStorage.getItem('listings')) || [];
    storedListings.push(property);
    localStorage.setItem('listings', JSON.stringify(storedListings));

    // Show the success alert before redirecting
    alert('Listing created successfully!');

    // Navigate to the new listing page
    navigate('/view-listing/' + property.id);
  };

  const handleCancel = () => {
    setProperty({
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
    navigate('/listing');
  };

  return (
    <>
      <Header2 />
      <button className="view-listing" onClick={() => navigate('/view-listing/' + property.id)}>
        View Listing
      </button>

      <button className="view-listing" onClick={() => navigate('/admin/view-listing')}>
       Reservations
      </button>

      <div className="property-listing-container">
        <h1 className="property-listing-title">Create Property Listing</h1>
        <form className="property-listing-form" onSubmit={handleSubmit}>
          <div className="property-listing-input-sections">
            <div className="property-listing-left">
              <div className="property-listing-input-group">
                <label className="property-listing-label" style={{ marginLeft: '26px' }}>Listing Name</label>
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
                <label className="property-listing-label" htmlFor="companyName">Address</label>
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
                <label className="property-listing-label" style={{ marginLeft: '22px' }}>Description</label>
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
                  <label className="property-listing-label" htmlFor="rooms">Beds</label>
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
                  <label className="property-listing-label" style={{ marginLeft: '44px' }}>Type</label>
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
                <label className="property-listing-label" style={{ marginLeft: '32px' }}>Location</label>
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
            <label className="property-listing-label" htmlFor="imageUrl">Upload Image</label>
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
            <button type="submit" className="property-listing-button-create">Create</button>
            <button type="button" className="property-listing-button-cancel" onClick={handleCancel}>Cancel</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateListing;
