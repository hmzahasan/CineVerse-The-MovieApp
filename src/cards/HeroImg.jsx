import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'
import Loading from '../componenets/Loading';

const HeroImg = () => {

    const { moviesData,loading }= useContext(AuthContext)
    
    
  
 
    if (loading) {
      return <Loading/>;
    }
  
    if (!moviesData.length) {
      return <h1>No movies found</h1>;
    }
    const HeroImage = moviesData.find(
      (moviesData) =>
        moviesData.id === 860508
    );
    
  //  console.log(moviesData)
    
  // console.log(movie.backdrop_path)
  return (
    
    <div >
    <div
  className="w-full h-full min-h-150 bg-cover bg-center"

  style={{
    backgroundImage: `url(https://image.tmdb.org/t/p/original${HeroImage.backdrop_path})`
  }}
>
    <h1 className='font-extrabold text-6xl absolute pl-4 top-120 text-white'>Welcome.</h1>
    <h2 className='font-bold text-4xl absolute top-135 pl-4 text-white'>Millions of movies, TV shows and people to discover. Explore now.</h2>
</div>

     
    </div>
  )
}

export default HeroImg;
