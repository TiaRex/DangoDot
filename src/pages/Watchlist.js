import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar';
import '../styles/Watchlist.css';
import Footer from '../components/Footer';

const Watchlist = () => {
  const [search, setSearch] = useState('Naruto')
  const [animeData, setAnimeData] = useState()
  const [myAnimeList,setMyAnimeList]=useState([])

  const addTo=(anime)=>{
    const index=myAnimeList.findIndex((myanime)=>{
        return myanime.mal_id === anime.mal_id
    })
    if(index < 0){
      const newArray=[...myAnimeList,anime]
      setMyAnimeList(newArray);
    }
  }

  const removeFrom=(anime)=>{
    const newArray=myAnimeList.filter((myanime)=>{
      return myanime.mal_id !== anime.mal_id
    })
    setMyAnimeList(newArray)
  }

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
                <h1 className="header-title">Watchlist</h1>
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
                          <h4>{anime.title}</h4>
                          
                          <div className="overlay" onClick={()=>addTo(anime)}>
                            <div className="add">
                              <button type="button">Add to List +</button>
                            </div>
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
            <section className="results-container" id="results-container">
            <h1 className="favorites-heading">Favorites</h1>
            <div className="results-box">
              <div className="results-row">
                {
                  myAnimeList.length !== 0 ?(
                    myAnimeList.map((anime,index)=> {
                      return (
                        <div className="results-card">
                          <img src={anime.images.jpg.large_image_url} alt="animeCover"></img>
                          <h4>{anime.title}</h4>
                          
                          <div className="overlay" onClick={()=>removeFrom(anime)}>
                            <div className="remove">
                              <button type="button">Remove from List -</button>
                            </div>
                          </div>
                        </div>
                      )
                    })
                  ) : "Search and add anime to your favorites!"
                }
              </div>
            </div>

          </section>
          <br></br>
        </main>

        <Footer />
    </body>
  )
}

export default Watchlist