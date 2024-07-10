import { Link } from "react-router-dom";
import '../styles/navbar.css';

const LandingNavbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
}

export default LandingNavbar