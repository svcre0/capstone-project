import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// CSS file import
import './App.css';

// Pages and components import
import Home from './components/pages/Home/HomeDetails/Home';
import EditListing from './components/pages/Admin/Listings/editListing';
import ViewListing from './components/pages/Admin/Listings/ViewListing';
import AdminViewReservation from './components/pages/Admin/Listings/AdminViewReservation';
import CreateListing from './components/pages/Admin/Listings/CreateListing';
import ViewReservation from './components/pages/Home/Reservations/ViewReservation';
import Login from './components/pages/Home/Login/Login';
import LocationOne from './components/pages/Home/Locations/Places/LocationOne';
import LocationTwo from './components/pages/Home/Locations/Places/LocationTwo';
import LocationThree from './components/pages/Home/Locations/Places/LocationThree';
import LocationFour from './components/pages/Home/Locations/Places/LocationFour';
import ErrorScreen from './components/layout/Notfound/ErrorScreen';
import SearchPage from './components/pages/Home/Locations/Search/SearchPage';


const App = () => {
  // Default to "All Locations"
  const [selectedLocation] = useState("1");

  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Home Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />

          {/* Admin Routes */}
          <Route path="/listing" element={<CreateListing />} />
          <Route path="/view-listing/:id" element={<ViewListing />} />
          <Route path="/edit-listing/:id" element={<EditListing />} />
          <Route path="/admin/view-listing" element={<AdminViewReservation />} />
          
          {/* Location Routes */}
          <Route path="/location1" element={<LocationOne />} />
          <Route path="/location2" element={<LocationTwo />} />
          <Route path="/location3" element={<LocationThree />} />
          <Route path="/location4" element={<LocationFour />} />
          
      
          
          {/* Reservation Routes */}
          <Route path="/view-reservation" element={<ViewReservation />} />
          
          {/* Search Routes */}
          <Route path="/search" element={<SearchPage selectedLocation={selectedLocation} />} />
          
          
          {/* Catch-all route for undefined paths */}
          <Route path="*" element={<ErrorScreen />} />

          
        </Routes>
      </Router>
    </div>
  );
};

export default App;
