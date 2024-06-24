import { Route, Routes } from 'react-router-dom';
import './App.css';
import Landing from './pages/Landing';
import Home from './pages/Home';
import Watchlist from './pages/Watchlist';
import Settings from './pages/Settings';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/Home' element={<Home/>} />
        <Route path='/Watchlist' element={<Watchlist/>} />
        <Route path='/Settings' element={<Settings/>} />
      </Routes>
    </div>
  );
}

export default App;
