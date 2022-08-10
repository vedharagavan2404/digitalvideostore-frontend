import React,{useEffect,useContext} from 'react';
import Featuredfilms from '../components/Featuredfilms';
import Header from '../components/Header'
import Hero from '../components/Hero';
import digitalvideoContext from '../context/DigitalvideoContext';
import Featuredshows from '../components/Featuredshows';
import Contentsection from '../components/Contentsection';
import Footer from '../components/Footer';
import SearchBox from '../components/SearchBox';

const HomePage = () => {

    const{setMovies}=useContext(digitalvideoContext);

    useEffect(()=>{
      fetch("https://digital-video-streaming-store.herokuapp.com//allvideos")
      .then((res)=>{
        return res.json();
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
      <Hero/>
      <Featuredfilms/>
      <Featuredshows/>
      <Contentsection/>
      <Footer/>
    </div>
  )
}

export default HomePage
