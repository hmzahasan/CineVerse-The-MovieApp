import React, { useContext, useEffect, useState } from 'react'
import { getVideos, recommendations, searchMovies } from '../componenets/getData'
import { useNavigate, useParams } from 'react-router-dom'
import Navbar from '../componenets/Navbar'
import Footer from '../componenets/Footer'
import Loading from '../componenets/Loading'
import { AuthContext } from '../context/AuthProvider'

const SearchPage = () => {
    const {search} =useParams()
    const [results, setResults] = useState([]);
    const[recommend,setRecommend]=useState([])
    const {loading}= useContext(AuthContext)
const navigate= useNavigate()
    const getDetails=(elem)=>{
      
    navigate(`/movie/${elem.id}`)
    }

useEffect(()=>{
const getSearchedMovie= async()=>{
  if (search.trim() === "") {
    setResults([]);
    return;
  }

  const data = await searchMovies(search);
  setResults(data);
  
  const Id = data[0].id
  
  const getRecommendation= async()=>{
    const data1= await recommendations(Id)
    setRecommend(data1)
   
  }
  getRecommendation()
}
getSearchedMovie()

},[search])


if (loading) {
  return <Loading/>;
}
    
return (
    <div>
      <Navbar/>
      <h1 className='px-10 mt-15 font-semibold text-2xl'>Searched Results</h1>
  <div className="px-3 mt-20 mb-20 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
    {results.map((elem)=>(
<div key={elem.id} className="flex flex-col">

<img className="h-60 min-h-50  min-w-40 rounded-2xl object-fill hover:cursor-pointer transition-transform duration-300 hover:scale-105"
src={`https://image.tmdb.org/t/p/original${elem.poster_path}`}
alt={elem.title}
onClick={()=>getDetails(elem)}
/>
<h1 className="hover:text-blue-800 hover:underline w-fit cursor-pointer font-semibold">{elem.title}</h1>
<p className="text-lg">{elem.release_date}</p></div>
    ))}
    

   
  </div>


<hr className='text-gray-300  ml-15 mr-15'/>
<h1 className='text-2xl font-semibold mb-5 mt-5 px-10'>Recommended Videos</h1>
<h1 className='px-10 mb-2 text-lg font-medium italic '> If you like {search}, you might also like...</h1>
  <div className="px-10  flex gap-5 overflow-auto scrollbar-thumb-black mb-10">
      {recommend.map((elem)=>(
<div key={elem.id} className="flex flex-col">
  
<img className="h-60 min-h-50  min-w-40 rounded-2xl object-cover hover:cursor-pointer transition-transform duration-300 hover:scale-105"
src={`https://image.tmdb.org/t/p/original${elem.poster_path}`}
alt={elem.title}
onClick={()=>getDetails(elem)}
/>
<h1 className="hover:text-blue-800 hover:underline w-fit cursor-pointer font-semibold">{elem.title}</h1>
<p className="text-lg">{elem.release_date}</p></div>
      ))}
      

     
    </div>

  <Footer/>
  </div>
);
}

export default SearchPage
