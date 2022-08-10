import React, { useState, useContext } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import digitalvideoContext from '../context/DigitalvideoContext';
import { Redirect } from 'react-router';
import {useNavigate} from 'react-router-dom'
import DashboardPage from './DashboardPage';



const LoginPage = () => {


  const nav = useNavigate();

  const{loginDetails,setloginDetails}=useContext(digitalvideoContext);

  const submitLoginForm =(e)=>{
      e.preventDefault();

      
      fetch("http://digital-video-streaming-store.herokuapp.com/auth",{
      method : "POST",
      headers : {
        'Content-Type' : 'application/json'
      },
      body : JSON.stringify(loginDetails)
    }).then((res)=>{
      return res.json()
    }).
    then(data=>{
        setloginDetails({...loginDetails,
          id:data.body[0]
      })
      sessionStorage.setItem("id",data.body[0])
      alert(data.message)
      //window.location.href ="dashboard";
      nav("/dashboard");
      }).
      catch((err)=>{
        console.log(err.json());
    })
  }

  return (
    <div>
        <Header/>
        <div>
            <img src="https://www.kindpng.com/picc/m/192-1925162_login-icon-png-transparent-png.png" alt="login" class="avatar"/>
        </div>
        <div>
          <form action="/dashboard" method="POST" onSubmit={submitLoginForm}>
            <label for="email"><b>Email Address</b></label>
            <input type="text" placeholder="Enter your email" name="email" value={loginDetails.email} 
            onChange = {(event)=>{
              setloginDetails({
                ...loginDetails,
                email:event.target.value
              }) }} required/>
            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" value={loginDetails.password} 
            onChange = {(event)=>{
              setloginDetails({
                ...loginDetails,
                password:event.target.value
              }) }} required/>
            <button type="submit">Login</button>
          </form>
         
          
      
        <Footer/>
            
        </div>
        
    </div>
  )
}

export default LoginPage
