import React from 'react'
import Navbar from '../components/Navbar';
import "../styles/Landing.css"
import LandingPic1 from "../assets/landingpagepic1@2x.png"
// copy and past html code within return

const Landing = () => {
  return (
  <>
  <Navbar></Navbar>
    <div className="landing-page-liz">
      <header className="navigationheader">
        <div className="dangodotlogobox-parent">
          <div className="dangodotlogobox"></div>
          <div className="dangologo-wrapper">
            <img
              className="dangologo-icon"
              loading="lazy"
              alt="DangoDot Logo Icon"
              src="./public/dangologo@2x.png"
            />
          </div>
          <div className="dangodot">DangoDot</div>
        </div>
        <div className="loginsignupbutton-wrapper">
          <button className="loginsignupbutton" id="logInSignUpButton">
            <div className="loginsignup">Log-In/Sign-Up</div>
          </button>
        </div>
      </header>
      <section className="landing-page-liz-inner">
        <div className="feature-grid-parent">
          <div className="feature-grid">
            <div className="landingpageintro">
              <div className="begin-your-anime-journey-here-parent">
                <h1 className="begin-your-anime">Begin Your Anime Journey Here</h1>
                <div className="media-platform-for">
                  Media Platform for Anime Enthusiasts
                </div>
                <div className="button-wrapper">
                  <button className="button">
                    <div className="start-your-30-day">
                      Start Your 30-Day Free Trial
                    </div>
                  </button>
                </div>
                <div className="click-here-to">Click Here to See Plans</div>
              </div>
            </div>
            <div className="sitefeaturecontent1-parent">
              <div className="sitefeaturecontent1">
                <div className="heading-parent">
                  <h2 className="heading">Heading</h2>
                  <div className="a-subheading-for">
                    A subheading for this section, as long or as short as you
                    like
                  </div>
                </div>
              </div>
              <img
                className="landingpagepic1-icon"
                loading="lazy"
                alt=""
                src={LandingPic1}
              />
            </div>
          </div>
          <div className="landingpagepic2-parent">
            <img
              className="landingpagepic2-icon"
              loading="lazy"
              alt=""
              src="./public/landingpagepic2@2x.png"
            />

            <div className="sitefeaturecontent2-wrapper">
              <div className="sitefeaturecontent2">
                <h2 className="heading1">Heading</h2>
                <div className="another-subheadingmaybe-its">
                  Another subheading—maybe it’s related to the image on the
                  left, or the button below
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
                  alt=""
                  src="./public/00.svg"
                />

                <div className="feature-1">Feature 1</div>
                <div className="body-text-for">
                  Body text for whatever you’d like to say. Add main takeaway
                  points, quotes, anecdotes, or even a very very short story.
                </div>
              </div>
              <div className="subfeaturebox2">
                <img className="feature-icon-two" alt="" src="./public/00-1.svg" />

                <div className="feature-3">Feature 3</div>
                <div className="body-text-for1">
                  Body text for whatever you’d like to suggest. Add main
                  takeaway points, quotes, anecdotes, or even a very very short
                  story.
                </div>
              </div>
            </div>
            <div className="subfeaturerow2">
              <div className="parent">
                <img className="icon" alt="" src="./public/00-2.svg" />

                <div className="feature-2">Feature 2</div>
                <div className="body-text-for2">
                  Body text for whatever you’d like to claim. Add main takeaway
                  points, quotes, anecdotes, or even a very very short story.
                </div>
              </div>
              <div className="group">
                <img className="icon1" alt="" src="./public/00-3.svg" />

                <div className="feature-4">Feature 4</div>
                <div className="body-text-for3">
                  Body text for whatever you’d like to type. Add main takeaway
                  points, quotes, anecdotes, or even a very very short story.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="subplanssection">
        <div className="pickyourplansection">
          <div className="subplanheader">
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
                alt=""
                src="./public/rectangle-12@2x.png"
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
          </div>
        </div>
      </section>

      {/* // <!-- Navigation footer section --> */}
      <footer className="navigation-footer">
        <div className="divider"></div>
        <div className="footer-content">
          <div className="social">
            <div className="connect-with-us">Connect With Us</div>
            <div className="social-icons">
              <img
                className="mdifacebook-icon"
                loading="lazy"
                alt="Facebook Logo Icon"
                src="./public/mdifacebook.svg"
              />

              <img
                className="mdireddit-icon"
                loading="lazy"
                alt="Reddit Logo Icon"
                src="./public/mdireddit.svg"
              />

              <img
                className="biyoutube-icon"
                loading="lazy"
                alt="YouTube Logo Icon"
                src="./public/biyoutube.svg"
              />

              <img
                className="riinstagram-fill-icon"
                loading="lazy"
                alt="Instagram Logo Icon"
                src="./public/riinstagramfill.svg"
              />

              <img
                className="primetwitter-icon"
                loading="lazy"
                alt="Twitter Logo Icon"
                src="./public/primetwitter@2x.png"
              />

              <img
                className="icon-park-twotonetiktok"
                loading="lazy"
                alt="Tik-tok Logo Icon"
                src="./public/iconparktwotonetiktok@2x.png"
              />
            </div>
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
    </div>
      </>
)}

export default Landing