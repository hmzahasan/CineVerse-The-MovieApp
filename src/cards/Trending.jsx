import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";
import Loading from "../componenets/Loading";




const Trending = () => {
const navigate = useNavigate()
   
const getDetails=(elem)=>{
  
navigate(`/movie/${elem.id}`)
}

  const { moviesData, loading } = useContext(AuthContext);

  if (loading) {
    return <Loading/>;
  }

  if (!moviesData.length) {
    return <h1>No movies found</h1>;
  }

 
  return (
    
    <div className="px-10  flex gap-5 overflow-auto scrollbar-thumb-black mb-10">
      {moviesData.map((elem)=>(
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
  );
};

export default Trending;