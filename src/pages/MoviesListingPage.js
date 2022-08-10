import Header from '../components/Header';
import React,{useEffect,useContext} from 'react';
import digitalvideoContext from '../context/DigitalvideoContext';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import SearchBox from '../components/SearchBox';
const MoviesListingPage = () => {

  const{movies,setMovies}=useContext(digitalvideoContext);

    useEffect(()=>{

        //Async operation  GET//POST,PUT OR DELETE
        fetch("http://digital-video-streaming-store.herokuapp.com/allvideos")
        .then((res)=>{
          return res.json()
        })
        .then(json=>{    
          setMovies(json);
        })
        .catch((err)=>{
          console.log(`Error ${err}`);
        })
  
      },[])


  return (
    <div>
      <Header/>
        <SearchBox/>
      <div className='movielistcontainer'>
      {movies.map((movie)=>(
        <Link to={`${movie.id}`}>
           <img src= {movie.image} className="movieList"/>
        </Link>
        ))}
      </div>
      <Footer/>
    </div>
  )
}

export default MoviesListingPage
