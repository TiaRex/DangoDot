import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar';
import '../styles/Watchlist.css';
import JujutsuKaisen from '../assets/Jujutsu-Kaisen.png';
import DemonSlayer from '../assets/demonslayer.jpeg';
import Footer from '../components/Footer';

const Watchlist = () => {
  const [search, setSearch] = useState('Naruto')
  const [animeData, setAnimeData] = useState()

  const getData = async() => {
    const res=await fetch(`https://api.jikan.moe/v4/anime?q=${search}&limit=1`)
    const resData= await res.json();
    setAnimeData(resData.data)
    console.log(resData.data)
  }
  useEffect(()=>{
    getData()
  },[search])

  return (
    <body>
        <Navbar />

        <header>
            <div class="watchlist-container">
                <h1 class="header-title">My Watchlists</h1>
                <div className = "search-box">
                  <input type = "search" placeholder = "Search Anime"
                  onChange = {(e) => setSearch(e.target.value)}/>
                </div>
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

        <Footer />
    </body>
  )
}

export default Watchlist