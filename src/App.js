
import './App.css';
import Popular from './Components/AddMovie/Popular';
import Footer from './Components/footer/Footer';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import ImageCarousel from './Components/ImageCarousel';
import MovieLink from './Components/Links/MovieLink';
import Movie from './Components/Movie/Movie';
import NavbarHome from './Components/Navbar/NavbarHome';

import Trending from './Components/TrendingMovie/Trending';
import Home from './Home';
import WatchMovies from './Pages/WatchMovies';
import Search from './Pages/Search';

function App() {
  return (
    <div className="App">

    <BrowserRouter>
    <Routes>

    <Route path="home" element={<Home/>}/>
    <Route path="/watchmovie" element={<WatchMovies/>}/>
    <Route path="/search" element={<Search/>}/>
    <Route path="/trending" element={<Trending/>}/>
    
    </Routes>
  </BrowserRouter>
   
    </div>
  );
}

export default App;
