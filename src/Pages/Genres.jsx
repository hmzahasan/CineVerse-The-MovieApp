import React from 'react'
import Navbar from '../componenets/Navbar';
import Footer from '../componenets/Footer';
import { useNavigate } from 'react-router-dom';

const Genres = () => {

    const navigate =useNavigate()

    const getGenre=(name,id)=>{
        navigate(`/genre/${id}/${name}`)
    }
    const genres = [
        { id: 28, name: "Action" },
        { id: 12, name: "Adventure" },
        { id: 16, name: "Animation" },
        { id: 35, name: "Comedy" },
        { id: 80, name: "Crime" },
        { id: 99, name: "Documentary" },
        { id: 18, name: "Drama" },
        { id: 27, name: "Horror" },
        { id: 9648, name: "Mystery" },
        { id: 10749, name: "Romance" },
        { id: 878, name: "Sci-Fi" },
        { id: 53, name: "Thriller" },
        { id: 14, name: "Fantasy" },
        { id: 10751, name: "Family" },
      ];
  return (

    <>
    <Navbar/>
    <div className="px-3 mt-20 mb-20 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">

  {genres.map((genre) => (
    <div
    onClick={()=>getGenre(genre.name,genre.id)}
      key={genre.id}
      className="bg-gray-900 rounded-xl p-5 text-center
                 hover:bg-blue-600 hover:scale-105
                 transition duration-300 cursor-pointer"
    >
      <h3 className="text-white font-semibold">
        {genre.name}
      </h3>
    </div>
  ))}

</div>
<Footer/>
</>
  )
}

export default Genres
