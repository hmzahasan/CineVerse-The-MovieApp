import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import Trending from "../cards/Trending";
import HeroImg from "../cards/HeroImg";
import Navbar from "./Navbar";
import Trailers from "../cards/Trailers";
import Footer from "./Footer";


const Home = () => {

  const {moviesData,loading} = useContext(AuthContext);

  // console.log("Home movies:", loading);

  return (
    <div>
      <Navbar/>
      <HeroImg/>
      <h1 className="px-10 py-6 font-semibold text-3xl">Trending</h1>

      <Trending/>
      <Trailers/>

      <Footer/>
</div>
    
  );
};

export default Home;