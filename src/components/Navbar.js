import { Link } from "react-router-dom";
import Dangologo from '../assets/Dangologo.png';
import '../styles/navbar.css';

const Navbar = () => {
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
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/watchlist">Watchlist</Link>
        </li>
        <li>
          <Link to="/player">Video Player</Link>
        </li>
        <li>
          <Link to="/settings">Settings</Link>
        </li>
        <button className="search-bar button">
            <input type="text" placeholder="Search..." className="search-bar"/>
        </button>
        </ul>
      </nav>
    </header>
    </div>
  
  );
}

export default Navbar