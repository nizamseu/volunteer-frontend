import React, { useContext } from 'react';
import { userAuth } from '../../App';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './config';
import {  Grid, Typography } from '@material-ui/core';
import Google from '../../logos/google.png'
import logo from '../../logos/Group 1329.png'
import '../Register/reg.css'
import { useHistory,Link,useLocation } from 'react-router-dom';


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
 }


const Auth = () => {

const [user,setUser]=useContext(userAuth)
const provider = new firebase.auth.GoogleAuthProvider();


const history=useHistory();
const location=useLocation();
const { from } = location.state || { from: { pathname: "/" } };


const handleSignIn =()=>{
   firebase.auth().signInWithPopup(provider)
  .then((result) => {
      const {displayName,email,photoURL}=result.user;
      const newUser ={
          name:displayName,
          email:email,
          photo:photoURL,
      }
    setUser(newUser);
    history.replace(from);
    console.log("meee",result);
  })
  .catch((error) => {
    console.log(error);
  })
}

 
    return (
        <div >
           <Grid className='  d-flex justify-content-center authLogo'>
            <Link to={'/'}><img src={logo} alt=""/></Link> 
             </Grid>
            <Grid direction='column' xs={12} className=' auth-main d-flex justify-content-center reg'>
            
           <Grid container
            direction="column"
            justify="center"
            alignItems="center"
            startIcon={Google}
            > 

          <h4 className='logTex' > Login With </h4>
           <button 
           className='auth' variant="outlined" onClick={()=>handleSignIn()}>
            <img className='gLogo' src={Google} alt=""/>
             Continue with Google
            </button>
            <Typography className='account'>Don't have an account? <Link>Create an account</Link></Typography>
            {/* <Button onClick={()=>handleSignOut()}>SignOut</Button> */}
           </Grid>
           
            </Grid>
           
        </div>
    );
};

export default Auth;