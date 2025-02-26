import React from "react";
import "./HomeCards.css";

const locations = [
  { location: "Sandton sun & Towers Johannesburg", distance: "20km", image: "https://lh3.googleusercontent.com/p/AF1QipOyOyA6ZYqQwgBtSuooPATupCdINJCIVieRreu7=s680-w680-h510", color: "#fd8082" },
  { location: "Stay Apartments Menlyn maine Pretoria", distance: "65km", image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/492200689.jpg?k=81c7770bb790c0ae74b555044087ee6d8f707d3491726c93903b421527ebdd07&o=&hp=1", color: " #1f4270" },
  { location: "Hollywood Mansion Camps Bay Cape Town", distance: "600km", image: "https://lh3.googleusercontent.com/p/AF1QipNvXDr7oma2EdtyumT9Efakf32kEd-UBhxn9N8C=s680-w680-h510", color: " #7e3333" },
  { location: "Blue Waters Hotel golden mile Durban", distance: "400km", image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/233371734.jpg?k=6947fb9d8cb5304aab445c8041c30c8296c2df5be70db8aed6634c292064bc63&o=&hp=1", color: " #1f7041" },
];

const HomeCards = () => {
  return (
    <div className="HomeCards">
      <p className="Inspiration">Inspiration for your next trip</p>
      <div className="card-container">
        {locations.map((location, index) => (
          <div className="card" key={index} style={{ backgroundColor: location.color }}>
            <img src={location.image} alt={location.location} className="card-image" />
            <div className="card-details">
              <h3>{location.location}</h3>
              <p>{location.distance}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeCards;
