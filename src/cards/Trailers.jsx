import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthProvider'
import { getTrailers } from '../componenets/getData'
import { getMovieDetails } from '../componenets/getData'
import { Link, useNavigate } from 'react-router-dom'
import Loading from '../componenets/Loading'
const Trailers = () => {

   
    const { moviesData, loading } = useContext(AuthContext);

const [hoveredMovie, setHoveredMovie]=useState(null)
     const [trailer,setTrailer] =useState([])
     

const navigate= useNavigate()

      useEffect(()=>{
    
    const fetchDetails= async()=>{
    const data= await getTrailers()
    setTrailer(data)
    // console.log(data)
    
    }
    fetchDetails()
    
      },[])

      const getDetails=(elem)=>{
        // console.log(elem.id)
      navigate(`/movie/${elem.id}`)
      }

 



if (loading) {
  return <Loading/>;
}


return (
  
  <div className='bg-cyan-950 inset-0  relative px-10 py-5 bg-cover bg-center'
  style={{ 
    backgroundImage: hoveredMovie 
      ? `url(https://image.tmdb.org/t/p/original${hoveredMovie.backdrop_path})`
      : "none",
  }}
  
  ><h1 className='font-semibold text-2xl mb-4 text-white'>Latest Trailer</h1>
  <div
 
   className=" flex gap-5 overflow-auto scrollbar-thumb-black ">
    
    {trailer.map((elem)=>(
<div 
key={elem.id} 
className="flex flex-col" 
onMouseEnter={()=>setHoveredMovie(elem)}
onMouseLeave={()=>setHoveredMovie(null)}
>

 <img className="h-50 min-w-80  rounded-2xl object-fill mt-2 ml-2 hover:cursor-pointer transition-transform duration-300 hover:scale-105"
onClick={()=>{getDetails(elem)}}
src={`https://image.tmdb.org/t/p/original${elem.poster_path}`}
alt={elem.title}

/>
<h1 className="hover:text-blue-800 hover:underline w-fit cursor-pointer text-white font-semibold">{elem.title}</h1>
<p className="text-white">{elem.release_date}</p></div>
    ))}
    

   
  </div></div>
);
}

export default Trailers
