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
    const res=await fetch(`https://api.jikan.moe/v4/anime?q=${search}&limit=10`)
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
            <div className="watchlist-container">
                <h1 className="header-title">My Watchlists</h1>
                <div className = "search-box">
                  <input type = "search" placeholder = "Search Anime"
                  onChange = {(e) => setSearch(e.target.value)}/>
                </div>
            </div>
        </header>

        <main>
          {/* Search Results */}
          <section className="results-container" id="results-container">
            <div className="results-box">
              <div className="results-row">
                {
                  animeData ?(
                    animeData.map((anime,index)=> {
                      return (
                        <div className="results-card">
                          <img src={anime.images.jpg.large_image_url} alt="animeCover"></img>

                          <div className="results-text">
                            <h4>{anime.title}</h4>
                          </div>
                        </div>
                      )
                    })
                  ) : "Not Found"
                }
              </div>
            </div>
          </section>
          <br></br>

          {/* Favorites */}
          <section className="favorites-container" id="favorites-container">
            <h1 className="favorites-heading">Favorites</h1>
            <div className="favorites-box">
              <img src={JujutsuKaisen} alt="Jujutsu-Kaisen"></img>
            </div>
          </section>
          <br></br>
          
          {/* Watch Later */}
          <section className="later-container" id="later-container">
            <h1 className="later-heading">Watch Later</h1>
            <div className="later-box">
              <img src={DemonSlayer} alt="Demon Slayer"></img>
            </div>
            <div className="later-text">
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