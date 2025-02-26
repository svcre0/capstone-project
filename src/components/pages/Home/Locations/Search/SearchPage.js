import React from 'react'; 
import { useLocation, useNavigate } from 'react-router-dom';
import './SearchPage.css';
import Footer from '../../../../layout/Footer/Footer';
import Header2 from '../../../../layout/Header/Header2';

function SearchPage() {
  const location = useLocation();
  const navigate = useNavigate(); // Initialize useNavigate
  
  const queryParams = new URLSearchParams(location.search);
  const selectedLocationId = queryParams.get('location'); // Get the location parameter

  const locations = [
    { _id: 1, name: "Johannesburg", title: "1 Bedroom Apartment", description: "This stylish apartment in Johannesburg...", ratings: 4.5, price: "$80 / night", images: ["https://a0.muscache.com/im/pictures/miso/Hosting-1018813871976866312/original/45f8eaac-bab6-4856-8198-28f5ea88a877.jpeg?im_w=720"] },
    { _id: 2, name: "Durban", title: "Cozy Retreat", description: "This retreat offers mountain views...", ratings: 4.7, price: "$200 / night", images: ["https://a0.muscache.com/im/pictures/aa6f274a-761f-42e7-8c1f-1a6d1a778f5b.jpg?im_w=720"] },
    { _id: 3, name: "Cape Town", title: "Sunny Beach House", description: "Located just steps from Clifton Beach...", ratings: 4.9, price: "$180 / night", images: ["https://a0.muscache.com/im/pictures/miso/Hosting-1099211161787834553/original/9ad5148c-f156-4093-9571-cc8a18048cfb.jpeg?im_w=720&im_format=avif"] },
    { _id: 4, name: "Mpumalanga", title: "Mountain Escape", description: "Enjoy tranquility in Mpumalanga...", ratings: 4.8, price: "$150 / night", images: ["https://a0.muscache.com/im/pictures/miso/Hosting-1249696743221860832/original/e090aa15-b313-4180-a437-5b993a21d81c.jpeg?im_w=720&im_format=avif"] },
  ];

  const filteredLocations = selectedLocationId === 'all' || !selectedLocationId
    ? locations
    : locations.filter(location => location._id.toString() === selectedLocationId);

  // Add the onClick function to handle navigation
  const handleLocationClick = (locationId) => {
    // Navigate to the respective location page dynamically
    navigate(`/location${locationId}`);
  };

  return (
    <>
      <Header2 />
      <div className="searchResults">
        {filteredLocations.map((location) => (
          <div 
            key={location._id} 
            className="searchResult"
            onClick={() => handleLocationClick(location._id)}
            style={{ cursor: 'pointer' }} 
          >
            <img className="searchResult__img" src={location.images[0]} alt={location.name} />
            <div className="searchResult__info">
              <div className="searchResult__infoTop">
                <p className="searchResult__name">{location.name}</p>
                <h3 className="searchResult__title">{location.title}</h3>
                <p className="searchResult__description">{location.description}</p>
              </div>
              <div className="searchResult__infoBottom">
                <div className="searchResult__stars">
                  <p className="searchResult__rating">
                    <strong>{location.ratings}</strong> ★
                  </p>
                </div>
                <div className="searchResult__price">
                  <h2>{location.price}</h2>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}

export default SearchPage;
