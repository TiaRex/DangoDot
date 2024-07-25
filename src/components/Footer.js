import '../styles/navbar.css';
// Navigation Footer Images
import FacebookIcon from "../assets/facebookicon.svg"
import RedditIcon from "../assets/redditicon.svg"
import YouTubeIcon from "../assets/youtubeicon.svg"
import InstagramIcon from "../assets/instagramicon.svg"
import XIcon from "../assets/xicon.png"
import TikTokIcon from "../assets/tiktokicon.png"

const Footer = () => {
  return (
    <footer>
  <footer className="navigation-footer">
        <div className="divider"></div>
        <div className="footer-content">
          <div className="social">
            <div className="connect-with-us">Connect With Us</div>
            
            <div className="social-icons">
              <img
                className="facebook-icon"
                loading="lazy"
                alt="Facebook Logo Icon"
                src={FacebookIcon}
              />

              <img
                className="reddit-icon"
                loading="lazy"
                alt="Reddit Logo Icon"
                src={RedditIcon}
              />

              <img
                className="youtube-icon"
                loading="lazy"
                alt="YouTube Logo Icon"
                src={YouTubeIcon}
              />

              <img
                className="instagram-icon"
                loading="lazy"
                alt="Instagram Logo Icon"
                src={InstagramIcon}
              />

              <img
                className="X-icon"
                loading="lazy"
                alt="X Logo Icon"
                src={XIcon}
              />

              <img
                className="tik-tok-icon"
                loading="lazy"
                alt="Tik-tok Logo Icon"
                src={TikTokIcon}
              />
            </div>

            <div className="dangodot-copyright"> &copy; 2024 DangoDot Anime App</div>

          </div>
          <div className="footer-links">
            <div className="link-list-parent">
              <div className="link-list">
                <div className="about">About</div>
                <div className="privacy-policy">Privacy Policy</div>
                <div className="contact-us">Contact Us</div>
              </div>
              <div className="link-list1">
                <div className="careers">Careers</div>
                <div className="help-center">Help Center</div>
                <div className="media-center">Media Center</div>
              </div>
              <div className="link-list2">
                <div className="cookie-preferences">Cookie Preferences</div>
                <div className="ad-choices">Ad Choices</div>
                <div className="terms-of-use">Terms of Use</div>
              </div>
            </div>
          </div>
        </div>
      </footer>
  </footer>
  );
}

export default Footer;
