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
    {/* Logo made into link to Landing page */}
      <Link to="/" >
      <img src={Dangologo} alt="DangoDot Logo" className="HomeNav-logo" />
      </Link>
      <p className="HomeNav-text">DangoDot</p>
      </div>
      <nav>
        <ul className="HomeNav-ul">
      {/* Disabled link to Landing  */}
        {/* <li>
          <Link to="/">Landing</Link>
        </li> */}
         <li>
          <Link className = "HomeText" to="/home">Home</Link>
        </li>
        <li>
          <Link to="/login">Log-In/Sign-Up</Link>
        </li>

        {isAuthenticated && (
          <>
        <li>
          <Link className = "SettingsText" to="/settings">Settings</Link>
        </li>
        <li>
          <Link className = "LoginText" to="/login">Login</Link>
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

export default Navbar