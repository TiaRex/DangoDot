import { Link } from "react-router-dom";
import React from 'react'
import ImageCarousel from "../components/ImageCarousel";
import "../styles/Landing.css"
// picture/images imports here
// Update pictures by adding import and update src link under img

// Landing Page Body Images
import LandingPic1 from "../assets/landingpagepic1@2x.png"
import LandingPic2 from "../assets/landingpagepic2@2x.png"
import DisappearingDangos from "../assets/DisappearingDangos.png"

// Subscription Feature Image
import FeatureIcon from "../assets/dangologo@2x.png"

// Navigation Footer Images
// import FacebookIcon from "../assets/facebookicon.svg"
// import RedditIcon from "../assets/redditicon.svg"
// import YouTubeIcon from "../assets/youtubeicon.svg"
// import InstagramIcon from "../assets/instagramicon.svg"
// import XIcon from "../assets/xicon.png"
// import TikTokIcon from "../assets/tiktokicon.png"

// copy and past html code within return
const Landing = () => {
  return (
  <>
    <div className="landing-page-body">
      <section className="landing-page-body-inner">
        <div className="feature-grid-parent">
          <div className="feature-grid">
            <div className="landingpageintro">
              <div className="begin-your-anime-journey-here-parent">
                <h1 className="begin-your-anime">Begin Your Anime Journey Here</h1>
                <div className="media-platform-for">
                  Media Platform for Anime Enthusiasts
                </div>
                  <div className="button-wrapper">
                  <Link className = "logintext" to="/login">
                  <button className="button">
                  <div className="sign-up">
                      Click Here to Sign Up Today
                    </div>
                  </button>
                  </Link>
                  </div>
              </div>
            </div>
            <div className="sitefeaturecontent1-parent">
              <div className="sitefeaturecontent1">
                <div className="heading-parent">
                  <h2 className="heading">Binge-Worthy Anime Adventures Await!</h2>
                  <div className="a-subheading-for">
                    A subheading for this section, as long or as short as you
                    like
                  </div>
                </div>
              </div>
              <img
                className="landingpagepic1-icon"
                loading="lazy"
                alt="Zoro with sword in mouth"
                src={LandingPic1}
              />
            </div>
          </div>
          
          <div className="landingpagepic2-parent">
            <img
              className="landingpagepic2-icon"
              loading="lazy"
              alt="Happy flying with Natsu"
              src={LandingPic2}
            />

            <div className="sitefeaturecontent2-wrapper">
              <div className="sitefeaturecontent2">
                <h2 className="heading1">From Classics to New Releases: Dive into Anime Bliss</h2>
                <div className="another-subheadingmaybe-its">
                  Explore a vast anime library and dive into an extensive collection of series and movies, 
                  from classics to the latest releases.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="subfeaturecontent-wrapper">
        
        <div className="subfeaturecontent">
          <h2 className="subfeatheading">Subscription Features</h2>
          
          <div className="subfeaturedescriptions">
            
            <div className="subfeaturerow1">
              <div className="subfeaturebox1">
                <img
                  className="feature-icon-one"
                  loading="lazy"
                  alt="mini dangodot logo"
                  src={FeatureIcon}
                />
                <div className="feature-1">Your Own Personal Anime Queue</div>
                <div className="body-text-for">
                  Curate your watchlist, save favorites, and never miss an episode!
                </div>
              </div>

              <div className="subfeaturebox2">
                <img className="feature-icon-two" 
                      alt="mini dangodot logo" 
                      src={FeatureIcon} />
                <div className="feature-2">Weekly Spotlight</div>
                <div className="body-text-for1">
                  Discover hidden gems and trending anime picks highlighted every week.
                </div>
              </div>
            </div>

            <div className="subfeaturerow2">
              <div className="subfeaturebox3">

                <img className="feature-icon-three" 
                      alt="mini dangodot logo" 
                      src={FeatureIcon} />
                      

                <div className="feature-3">Ad-Free Bliss</div>

                <div className="body-text-for2">
                 Say goodbye to interruptions and immerse yourself streaming.
                </div>

              </div>
              
              <div className="subfeaturebox4">

                <img className="feature-icon-four" 
                      alt="mini dangodot logo" 
                      src={FeatureIcon} />

                <div className="feature-4">Offline Viewing</div>

                <div className="body-text-for3">
                Download episodes and watch them offline anytime, anywhere.
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>
      
      {/* To add image Carousel starting here*/}
      
      <section className="subplanssection">
        <div className="animeimagecarousel">

        <ImageCarousel></ImageCarousel>


          {/* <div className="subplanheader">
            <div className="pick-your-plan-parent">
              <h2 className="pick-your-plan">Pick Your Plan</h2>
              <div className="subscription-options-for">
                Subscription Options for Every Anime Enthusiast
              </div>
            </div>
          </div>
          <div className="subplangrid">
            <div className="planfeat1">
              <div className="feature-11">Feature 1</div>
              <div className="body-text-for4">
                Body text for whatever you’d like to say. Add main takeaway
                points, quotes, anecdotes, or even a very very short story.
              </div>
              <div className="subplanfeature1description2">
                <div className="feature-21">Feature 2</div>
                <div className="body-text-for-whatever-youd-l-wrapper">
                  <div className="body-text-for5">
                    Body text for whatever you’d like to claim. Add main
                    takeaway points, quotes, anecdotes, or even a very very
                    short story.
                  </div>
                </div>
              </div>
              <div className="subplanfeature1clickbutton">
                <button className="button1">
                  <b className="click-here">Click Here</b>
                </button>
              </div>
            </div>
            <div className="plan-highlight">
              <img
                className="disappearingdango-icon"
                loading="lazy"
                alt="2 Dangos Surrounded by Stars"
                src={DisappearingDangos}
              />

              <div className="highlight-content">
                <div className="planfeat2">
                  <div className="subplanfeature2description1">
                    <div className="feature-1-wrapper">
                      <div className="feature-12">Feature 1</div>
                    </div>
                    <div className="body-text-for6">
                      Body text for whatever you’d like to claim. Add main
                      takeaway points, quotes, anecdotes, or even a very very
                      short story.
                    </div>
                  </div>
                  <div className="subplanfeature2description2">
                    <div className="feature-22">Feature 2</div>
                    <div className="body-text-for7">
                      Body text for whatever you’d like to claim. Add main
                      takeaway points, quotes, anecdotes, or even a very very
                      short story.
                    </div>
                  </div>
                  <div className="subplanfeature2clickbutton">
                    <button className="button2">
                      <b className="click-here1">Click Here</b>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="planfeat3">
              <div className="frame-parent">
                <div className="feature-1-container">
                  <div className="feature-13">Feature 1</div>
                </div>
                <div className="body-text-for8">
                  Body text for whatever you’d like to say. Add main takeaway
                  points, quotes, anecdotes, or even a very very short story.
                </div>
              </div>
              <div className="frame-group">
                <div className="feature-2-wrapper">
                  <div className="feature-23">Feature 2</div>
                </div>
                <div className="body-text-for9">
                  Body text for whatever you’d like to claim. Add main takeaway
                  points, quotes, anecdotes, or even a very very short story.
                </div>
              </div>
              <div className="button-container">
                <button className="button3">
                  <b className="click-here2">Click Here</b>
                </button>
              </div>
            </div>
          </div> */}
        </div>
      </section>
      {/* To add image Carousel here ending here*/}
      
  
   {/* Navigation Footer Component */}
      {/* <footer className="navigation-footer">
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
      </footer> */}
    </div>
      </>
)}

export default Landing