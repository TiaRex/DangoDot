import React from "react";
import { Link } from "react-router-dom";
import Dangologo from '../assets/Dangologo.png';
import '../styles/navbar.css';

const Navbar = ({isAuthenticated}) => {
  const logout = () => {
    localStorage.removeItem('token'); // Remove the token from local storage
    window.location.href = '/login'; // Redirect user to login-signup page once logged out
  };

  return (
    <div className="HomeNav">
      <header className="HomeNav-header">
          {/* Logo made into link to Landing page */}
          {/* included text to be linked to landing page */}
        <Link to="/" className="HomeNav-logo-text no-underline">
          <img src={Dangologo} alt="Dango Logo" className="HomeNav-logo"/>
          <p className="HomeNav-text">DangoDot</p>
        </Link>
        <nav>
          <ul className="HomeNav-ul">
            {/* if user is not authenticated then the are able to see this button if they are button is hidden due to !isAuthenticated */}
            {!isAuthenticated &&(
            <li>
              <Link to="/login">Log-In/Sign-Up</Link>
            </li>
            )}

            {/* if user is authenticated then the are able to see these buttons  due to isAuthenticated */}
            {isAuthenticated && (
              <>
                <li>
                  <Link to="/home">Home</Link>
                </li>
                <li>
                  <Link to="/watchlist">Watchlist</Link>
                </li>
                <li>
                  <Link to="/settings">Settings</Link>
                </li>
                <li>
                  <button onClick={logout} className="logout-button">Logout</button>
                </li>
              </>
            )}
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
