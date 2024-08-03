import { Route, Routes } from "react-router-dom";
import "./App.css";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Watchlist from "./pages/Watchlist";
import Player from "./pages/Player";
import Settings from "./pages/Settings";
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Login" element={<Login />} />
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
