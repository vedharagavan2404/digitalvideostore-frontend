import React from 'react'
import { Navbar, Nav, NavLink } from 'react-bootstrap';
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


const Header = () => {
  return (
    <header>
           <Navbar className="navbar" collapseOnSelect expand="sm" bg="dark" variant="dark">
             <Navbar.Toggle aria-controls="navbarScroll" data-bs-target="#navbarScroll"/>
             <Navbar.Collapse id="navbarScroll">
            <Nav>
            <h1> <NavLink eventKey="1" as={Link} to="/">Digital Video Store</NavLink></h1> 
              <NavLink eventKey="2" as={Link} to="/movies"  >Movies</NavLink>
              <NavLink eventKey="3" as={Link} to="/signin"  >Login</NavLink>
              <NavLink eventKey="4" as={Link} to="/signup" >Sign Up</NavLink>
            </Nav>
            </Navbar.Collapse>
           </Navbar>
              
            
           
    </header>
  )
}

export default Header
