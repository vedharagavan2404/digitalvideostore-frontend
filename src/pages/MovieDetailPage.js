import React from 'react'
import Header from '../components/Header';
import digitalvideoContext from '../context/DigitalvideoContext';
import { useParams } from 'react-router-dom';
import { useEffect,useState } from 'react';
import Footer from '../components/Footer';
import SearchBox from '../components/SearchBox';

//const {movies,setMovies} = useContext(digitalvideoContext)

const MovieDetailPage = () => {

    const [movies, setMovies] = useState({
        title :"",
        details:"",
        small_poster:"",
        large_poster :"",
        image:"",
        rent_amount : 0,
        purchase_amount:0
 })

 const {id} = useParams();

 useEffect(()=>{
    //Async operation GET
    fetch(`http://digital-video-streaming-store.herokuapp.com/movies/${id}`)
    .then((res)=>{
      return res.json()
    })
    .then(json=>{    
        //console.log(json.body[0]);
        setMovies(json.body[0]);
    })
    .catch((err)=>{
        console.log(`Error ${err}`);
    })
},[])

      return (
    <>
      <Header/>
      <SearchBox/>
              <div className='detailsection'>
              <div id="firstbox" className="detailscontainer">
              <img src = {movies.image} className='moviedetailimg'/>
              <div className='detailscontent'>
              <h2>{movies.title}</h2>
                <p>
                  Synopsis : {movies.details}
                </p>
              </div>
              
              </div>
              </div>
              <div>
              <div id="secondbox" className="smallposter">
              <img src={movies.small_poster} className='smallposterimg'/>
      
              <button type="submit">Rent:{movies.rent_amount.toFixed(2)}</button>
              <button type="submit">Purchase:{movies.purchase_amount}</button>
              
              </div>
              </div>
              
      <Footer/>
    </>
  )
}

export default MovieDetailPage
