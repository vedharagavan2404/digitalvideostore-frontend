import React, { useEffect,useState } from 'react'
import { useContext } from 'react'
import digitalvideoContext from '../context/DigitalvideoContext'
import { Link } from 'react-router-dom'

const Featuredfilms = () => {
  const {featuredMovies, setfeaturedMovies} = useContext(digitalvideoContext);
   useEffect(()=>{
    fetch("http://digital-video-streaming-store.herokuapp.com/movies/featuredMovie?featured=true")
    .then((res)=>{
      return res.json()
    })
    .then(json=>{    
      setfeaturedMovies(json)
    })
    .catch((err)=>{
        console.log(`Error ${err}`);
    })
  },[])

  return (
    <div>
    <h1>Featured Movies</h1>

    <div className ="featuredmovieslist"> 
      {featuredMovies  ?  featuredMovies.map(movie=>(
      <div className ='image-container d-flex justify-content-start m-4'>
      <Link to={`movies/${movie.id}`}>
      <img src= {movie.image} className="featuredMovieImg"/>
      </Link>
      </div>
      
    )):null}
     
    </div>
    </div>
  )
}

export default Featuredfilms
