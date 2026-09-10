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




//  
}
fetchDetails()
},[id])

useEffect(()=>{

  const getVideosData =async()=>{
    const videos= await getVideos(id)
    
    
    





const trailer = videos.results.find(
  (video) =>
    video.site === "YouTube" &&
    video.type === "Trailer"
);


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
    <div className="relative min-h-screen overflow-hidden bg-[#03121d]">

{/* Movie Hero Section */}
<div
  className="relative min-h-screen bg-cover bg-center"
  style={{
    backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
  }}
>

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-[#03121d]/80"></div>

  {/* Content */}
  <div className="relative z-10 min-h-screen px-5 py-10 sm:px-8 md:px-12 lg:px-16">

    <div className="flex min-h-screen flex-col items-center justify-center gap-10 lg:flex-row lg:gap-16">

      {/* Poster */}
      <div className="shrink-0">
        <img
          className="
            h-auto
            w-64
            rounded-2xl
            shadow-2xl
            sm:w-72
            md:w-80
            lg:w-96
          "
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
      </div>

      {/* Movie Details */}
      <div className="flex w-full max-w-2xl flex-col gap-4 text-center text-white lg:text-left">

        {/* Title */}
        <h1 className="text-3xl font-extrabold sm:text-4xl md:text-5xl">
          {movie.title}
        </h1>

        {/* Movie Info */}
        <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-gray-300 lg:justify-start">
          <span>{movie.release_date}</span>

          <span>
            {movie.origin_country?.[0] || "N/A"}
          </span>

          <span>
            {movie.genres?.[0]?.name || "N/A"}
          </span>
        </div>

        {/* Tagline */}
        {movie.tagline && (
          <p className="text-base italic text-gray-300 sm:text-lg">
            "{movie.tagline}"
          </p>
        )}

        {/* Overview */}
        <h2 className="mt-2 text-2xl font-semibold">
          Overview
        </h2>

        <p className="text-sm leading-6 text-gray-300 sm:text-base">
          {movie.overview}
        </p>

        {/* Rating */}
        <p className="mt-2 text-lg font-semibold">
          ⭐ Rating: {movie.vote_average?.toFixed(1)}
        </p>

      </div>

    </div>
  </div>
</div>


{/* Trailer Section */}
<div className="border-t border-gray-800 bg-[#03121d] px-5 py-12 sm:px-8 md:px-12 lg:px-16">

  <h2 className="mb-8 text-center text-2xl font-bold text-white sm:text-3xl">
    🎬 Official Trailer
  </h2>

  <div className="mx-auto w-full max-w-5xl overflow-hidden rounded-2xl shadow-2xl">

    <iframe
      className="aspect-video w-full"
      src={youtubeVideo}
      title="Movie Trailer"
      allowFullScreen
    ></iframe>

  </div>

</div>

</div>
    <Footer/>
    </>
  )
}

export default MovieDetail
