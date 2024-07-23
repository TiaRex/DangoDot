import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/player.css";

const Player = () => {
  const [selectedSeason, setSelectedSeason] = useState("Season 1");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSeasonSelect = (season) => {
    setSelectedSeason(season);
    setIsDropdownOpen(false);
  };

  return (
    <div className="player-page">
      <Navbar />
      <div className="wrapper">
        <section className="content-container">
          <div className="content">
            <div className="video-container">
              <video width="1080" height="715" controls>
                {/* Add API Link */}
                <source src="your-video-url.mp4" type="video/mp4" />
              </video>
              <p className="video-title">You are now watching [Anime Title].</p>
              <p className="video-subtitle">Enjoy! ☆*:.｡.o(≧▽≦)o.｡.:*☆</p>
            </div>
            <section className="anime-related-container">
              <div className="episodes-container">
                <h2>Episodes</h2>
                <div className="seasons-dropdown">
                  <button onClick={toggleDropdown} className="dropdown-button">
                    {selectedSeason} ▼
                  </button>
                  {isDropdownOpen && (
                    <ul className="dropdown-menu">
                      <li onClick={() => handleSeasonSelect("Season 1")}>
                        Season 1
                      </li>
                      <li onClick={() => handleSeasonSelect("Season 2")}>
                        Season 2
                      </li>
                      <li onClick={() => handleSeasonSelect("Season 3")}>
                        Season 3
                      </li>
                    </ul>
                  )}
                </div>
                <ul>
                  <li>EP 1</li>
                  <li>EP 2</li>
                  <li>EP 3</li>
                  <li>EP 4</li>
                  <li>EP 5</li>
                  <li>EP 6</li>
                  <li>EP 7</li>
                  <li>EP 8</li>
                  <li>EP 9</li>
                  <li>EP 10</li>
                </ul>
              </div>
              <div className="details-container">
                <h2>Details Container</h2>
                <div className="details-background">
                  <p>
                    This is the details background image. Changes depending on
                    anime.{" "}
                  </p>
                </div>
                <div className="details-content">
                  <div className="anime-poster">
                    <p>Poster Image (Left)</p>
                  </div>
                  <div className="anime-about">
                    <p>Anime Description (Right)</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Player;
