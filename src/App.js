import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Watchlist from "./pages/Watchlist";
import Player from "./pages/Player";
import Settings from "./pages/Settings";
import Navbar from './components/Navbar';
import Footer from './components/Footer';



function App() {
  // isAuthenticated state is placed in App.js allows control authentication status across different components.
  // isAuthenticated and setIsAuthenticated passed down as props to Navbar.js and Login.js eliminates need to refresh page to update Navbar.
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));

  return (
    <div className="App">
      
      <Navbar isAuthenticated={isAuthenticated}/>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Watchlist" element={<Watchlist />} />
        <Route path="/Player/:mal_id" element={<Player />} />
        <Route path="/Settings" element={<Settings />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
