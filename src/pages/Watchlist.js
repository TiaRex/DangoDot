import React from 'react'
import Navbar from '../components/Navbar';
import '../styles/Watchlist.css';

const Watchlist = () => {
  return (
    <body>
        <Navbar />
        <header>
            <div class="header-container">
                <h1 class="header-title">My Watchlists</h1>
            </div>
        </header>

        <main>
          <section class="watchlist-container" id="watchlist-container">
            {/* Favorites */}
            <h1 class="favorites-heading">Favorites</h1>
            <div class="favorites-box">
              {/* <img src=images/demonslayer.jpg></img> */}
            </div>
          </section>
        </main>
    </body>
  )
}

export default Watchlist