import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../componenets/Navbar'
import Footer from '../componenets/Footer'
import { getAllMovies } from '../componenets/getData'
import { useNavigate } from 'react-router-dom'
import Loading from '../componenets/Loading'
import { AuthContext } from '../context/AuthProvider'

const Movies = () => {
const{loading} =useContext(AuthContext)
    const navigate= useNavigate()
    const getDetails=(elem)=>{
    
    navigate(`/movie/${elem.id}`)
    }

const[pageNumber,setPageNumber] =useState(1)
const[movie,setMovie]= useState([])
    useEffect(()=>{

const allMovies= async()=>{
const data= await getAllMovies(pageNumber)
setMovie(data)

}
allMovies()
    },[pageNumber])


if (loading) {
    return <Loading/>;
  }

  return (
    <div>
        <Navbar/>
        <h1 className='px-4 mt-5 font-bold text-2xl'>All Movies</h1>
      <div className='flex flex-wrap justify-between p-4'>

{movie.map((elem)=>
<div key={elem.id} className='flex flex-col p-1'>
<img 
onClick={()=>getDetails(elem)}
className='w-60 h-80 min-w-50 min-h-70 rounded-2xl'
src={`https://image.tmdb.org/t/p/original${elem.poster_path}`}
 alt={elem.title} />
<h1>{elem.title}</h1>
<h1>{elem.release_date}</h1>
</div>


)}

      </div>

<div 
className='mb-10 mt-15 gap-1 flex justify-center'>
    <button onClick={()=>setPageNumber(1)} className='border flex justify-center items-center rounded  align-middle h-10 w-10 focus:border-blue-500 cursor-pointer' >1</button>
    <button onClick={()=>setPageNumber(2)} className='border flex justify-center items-center rounded  align-middle h-10 w-10 focus:border-blue-500'>2</button>
    <button onClick={()=>setPageNumber(3)} className='border flex justify-center items-center rounded  align-middle h-10 w-10 focus:border-blue-500'>3</button>
    <button onClick={()=>setPageNumber(4)} className='border flex justify-center items-center rounded  align-middle h-10 w-10 focus:border-blue-500'>4</button>
    <button onClick={()=>setPageNumber(5)} className='border flex justify-center items-center rounded  align-middle h-10 w-10 focus:border-blue-500'>5</button>
    <button onClick={()=>setPageNumber(6)} className='border flex justify-center items-center rounded  align-middle h-10 w-10 focus:border-blue-500'>6</button>
</div>


      <Footer/>
    </div>
  )
}

export default Movies
