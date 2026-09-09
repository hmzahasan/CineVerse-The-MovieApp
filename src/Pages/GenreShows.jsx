import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getMoviesByGenre } from '../componenets/getData'
import { AuthContext } from '../context/AuthProvider'
import Navbar from '../componenets/Navbar'
import Footer from '../componenets/Footer'
import Loading from '../componenets/Loading'

const GenreShows = () => {

    const{id}=useParams()
    const[Id,setId]=useState()
    const[genre,setGenre]= useState([])

    const navigate = useNavigate()
   
const getDetails=(elem)=>{
  // console.log(elem.id)
navigate(`/movie/${elem.id}`)
}
    // setId(id)
const {loading} = useContext(AuthContext)
    useEffect(()=>{

        const getGenre = async()=>{
            const data= await getMoviesByGenre(id)
            setGenre(data)
            console.log(data)
        }
        
        getGenre()

    },[id])


    if (loading) {
        return <Loading/>;
      }
  return (
    <div>
        <Navbar/>
          <div className='flex flex-wrap justify-between p-4'>

{genre.map((elem)=>
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
      <Footer/>
    </div>
  )
}

export default GenreShows
