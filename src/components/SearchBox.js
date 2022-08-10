import React, { useState, useContext, useRef, useEffect } from 'react'
import digitalvideoContext from '../context/DigitalvideoContext';
import { flushSync } from 'react-dom';




const SearchBox = () => {
    const{setMovies,setfeaturedMovies,setfeaturedShows} = useContext(digitalvideoContext);
    const[searchText,setSearchText] = useState("");

    const isFirstRender = useRef(true);
    const mutationRef = useRef(searchText);

    useEffect(() => {
        if (isFirstRender.current) {
          isFirstRender.current = false;
        } else {
          //console.log(searchText);
          getMovies();
        }
      }, [searchText]);

    const getMovies =()=>{
        fetch(`http://digital-video-streaming-store.herokuapp.com/movies/title?titl=${searchText}`)
        .then((res)=>{
          return res.json();
        })
        .then(json=>{  
          //console.log(json);
          setMovies(json);
        })
        .catch((err)=>{
          console.log(`Error ${err}`);
        });

    fetch(`http://digital-video-streaming-store.herokuapp.com/movies/featuredMovieWithTitle?titl=${searchText}`)
    .then((res)=>{
      return res.json()
    })
    .then(json=>{    
      setfeaturedMovies(json)
    })
    .catch((err)=>{
        console.log(`Error ${err}`);
    })

    fetch(`http://digital-video-streaming-store.herokuapp.com/movies/featuredShowWithTitle?titl=${searchText}`)
    .then((res)=>{
      return res.json()
    })
    .then(json=>{    
        setfeaturedShows(json)
    })
    .catch((err)=>{
        console.log(`Error ${err}`);
    })

    }

    

  return (
    <div>
      <input type="text" placeholder="Search Here" name="search" value={searchText} 
            onChange = {(event)=>{
                setSearchText(event.target.value);
}} />
    </div>
  )
}

export default SearchBox
