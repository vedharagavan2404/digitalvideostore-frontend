import React, { useState, useContext } from "react";
import digitalvideoContext from "../context/DigitalvideoContext";
import { Link } from "react-router-dom";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import Carousel from "react-bootstrap/Carousel";

const Hero = () => {
  const { movies } = useContext(digitalvideoContext);
  let newArray = movies.filter((movie) => movie.mostDemanded == true);
  //console.log(newArray)
  const [current, setCurrent] = useState(0);
  const length = newArray.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(newArray) || newArray.length <= 0) {
    return null;
  }

  return (
    <section className='slider'>
      <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
      <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />

    {movies.filter(movie=>movie.mostDemanded==true).map((filteredList,index)=>(
      <div className={index === current ? 'slide active' : 'slide'} key={index}>
      {index===current && (<Link to={`movies/${filteredList.id}`}>
      <img src= {filteredList.image} alt='travel image' className='sliderImage'/>
    </Link>)}
    </div>
    ))}
    </section>

    //  <Carousel>
    //   {movies
    //     .filter((movie) => movie.mostDemanded == true)
    //     .map((filteredList) => {
    //         // console.log(filteredList);
          
    //         return <Carousel.Item style={{height: "500px"}} interval={1000000000}>
    //       <img
    //           className="d-block w-100"
    //           key={filteredList.id}
    //           src={filteredList.image}
    //         />
    //       </Carousel.Item>;
    //     })}
    // </Carousel>
  );
};

export default Hero;
