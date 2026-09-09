import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { searchMovies } from './getData';

const Navbar = () => {
  const navigate=useNavigate()
  const getMovies=(e)=>{
    e.preventDefault()
    navigate(`/search/${search}`)
    console.log(search)
  }

  const [search, setSearch] = useState("");
 
  const handleSearch = async (e) => {
    const value = e.target.value;


    setSearch(value);

  };
  return (
    <div className='flex flex-wrap justify-between p-6 items-center gap-8 bg-[#03111b] text-gray-400 border-t border-gray-800 w-full '>
     <Link to='/'>  <h1 className="text-3xl font-bold text-white mb-4 hover:scale-115">
              Cine<span className="text-blue-500">Verse</span>
            </h1></Link>
            {/* <img src="../assets/favicon1.png" alt="" /> */}
      <div className='flex flex-wrap gap-8 text-lg font-bold mr-10'>
      <form onSubmit={getMovies}> 
      <input 
      
      onChange={handleSearch}
      value={search}
      className=' h-8 min-w-50 p-2 border rounded-2xl text-sm  border-gray-400 outline-none focus:border-blue-500' 
      type="search"
      placeholder='Search' /></form> 
      <div className='flex flex-wrap gap-8 flex-row'>
       <h1 className='hover:text-blue-500 hover:scale-105'> <Link to='/'>Home</Link></h1>
        <h1 className='hover:text-blue-500 hover:scale-105'><Link to='/Movies'>Movies</Link></h1>
        <h1 className='hover:text-blue-500 hover:scale-105'><Link to='/Genres'>Genres</Link></h1>
        <h1 className='hover:text-blue-500 hover:scale-105'><a href="">Trending</a></h1></div>
        
      </div>
    </div>
  )
}

export default Navbar
