import React from 'react';
import Navbar from '../components/Navbar';
import '../styles/Home.css';
import Dangologo from '../assets/Dangologo.png';
import MyHeroAcademia from '../assets/myheroacad.jpeg';
import FullmetalAlchemist from '../assets/Fmab.jpeg';
import HunterxHunter from '../assets/hxh.jpeg';
import JujustuKaisen from '../assets/Jujutsu-Kaisen.png';
import Bleach from '../assets/bleach-cover.jpg';
import AttackOnTitan from '../assets/aot.jpg';
import OnePiece from '../assets/onep.jpg';
import Naruto from '../assets/naruto-cover.jpg';
import DemonSlayer from '../assets/demonslayer.jpeg';
import DeathNote from '../assets/deathnote.jpg';

// Sample data for the sections
const popularMovies = [
  { id: 1, title: "My Hero Academia", image: MyHeroAcademia},
  { id: 2, title: "Fullmetal Alchemist", image: FullmetalAlchemist},
  { id: 3, title: "Hunter X Hunter", image: HunterxHunter },
  { id: 4, title: "Jujutsu Kaisen", image: JujustuKaisen},
  { id: 5, title: "Bleach", image: Bleach },
  { id: 6, title: "Attack on Titan", image: AttackOnTitan},
  { id: 7, title: "One Piece", image: OnePiece },
  { id: 8, title: "Naruto", image: Naruto },
  { id: 9, title: "Demon Slayer", image: DemonSlayer },
  { id: 10, title: "Death Note", image: DeathNote },
];

const continueWatching = [
  { id: 1, title: "Bleach", image: Bleach },
  { id: 2, title: "One Piece", image: OnePiece },
  { id: 2, title: "Fullmetal Alchemist", image: FullmetalAlchemist },
];

const watchlist = [
  { id: 1, title: "Naruto", image: Naruto },
  { id: 2, title: "Demon Slayer", image: DemonSlayer },
];

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="HomeNav">
        <header className="HomeNav-header">
          <div className="HomeNav-logo-text">
          <img src={Dangologo} alt="Dango Logo" className="HomeNav-logo" />
          <p className="HomeNav-text">DangoDot</p>
          </div>
          <nav>
            <ul className="HomeNav-ul">
              <li>Home</li>
              <li>Watchlist</li>
              <li>Settings</li>
              <li>
                <input type="text" placeholder="Search..." className="search-bar"/>
              </li>
            </ul>
          </nav>
        </header>

        <main>
          <section>
            <h2>Popular Movies</h2>
            <div className="movie-list">
              {popularMovies.map(movie => (
                <div key={movie.id} className="movie-item">
                  <img className="movie-cover" src={movie.image} alt={movie.title} />
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
                  <img className="movie-cover" src={movie.image} alt={movie.title} />
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
                  <img className="movie-cover" src={movie.image} alt={movie.title} />
                  <p>{movie.title}</p>
                </div>
              ))}
            </div>
          </section>
        </main>

        <footer>
          <p>&copy; 2024 DangoDot Movie App</p>
          <nav>
            <ul>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Contact Us</li>
            </ul>
          </nav>
        </footer>
      </div>
    </>
  );
}

export default Home;
