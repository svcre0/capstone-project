import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './header2.css';

const Header2 = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [username, setUsername] = useState(null);  // To store logged-in username
  const navigate = useNavigate();

  // Check if user is logged in when the component is mounted
  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove token from localStorage
    localStorage.removeItem("username"); // Remove username from localStorage
    setUsername(null); // Reset username in the component state
    navigate("/home"); // Redirect to login page
  };

  return (
    <div className="header-top2">
      {/* Wrapping the logo in an anchor tag for redirecting to /home */}
      <a href="/home">
        <img
          src="https://download.logo.wine/logo/Airbnb/Airbnb-Logo.wine.png"
          className="header-logo"
          alt="logo"
        />
      </a>

      <div className="header-text2">
        <p className="active2">Stay</p>
        <p>Experiences</p>
        <p>Online Experiences</p>
      </div>
      <div className="header-links">
        {/* Show logged-in username or 'Hello, User' if not logged in */}
        <p>Hello, {username || "User"}</p>
        <div className="profile-menu-icons">
          <MenuIcon className="menu-icon" />
          <AccountCircleIcon
            className="account-icon"
            onClick={toggleDropdown}
          />
          {isDropdownOpen && (
            <div className="dropdown-menu">
              <ul>
                <li>View Reservations</li>
                {/* Conditionally render the Log Out option */}
                {username && <li onClick={handleLogout}>Log Out</li>}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header2;
