import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const RegistrationPage = () => {

  const[customers, setCustomers] = useState({
    userName : "",
    email : "",
    password : "",
    firstName: "",
    lastName:""
  })

  const submitForm =(e)=>
  {
     e.preventDefault();
      fetch("http://digital-video-streaming-store.herokuapp.com/customers", {
        method : "POST",
        headers : {
          'Content-Type' : 'application/json'
        },
        body : JSON.stringify(customers)
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data.body[0].userName)
        alert(`The user ${data.body[0].userName} has been created!!`)
      })
      .catch(err=>console.log(`Error : ${err}`));
  }


  return (
    <div>
      <Header/>
    <div>
            <h1>Registration</h1>
            <p>Please enter the below details to register yourself</p>
        <form action="/" method="POST" onSubmit={submitForm}>

        
        <label for="uname"><b>User Name</b></label>
            <input type="text" placeholder="Enter your name" name="uname" value = {customers.userName} 
            onChange = {(event)=>{
              setCustomers({
                ...customers,
                userName:event.target.value
              })
            }} required/>

        <label for="email"><b>Email</b></label>
            <input type="text" placeholder="Enter your email id" name="email" value = {customers.email} 
            onChange = {(event)=>{
              setCustomers({
                ...customers,
                email :event.target.value
              })
            }} required/>   

        <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" value = {customers.password} 
            onChange = {(event)=>{
              setCustomers({
                ...customers,
                password:event.target.value
              })
            }} required/>

        <label for="fname"><b>First Name</b></label>
            <input type="text" placeholder="First Name" name="fname" value = {customers.firstName} 
            onChange = {(event)=>{
              setCustomers({
                ...customers,
                firstName:event.target.value
              })
            }}
            required/>

        <label for="lname"><b>Last Name</b></label>
            <input type="text" placeholder="Last Name" name="lname" value = {customers.lastName} 
            onChange = {(event)=>{
              setCustomers({
                ...customers,
                lastName:event.target.value
              })
            }} required/>

        <input type="checkbox" checked="checked" name="remember"/>
        <label>I confirm that I read the terms and conditions and agree on the same</label>
           

        <div className="clearfix">
            <button type="submit" className="signupbtn">Sign Up</button>
        </div>
        </form> 
    </div>
      <Footer/>
    </div>
  )
}

export default RegistrationPage
