/* eslint-disable jsx-a11y/alt-text */
import React, { useContext } from 'react';
import './header.css'
import firebase from "firebase/app";
import logo from '../../logos/Group 1329.png'
import { userAuth } from '../../App';
import { Image, Nav, Navbar } from 'react-bootstrap';


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
         
         
            <Nav.Link className="btn"  href={'/'}>Home</Nav.Link>
                <Nav.Link className="btn">Donation</Nav.Link>
                <Nav.Link className="btn"  href={'/event'}>Event</Nav.Link>
                <Nav.Link className="btn">BLog</Nav.Link>
                <Nav.Link className="btn" href={'/reg'}  >Register</Nav.Link>
                <Nav.Link className="btn"  href={'/admin'}  >Admin</Nav.Link>
               
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