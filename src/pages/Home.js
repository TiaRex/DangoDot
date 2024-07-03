import React from 'react';
import Navbar from '../components/Navbar';
import './styles/Home.css';

// Sample data for the sections
const popularMovies = [
  { id: 1, title: "My Neighbor Totoro", image: "totoro.jpg" },
  { id: 2, title: "Spirited Away", image: "spirited_away.jpg" },
  { id: 3, title: "Your Name", image: "your_name.jpg" },
];

const continueWatching = [
  { id: 1, title: "Attack on Titan", image: "attack_on_titan.jpg" },
  { id: 2, title: "One Piece", image: "one_piece.jpg" },
];

const watchlist = [
  { id: 1, title: "Naruto", image: "naruto.jpg" },
  { id: 2, title: "Demon Slayer", image: "demon_slayer.jpg" },
];



const Home = () => {
  return (
    <>
    <Navbar />
    <div className="HomeNav">
      <header className="HomeNav-header">
        <img src="/src/Assets/Dangologo.png" alt="Dango Logo" className="HomeNav-logo" />
        <nav>
          <ul>
            <li>Home</li>
            <li>Watchlist</li>
            <li>Settings</li>
            <li>Search</li>
          </ul>
        </nav>
      </header>

      <main>
        <section>
          <h2>Popular</h2>
          <div className="movie-list">
            {popularMovies.map(movie => (
              <div key={movie.id} className="movie-item">
                <img src={movie.image} alt={movie.title} />
                <p>{movie.title}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2>Continue Watching</h2>
          <div className="movie-list">
            {continueWatching.map(movie => (
              <div key={movie.id} className="movie-item">
                <img src={movie.image} alt={movie.title} />
                <p>{movie.title}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2>Watchlist</h2>
          <div className="movie-list">
            {watchlist.map(movie => (
              <div key={movie.id} className="movie-item">
                <img src={movie.image} alt={movie.title} />
                <p>{movie.title}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; 2024 Anime Movie App</p>
        <nav>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Contact Us</li>
          </ul>
        </nav>
      </footer>
    </div>
  );
}

export default Home;
