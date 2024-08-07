import { Link } from "react-router-dom";
import '../styles/navbar.css';
import DangoDotLogo from '../assets/dangologo@2x.png'; 
const LandingNavbar = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
      
      <div className="landing-page-liz">
        <header className="navigationheader">
          <div className="dangodotlogobox-parent">
            <div className="dangodotlogobox"></div>
            <div className="dangologo-wrapper">
              
              <img
                className="dangologo-icon"
                alt="DangoDot Logo Icon"
                src={DangoDotLogo}
              />
                <div className="dangodot">DangoDot</div>
            </div>
           
          </div>

          <div className="loginsignupbutton-wrapper">
            <button className="loginsignupbutton" id="logInSignUpButton">
              <div className="loginsignup">Log-In/Sign-Up</div>
            </button>
          </div>
        </header>
      </div>
    </>
  );
};

export default LandingNavbar;