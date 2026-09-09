import React, { useContext } from 'react'
import Navbar from './componenets/Navbar.jsx'
import Home from './componenets/Home.jsx'
import { AuthContext } from './context/AuthProvider.jsx'
import HeroImg from './cards/HeroImg.jsx'
import Trending from './cards/Trending.jsx'
import { Route, Routes } from 'react-router-dom'
import MovieDetail from './cards/MovieDetail.jsx'
import About from './Pages/About.jsx'
import Contact from './Pages/Contact.jsx'
import Terms from './Pages/Terms&Conditions.jsx'
import Privacy from './Pages/PrivacyPolicy.jsx'
import TrailerVideo from './cards/TrailerVideo.jsx'
import SearchPage from './Pages/SearchPage.jsx'
import Movies from './Pages/Movies.jsx'
import Genres from './Pages/Genres.jsx'
import GenreShows from './Pages/GenreShows.jsx'

const App = () => {
  
  
  return (
    
<div>
<Routes>
<Route path='/movie/:id' element={<MovieDetail/>}/>
<Route path='/trailer/:id' element={<TrailerVideo/>}/>
<Route path='search/:search' element={<SearchPage/>}/>
<Route path='/genre/:id/:name' element={<GenreShows/>}/>
<Route path='/' element={<Home/>}/>
<Route path='/Movies' element={<Movies/>}/>
<Route path='/Genres' element={<Genres/>}/>
<Route path='/About' element={<About/>}/>
<Route path='/contact' element={<Contact/>} />
<Route path='/terms&conditions' element={<Terms/>} />
<Route path='/privacypolicy' element={<Privacy/>} />
</Routes>

 

</div>
    
  )
}

export default App
