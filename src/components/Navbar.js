import { Link } from "react-router-dom"; 
import Dangologo from '../assets/Dangologo.png';
import '../styles/navbar.css';

const Navbar = () => {
  const isAuthenticated = !!localStorage.getItem('token');
  

  const logout = () => {
    localStorage.removeItem('token'); // Remove the token from local storage
    window.location.href= '/login'; // Redirect user to login-signup page once logged out
  };
  

  return (
    <div className="HomeNav">
    <header className="HomeNav-header">
      <div className="HomeNav-logo-text">
      <img src={Dangologo} alt="Dango Logo" className="HomeNav-logo" />
      <p className="HomeNav-text">DangoDot</p>
      </div>
      <nav>
        <ul className="HomeNav-ul">
        <li>
          <Link to="/">Landing</Link>
        </li>
        <li>
          <Link to="/login">Log-In/Sign-Up</Link>
        </li>
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
        <li>
            <input type="text" placeholder="Search..." className="search-bar"/>
        </li>
        </>
        )}
        </ul>
      </nav>
    </header>
    </div>
  
  );
}

export default Navbar