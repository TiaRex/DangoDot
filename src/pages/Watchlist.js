import React from 'react'
import '../styles/Watchlist.css';
import JujutsuKaisen from '../assets/Jujutsu-Kaisen.png';
import DemonSlayer from '../assets/demonslayer.jpeg';

const Watchlist = () => {
  return (
    <body>
        <header>
            <div class="watchlist-container">
                <h1 class="header-title">My Watchlists</h1>
            </div>
        </header>

        <main>
          {/* Favorites */}
          <section class="favorites-container" id="favorites-container">
            <h1 class="favorites-heading">Favorites</h1>
            <div class="favorites-box">
              <img src={JujutsuKaisen} alt="Jujutsu-Kaisen"></img>
            </div>
          </section>
          <br></br>
          
          {/* Watch Later */}
          <section class="later-container" id="later-container">
            <h1 class="later-heading">Watch Later</h1>
            <div class="later-box">
              <img src={DemonSlayer} alt="Demon Slayer"></img>
            </div>
            <div class="later-text">
              <strong>Demon Slayer</strong>
              <p>2023 | 4 Seasons</p>
              <p>Shonen Manga, Action Manga, Dark Fantasy</p>
            </div>
          </section>
          <br></br>
        </main>
    </body>
  )
}

export default Watchlist