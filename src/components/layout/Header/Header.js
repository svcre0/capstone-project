import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import "./Header.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Header = () => {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [guestCount, setGuestCount] = useState(1);
  const [showGuestPopup, setShowGuestPopup] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const popupRef = useRef(null);
  const navigate = useNavigate();

  const locations = [
    { _id: 1, name: "Johannesburg", link: "/search?location=2" },
    { _id: 2, name: "Durban", link: "/search?location=3" },
    { _id: 3, name: "Cape Town", link: "/search?location=4" },
    { _id: 4, name: "Mpumalanga", link: "/search?location=5" },
    { _id: 5, name: "All Locations", link: "/search" },
  ];

  // Handle location change
  const handleLocationChange = (event) => {
    const locationId = event.target.value;
    if (locationId === "all") {
      navigate("/search");
    } else {
      navigate(`/search?location=${locationId}`);
    }
  };

  const handleGuestChange = (operation) => {
    setGuestCount((prevCount) => {
      const newCount =
        operation === "increment" ? prevCount + 1 : prevCount - 1;
      return Math.max(1, Math.min(20, newCount));
    });
  };

  useEffect(() => {
    if (showGuestPopup) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showGuestPopup]);

  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      setShowGuestPopup(false);
    }
  };

  // Handle profile menu toggle
  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username"); // Clear username on logout
    navigate("/login");
  };

  // Check if the user is logged in
  const isLoggedIn = !!localStorage.getItem("token");

  // Handle reservation access
  const handleReservationAccess = () => {
    if (!isLoggedIn) {
      alert("Please log in to view your reservations.");
      navigate("/login");
    }
  };

  return (
    <div className="header">
      <div className="top-header">
        <img src="/Assets/logo.PNG" className="header-logo" alt="logo" />
        <div className="header-text">
          <p className="active">Place to stay</p>
          <p>Experiences</p>
          <p>Online Experiences</p>
        </div>
        <div className="header-links">
          <Link to="/login" className="host-link">Become a host</Link>
          <LanguageIcon className="language-icon" />
          <div className="profile-menu-icons">
            <MenuIcon className="menu-icon" />
            <div className="account-icon" onClick={toggleDropdown}>
              <AccountCircleIcon />
              {isDropdownOpen && (
                <div className="dropdown-menu">
                  <ul>
                    <li>
                      {/* Conditionally handle view reservation access */}
                      <Link to="/view-reservation" onClick={handleReservationAccess}>View Reservations</Link>
                    </li>
                    {/* Conditionally render Login if the user is not logged in */}
                    {!isLoggedIn && <li><Link to="/login">Login</Link></li>}
                    {/* Conditionally render Log Out if the user is logged in */}
                    {isLoggedIn && <li onClick={handleLogout}>Log Out</li>}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="header-bottom">
        <div className="header-search">
          <div className="search-where">
            <p>Where</p>
            <div className="search-input">
              <select onChange={handleLocationChange}>
                <option value="" disabled selected className="selection">
                  Select Location
                </option>
                {locations.map((location) => (
                  <option value={location._id === 5 ? "all" : location._id} key={location._id}>
                    {location.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="search-checkin">
            <p>Check In</p>
            <DatePicker selected={checkInDate} onChange={(date) => setCheckInDate(date)} placeholderText="Add dates" className="date-picker" />
          </div>
          <div className="search-checkout">
            <p>Check Out</p>
            <DatePicker selected={checkOutDate} onChange={(date) => setCheckOutDate(date)} placeholderText="Add dates" className="date-picker" />
          </div>
          <div className="search-who">
            <p>Guests</p>
            <button className="search-button" onClick={() => setShowGuestPopup(true)}>Add guests</button>
            {showGuestPopup && (
              <div className="guest-popup" ref={popupRef}>
                <div className="guest-selector">
                  <button className="guest-button" onClick={() => handleGuestChange("decrement")}>
                    <RemoveIcon />
                  </button>
                  <input type="number" value={guestCount} readOnly className="guest-input" />
                  <button className="guest-button" onClick={() => handleGuestChange("increment")}>
                    <AddIcon />
                  </button>
                </div>
              </div>
            )}
          </div>
          <SearchIcon className="search-icon" />
        </div>
      </div>
    </div>
  );
};

export default Header;
