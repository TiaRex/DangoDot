import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/home.css";

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
      <div className="home">
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
        
      </div>
     
    </>
  );
};

export default Home;
