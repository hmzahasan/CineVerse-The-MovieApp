import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getMovieDetails, getVideos } from '../componenets/getData'
import Navbar from '../componenets/Navbar'
import Footer from '../componenets/Footer'
import Loading from '../componenets/Loading'
import { AuthContext } from '../context/AuthProvider'

const MovieDetail = () => {

  const {id} =useParams()
  
  const [movie,setMovie] =useState(null)

  const [youtubeVideo,setYoutubeVideo]=useState(null)
  useEffect(()=>{

const fetchDetails= async()=>{
const moviesDetailData= await getMovieDetails(id)

setMovie(moviesDetailData)

// console.log(data)


//  
}
fetchDetails()
},[id])

useEffect(()=>{

  const getVideosData =async()=>{
    const videos= await getVideos(id)
    
    
    console.log(videos)





const trailer = videos.results.find(
  (video) =>
    video.site === "YouTube" &&
    video.type === "Trailer"
);

console.log(trailer);
const videoKey = trailer.key
setYoutubeVideo(`https://www.youtube.com/embed/${videoKey}`);
}
  getVideosData()
},[id])

// console.log(video)
  if (!movie) {
    return <Loading/>;
  }
  return (
    <>
    <Navbar/>
    <div className="relative min-h-screen overflow-hidden ">

<div className='w-screen h-screen  bg-cover bg-center '
style={{
    backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`
  }}>

    <div className="absolute inset-0 h-screen bg-[#03121d]/80"></div>

<div className='absolute px-10 py-15 gap-10 text-white flex wrap-break-word justify-around'> 
  <div>
   <img
   className=' h-120 w-140 rounded-2xl min-h-100 min-w-80 '
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
</div>
<div className='relative top-30 flex flex-col gap-3'>
      <h1 className='text-4xl font-extrabold'>{movie.title}</h1>
      <pre className='w-fit space-x-10'> {movie.release_date} {movie.origin_country[1]} {movie.genres[0].name}</pre>

<p>{movie.tagline}</p>
      <h1 className='font-semibold text-2xl'>Overview</h1>
      <p className='text-sm'>{movie.overview}</p>


      <p className='hover:underline hover:text-blue-700'>Rating: {movie.vote_average}</p>

     
      </div>
      </div>

  </div>
<div className=' flex justify-center border-t border-gray-800 pt-20 pb-20 bg-[#03121d]'>
<iframe
  width="560"
  height="315"
  src={`${youtubeVideo}`}
  title="Movie Trailer"
  allowFullScreen
></iframe>
</div>
         
    </div>
    <Footer/>
    </>
  )
}

export default MovieDetail
