import React, {
    createContext,
    useEffect,
    useState
  } from "react";
  
  import { getMovies } from "../componenets/getData";
  
  export const AuthContext = createContext();
 
  
  const AuthProvider = ({ children }) => {
  
    const [moviesData, setMoviesData] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
  
      const fetchMovies = async () => {
        try {
          const data = await getMovies();
  
          
  
          setMoviesData(data);
  
        } catch (error) {
          console.log("Error:", error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchMovies();
  
    }, []);
  
    return (
      <AuthContext.Provider value={{moviesData,loading}}>
        {children}
      </AuthContext.Provider>
    );
  };
  
  export default AuthProvider;