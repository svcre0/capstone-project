import React from 'react'; 
import './locationDetails.css';

// Utility function to generate random date
const randomDate = () => {
  const start = new Date(2020, 0, 1); // Starting date: Jan 1, 2020
  const end = new Date(); // Today's date
  const diff = end.getTime() - start.getTime();
  const rand = Math.floor(Math.random() * diff);
  const randomDate = new Date(start.getTime() + rand);
  return randomDate.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
};

// Array of names and Airbnb testimonies
const names = ["Sarah", "Celia", "Romeo", "David", "Joseph", "Lisa"];
const testimonies = [
  "The place was exactly as described, and the host was always quick to respond to any questions I had. Great experience!",
  "Couldn’t have asked for a better location, and the apartment was spotless. Really enjoyed our stay!",
  "Such an amazing stay! Everything exceeded our expectations—definitely a highlight of the trip.",
  "A very cozy and inviting space. I felt right at home and would happily return in the future.",
  "Perfect spot in the city, and the host made check-in and everything else a breeze. Highly recommend staying here!",
  "The apartment had everything we could possibly need and even some extras. Truly a home away from home!"
];

// URLs for the profile pictures
const profilePics = [
  "https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ=",
  "https://media.istockphoto.com/id/1326417862/photo/young-woman-laughing-while-relaxing-at-home.jpg?s=612x612&w=0&k=20&c=cd8e6RBGOe4b8a8vTcKW0Jo9JONv1bKSMTKcxaCra8c=",
  "https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D",
  "https://i.pinimg.com/236x/e6/21/9b/e6219b93a72b6376e381a454cf366df9.jpg",
  "https://thumbs.wbm.im/pw/small/8f8065ce7dfb5bffc202ca258dade123.jpg",
"https://img.freepik.com/free-photo/glad-pretty-woman-with-curly-pony-tail-has-charming-smile-wears-striped-sweater-poses_273609-8851.jpg?semt=ais_hybrid"
];

const Reviews = () => {
  return (
    <>
      <div className="reviews">
        <div className="left-section">
          <span>
            <p>Cleanliness</p>
            <img className="stats" src="/Assets/IMG_3478.jpg" alt="Airbnb stats" />
            <h6>5.0</h6>
          </span>
          <span>
            <p>Communication</p>
            <img className="stats" src="/Assets/IMG_3478.jpg" alt="Airbnb stats" />
            <h6>5.0</h6>
          </span>
          <span>
            <p>Check-in</p>
            <img className="stats" src="/Assets/IMG_3478.jpg" alt="Airbnb stats" />
            <h6>5.0</h6>
          </span>
        </div>

        <div className="right-section1">
          <span>
            <p>Accuracy</p>
            <img className="stats" src="/Assets/IMG_3479.jpg" alt="Airbnb stats" />
            <h6>4.0</h6>
          </span>
          <span>
            <p>Location</p>
            <img className="stats" src="/Assets/IMG_3480.jpg" alt="Airbnb stats" />
            <h6>4.8</h6>
          </span>
          <span>
            <p>Value</p>
            <img className="stats" src="/Assets/IMG_3480.jpg" alt="Airbnb stats" />
            <h6>4.8</h6>
          </span>
        </div>
      </div>

      <div className="testimonies">
        <div className="left-testimonies">
          {testimonies.slice(0, 3).map((testimonial, index) => (
            <div key={index}>
              <img
                className="profile-pic"
                src={profilePics[index % profilePics.length]} // Cycle through profile pictures
                alt="Profile"
              />
              <h4>{names[index % names.length]}</h4>
              <p>{randomDate()}</p>
              <h3>{testimonial}</h3>
            </div>
          ))}
        </div>

        <div className="right-testimonies">
          {testimonies.slice(3).map((testimonial, index) => (
            <div key={index}>
              <img
                className="profile-pic"
                src={profilePics[(index + 3) % profilePics.length]} // Cycle through profile pictures
                alt="Profile"
              />
              <h4>{names[(index + 3) % names.length]}</h4>
              <p>{randomDate()}</p>
              <h3>{testimonial}</h3>
            </div>
          ))}
        </div>
      </div>

      <button className="reviews-btn">Show all 12 reviews</button>
    </>
  );
};

export default Reviews;
