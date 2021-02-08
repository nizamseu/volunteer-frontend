/* eslint-disable jsx-a11y/alt-text */
import React, { useContext } from 'react';
import './header.css'
import firebase from "firebase/app";
import logo from '../../logos/Group 1329.png'
import { userAuth } from '../../App';
import { Image, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Header = () => {
  const [user,setUser]=useContext(userAuth);
  const handleSignOut=()=>{
    firebase.auth().signOut()
    .then(() => {
        const newUser ={
            name:'',
            email:'',
            photo:'',
        }
    setUser(newUser)
      })
    .catch((error) => {
        console.log(error);
      });
}

    return (
      <div >
      
      <Navbar collapseOnSelect expand="lg" bg="transparent" >
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          
     
             <Nav.Link to={'/'}> <img src={logo} style={{width:'200px'}} /></Nav.Link>
         
             <Nav className="justify-content-end" style={{ width: "100%" }}>
          {
           user&& <Nav.Link className="btn" > {user.name}</Nav.Link>
           }
         
         
            <Link className="btn"  to={'/home'}>Home</Link>
                <Link className="btn">Donation</Link>
                <Link className="btn"  to={'/event'}>Event</Link>
                <Link className="btn">BLog</Link>
                <Link className="btn" to={'/reg'}  >Register</Link>
                <Link className="btn"  to={'/admin'}  >Admin</Link>
               
                {
                user.email?<Nav.Link className="btn" onClick={()=>handleSignOut()}>Log Out</Nav.Link>
                :<Nav.Link className="btn"  href={'/auth'}>LogIn</Nav.Link>
                } 
               
                {
                      user.photo&&   <Image className='userPhoto'  src={user.photo} roundedCircle/>
                }
             
            </Nav>
        
        </Navbar.Collapse>
      </Navbar>
    </div>
    );
};

export default Header;