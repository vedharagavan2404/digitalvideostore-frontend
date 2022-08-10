import React, { useEffect,useState,useContext} from 'react'
import { Link } from 'react-router-dom';
import digitalvideoContext from '../context/DigitalvideoContext';

const Featuredshows = () => {
    const {featuredShows, setfeaturedShows} = useContext(digitalvideoContext);
    useEffect(()=>{
        fetch("http://digital-video-streaming-store.herokuapp.com/shows/featuredShow?featured=true")
        .then((res)=>{
          return res.json()
        })
        .then(json=>{    
          setfeaturedShows(json);
        })
        .catch((err)=>{
            console.log(`Error ${err}`);
        })
      },[])
    
  return (
    <div>
      <h1>Featured TV Shows</h1>
      <div className ="featuredmovieslist"> 
      {featuredShows ? featuredShows.map(tvshow=>(
      <div className ='image-container d-flex justify-content-start m-4'>
      <Link to={`movies/${tvshow.id}`}>
        <img src= {tvshow.image} className="featuredMovieImg"/>
      </Link>
      </div>
    )):null}
    </div>
    </div>
  )
}

export default Featuredshows
