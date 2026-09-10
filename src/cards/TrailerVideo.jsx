import React, { useState,useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { getVideos } from '../componenets/getData'
import Navbar from '../componenets/Navbar'
import Footer from '../componenets/Footer'
import Loading from '../componenets/Loading'
import { AuthContext } from '../context/AuthProvider'
const TrailerVideo = () => {
const {loading} =useContext(AuthContext)
    const {id}=useParams()
const[videos, setVideos]= useState([])
const[videoKey,setVideoKey]= useState()
      useEffect(()=>{
    
    const fetchDetails= async()=>{
    const moviesDetailData= await getVideos(id)
    const videosData = moviesDetailData.results;
    setVideos(videosData)
  
    
    const trailer= videosData.find((video)=>
        video.site==="YouTube" &&
        video.type==="Trailer",
        
    )
 
  
    const key= trailer.key
    setVideoKey(`https://www.youtube.com/embed/${key}`)
    
    }
   
    fetchDetails()
    
    },[id])
    
  
if(loading){
  return <Loading/>;
}
  return (
    <div >
        <Navbar/>
        <div className='flex justify-center relative mt-20 mb-20 '>
      <iframe 
       width="560"
  height="315"
  allowFullScreen
  title='Movie Trailer'
      src={`${videoKey}`} frameborder="0"></iframe>
      </div>
      <Footer/>
    </div>
  )
}

export default TrailerVideo
