import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/player.css";

const Player = () => {
  const location = useLocation();
  const { anime } = location.state || {};

  if (!anime) {
    return <h1>Error 404: Page Not Found :(</h1>;
  }

  const filteredSynopsis = anime.synopsis
    .replace(/\[Written by MAL Rewrite\]/, "")
    .trim();

  return (
    <div className="player-page">
      <Navbar />
      <div className="wrapper">
        <section className="content-container">
          <div className="content">
            <div className="video-container">
              {anime.trailer.url ? (
                <>
                  <iframe
                    width="1080"
                    height="715"
                    src={`https://www.youtube.com/embed/${new URL(
                      anime.trailer.url
                    ).searchParams.get("v")}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={anime.title}
                  ></iframe>
                  <p className="video-title">
                    You are now watching the trailer for {anime.title}.
                  </p>
                  <p className="video-subtitle">Enjoy! ☆*:.｡.o(≧▽≦)o.｡.:*☆</p>
                </>
              ) : (
                <p>
                  Aaa! We're sorry -- There is no trailer available. ( ; ω ; )
                  <br />
                  You can read more about the anime down below!
                </p>
              )}
            </div>
            <section className="anime-related-container">
              <div className="details-container">
                <div className="details-content">
                  <div className="anime-poster">
                    <img src={anime.images.jpg.image_url} alt={anime.title} />
                  </div>
                  <div className="anime-about">
                    <h2>{anime.title}</h2>
                    <div className="anime-synopsis">
                      <p>{filteredSynopsis}</p>
                    </div>
                    <div className="anime-details">
                      <strong className="anime-details-item">Rank:</strong>
                      {anime.rank}
                      <strong className="anime-details-item">Rating:</strong>
                      {anime.score}
                      <strong className="anime-details-item">Type:</strong>
                      {anime.type}
                      <strong className="anime-details-item">Episodes:</strong>
                      {anime.episodes}
                      <strong className="anime-details-item">Duration:</strong>
                      {anime.duration}
                      <strong className="anime-details-item">
                        Genres:
                      </strong>{" "}
                      {anime.genres.map((genre) => genre.name).join(", ")}
                    </div>
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
