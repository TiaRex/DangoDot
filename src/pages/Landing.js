import React from 'react'
import Navbar from '../components/Navbar';
import "../styles/Landing.css"
// copy and past html code within return

const Landing = () => {
  return (
  <>
  <Navbar></Navbar>
    <div class="landing-page-liz">
      <header class="navigationheader">
        <div class="dangodotlogobox-parent">
          <div class="dangodotlogobox"></div>
          <div class="dangologo-wrapper">
            <img
              class="dangologo-icon"
              loading="lazy"
              alt="DangoDot Logo Icon"
              src="./public/dangologo@2x.png"
            />
          </div>
          <div class="dangodot">DangoDot</div>
        </div>
        <div class="loginsignupbutton-wrapper">
          <button class="loginsignupbutton" id="logInSignUpButton">
            <div class="loginsignup">Log-In/Sign-Up</div>
          </button>
        </div>
      </header>
      <section class="landing-page-liz-inner">
        <div class="feature-grid-parent">
          <div class="feature-grid">
            <div class="landingpageintro">
              <div class="begin-your-anime-journey-here-parent">
                <h1 class="begin-your-anime">Begin Your Anime Journey Here</h1>
                <div class="media-platform-for">
                  Media Platform for Anime Enthusiasts
                </div>
                <div class="button-wrapper">
                  <button class="button">
                    <div class="start-your-30-day">
                      Start Your 30-Day Free Trial
                    </div>
                  </button>
                </div>
                <div class="click-here-to">Click Here to See Plans</div>
              </div>
            </div>
            <div class="sitefeaturecontent1-parent">
              <div class="sitefeaturecontent1">
                <div class="heading-parent">
                  <h2 class="heading">Heading</h2>
                  <div class="a-subheading-for">
                    A subheading for this section, as long or as short as you
                    like
                  </div>
                </div>
              </div>
              <img
                class="landingpagepic1-icon"
                loading="lazy"
                alt=""
                src="./public/landingpagepic1@2x.png"
              />
            </div>
          </div>
          <div class="landingpagepic2-parent">
            <img
              class="landingpagepic2-icon"
              loading="lazy"
              alt=""
              src="./public/landingpagepic2@2x.png"
            />

            <div class="sitefeaturecontent2-wrapper">
              <div class="sitefeaturecontent2">
                <h2 class="heading1">Heading</h2>
                <div class="another-subheadingmaybe-its">
                  Another subheading—maybe it’s related to the image on the
                  left, or the button below
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="subfeaturecontent-wrapper">
        <div class="subfeaturecontent">
          <h2 class="subfeatheading">Subscription Features</h2>
          <div class="subfeaturedescriptions">
            <div class="subfeaturerow1">
              <div class="subfeaturebox1">
                <img
                  class="feature-icon-one"
                  loading="lazy"
                  alt=""
                  src="./public/00.svg"
                />

                <div class="feature-1">Feature 1</div>
                <div class="body-text-for">
                  Body text for whatever you’d like to say. Add main takeaway
                  points, quotes, anecdotes, or even a very very short story.
                </div>
              </div>
              <div class="subfeaturebox2">
                <img class="feature-icon-two" alt="" src="./public/00-1.svg" />

                <div class="feature-3">Feature 3</div>
                <div class="body-text-for1">
                  Body text for whatever you’d like to suggest. Add main
                  takeaway points, quotes, anecdotes, or even a very very short
                  story.
                </div>
              </div>
            </div>
            <div class="subfeaturerow2">
              <div class="parent">
                <img class="icon" alt="" src="./public/00-2.svg" />

                <div class="feature-2">Feature 2</div>
                <div class="body-text-for2">
                  Body text for whatever you’d like to claim. Add main takeaway
                  points, quotes, anecdotes, or even a very very short story.
                </div>
              </div>
              <div class="group">
                <img class="icon1" alt="" src="./public/00-3.svg" />

                <div class="feature-4">Feature 4</div>
                <div class="body-text-for3">
                  Body text for whatever you’d like to type. Add main takeaway
                  points, quotes, anecdotes, or even a very very short story.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="subplanssection">
        <div class="pickyourplansection">
          <div class="subplanheader">
            <div class="pick-your-plan-parent">
              <h2 class="pick-your-plan">Pick Your Plan</h2>
              <div class="subscription-options-for">
                Subscription Options for Every Anime Enthusiast
              </div>
            </div>
          </div>
          <div class="subplangrid">
            <div class="planfeat1">
              <div class="feature-11">Feature 1</div>
              <div class="body-text-for4">
                Body text for whatever you’d like to say. Add main takeaway
                points, quotes, anecdotes, or even a very very short story.
              </div>
              <div class="subplanfeature1description2">
                <div class="feature-21">Feature 2</div>
                <div class="body-text-for-whatever-youd-l-wrapper">
                  <div class="body-text-for5">
                    Body text for whatever you’d like to claim. Add main
                    takeaway points, quotes, anecdotes, or even a very very
                    short story.
                  </div>
                </div>
              </div>
              <div class="subplanfeature1clickbutton">
                <button class="button1">
                  <b class="click-here">Click Here</b>
                </button>
              </div>
            </div>
            <div class="plan-highlight">
              <img
                class="disappearingdango-icon"
                loading="lazy"
                alt=""
                src="./public/rectangle-12@2x.png"
              />

              <div class="highlight-content">
                <div class="planfeat2">
                  <div class="subplanfeature2description1">
                    <div class="feature-1-wrapper">
                      <div class="feature-12">Feature 1</div>
                    </div>
                    <div class="body-text-for6">
                      Body text for whatever you’d like to claim. Add main
                      takeaway points, quotes, anecdotes, or even a very very
                      short story.
                    </div>
                  </div>
                  <div class="subplanfeature2description2">
                    <div class="feature-22">Feature 2</div>
                    <div class="body-text-for7">
                      Body text for whatever you’d like to claim. Add main
                      takeaway points, quotes, anecdotes, or even a very very
                      short story.
                    </div>
                  </div>
                  <div class="subplanfeature2clickbutton">
                    <button class="button2">
                      <b class="click-here1">Click Here</b>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="planfeat3">
              <div class="frame-parent">
                <div class="feature-1-container">
                  <div class="feature-13">Feature 1</div>
                </div>
                <div class="body-text-for8">
                  Body text for whatever you’d like to say. Add main takeaway
                  points, quotes, anecdotes, or even a very very short story.
                </div>
              </div>
              <div class="frame-group">
                <div class="feature-2-wrapper">
                  <div class="feature-23">Feature 2</div>
                </div>
                <div class="body-text-for9">
                  Body text for whatever you’d like to claim. Add main takeaway
                  points, quotes, anecdotes, or even a very very short story.
                </div>
              </div>
              <div class="button-container">
                <button class="button3">
                  <b class="click-here2">Click Here</b>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* // <!-- Navigation footer section --> */}
      <footer class="navigation-footer">
        <div class="divider"></div>
        <div class="footer-content">
          <div class="social">
            <div class="connect-with-us">Connect With Us</div>
            <div class="social-icons">
              <img
                class="mdifacebook-icon"
                loading="lazy"
                alt="Facebook Logo Icon"
                src="./public/mdifacebook.svg"
              />

              <img
                class="mdireddit-icon"
                loading="lazy"
                alt="Reddit Logo Icon"
                src="./public/mdireddit.svg"
              />

              <img
                class="biyoutube-icon"
                loading="lazy"
                alt="YouTube Logo Icon"
                src="./public/biyoutube.svg"
              />

              <img
                class="riinstagram-fill-icon"
                loading="lazy"
                alt="Instagram Logo Icon"
                src="./public/riinstagramfill.svg"
              />

              <img
                class="primetwitter-icon"
                loading="lazy"
                alt="Twitter Logo Icon"
                src="./public/primetwitter@2x.png"
              />

              <img
                class="icon-park-twotonetiktok"
                loading="lazy"
                alt="Tik-tok Logo Icon"
                src="./public/iconparktwotonetiktok@2x.png"
              />
            </div>
          </div>
          <div class="footer-links">
            <div class="link-list-parent">
              <div class="link-list">
                <div class="about">About</div>
                <div class="privacy-policy">Privacy Policy</div>
                <div class="contact-us">Contact Us</div>
              </div>
              <div class="link-list1">
                <div class="careers">Careers</div>
                <div class="help-center">Help Center</div>
                <div class="media-center">Media Center</div>
              </div>
              <div class="link-list2">
                <div class="cookie-preferences">Cookie Preferences</div>
                <div class="ad-choices">Ad Choices</div>
                <div class="terms-of-use">Terms of Use</div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
      </>
)}

export default Landing