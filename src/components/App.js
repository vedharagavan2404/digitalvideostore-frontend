import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import {useState} from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react'
import HomePage from '../pages/HomePage'
import MoviesListingPage from "../pages/MoviesListingPage";
import MovieDetailPage from "../pages/MovieDetailPage";
import LoginPage from "../pages/LoginPage";
import RegistrationPage from "../pages/RegistrationPage";
import DashboardPage from "../pages/DashboardPage";

import digitalvideoContext from "../context/DigitalvideoContext";

import "../assets/css/App.css"

const App = () => {
  const [movies, setMovies] = useState([]);

  const[loginDetails, setloginDetails] = useState({
    email : "",
    password : "",
    id : ""
  })

  const [featuredShows, setfeaturedShows] = useState([]);

  const [featuredMovies, setfeaturedMovies] = useState([]);

  return (

    <digitalvideoContext.Provider value = {{movies, setMovies,loginDetails,setloginDetails,
    featuredShows,setfeaturedShows,featuredMovies, setfeaturedMovies }}>

      <BrowserRouter>
      
      <Routes>
          <Route path = "/" element = {<HomePage />}/>
          <Route path = "/movies" element = {<MoviesListingPage/>}/>
          <Route path = "/movies/:id" element = {<MovieDetailPage/>}/>
          <Route path = "/signin" element = {<LoginPage/>}/>
          <Route path = "/signup" element = {<RegistrationPage/>}/>
          <Route path = "/dashboard" element = {<DashboardPage/>}/>
      </Routes>

      </BrowserRouter>

    </digitalvideoContext.Provider>
  )
}

export default App
