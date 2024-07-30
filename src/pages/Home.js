import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/home.css";
import Dangologo from "../assets/Dangologo.png";

const Home = () => {
  const [topAnimes, setTopAnimes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://api.jikan.moe/v4/top/anime")
      .then((response) => response.json())
      .then((data) => setTopAnimes(data.data.slice(0, 10)))
      .catch((error) => console.error("Error fetching top animes:", error));
  }, []);

  const handleAnimeClick = (anime) => {
    navigate(`/player/${anime.mal_id}`, { state: { anime } });
  };

  return (
    <>
      <Navbar />
      <div>
        <main>
          <section>
            <h2>Top Anime</h2>
            <div className="anime-list">
              {topAnimes.map((anime) => (
                <div key={anime.mal_id} className="anime-item">
                  <img
                    className="anime-cover"
                    src={anime.images.jpg.image_url}
                    alt={anime.title}
                    onClick={() => handleAnimeClick(anime)}
                  />
                  <p>{anime.title}</p>
                </div>
              ))}
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;
