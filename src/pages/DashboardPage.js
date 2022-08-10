import React, { useEffect,useState,useContext } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { useParams } from 'react-router-dom';
import digitalvideoContext from '../context/DigitalvideoContext';

const DashboardPage = () => {
    const{loginDetails,setloginDetails}=useContext(digitalvideoContext);
    
    const[customer,setCustomer]=useState({
        id : "",
        userName : "",
        email : "",
        firstName : "",
        lastName : ""
    });

    
    useEffect(()=>{
        const id = sessionStorage.getItem("id")
        fetch(`http://digital-video-streaming-store.herokuapp.com/customers/${id}`)
        .then((res)=>{
          return res.json()
        })
        .then(json=>{    
            setCustomer(json.body[0]);
        })
        .catch((err)=>{
            console.log(`Error ${err}`);
        })
      },[])

  return (
    <div>
      <Header/>
      <div>
        <h3>Personal Information</h3> 
        <div>
            <label>First Name : </label> {customer.firstName} <br/><br/>
            <label>Last Name : </label> {customer.lastName}<br/><br/>
        </div>
        <label>Email : {customer.email}</label><br/><br/>
        <label>User Id : {customer.userName}</label><br/><br/>
          
      </div>
      <Footer/>
    </div>
  )
}

export default DashboardPage
