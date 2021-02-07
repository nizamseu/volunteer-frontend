import React, { useContext } from 'react';
import {Link} from "react-router-dom";
import './header.css'
import firebase from "firebase/app";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import logo from '../../logos/Group 1329.png'
import { Avatar, Typography } from '@material-ui/core';
import { userAuth } from '../../App';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    boxShadow:'none',
    backgroundColor:'transparent'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  but:{
    backgroundColor:'Black',
    color:"white"
  },
  but:{
    backgroundColor:'Black',
    color:"white",
   
  }
}));


const Header = () => {
    const classes = useStyles();
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
      
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          
          <Typography variant="h6" className={classes.title}>
         <Link to={'/'}> <img src={logo} style={{width:'200px'}} /></Link>
         
       

          </Typography>
            {
           user&& <Typography color="primary" className="mr-3"> {user.name}</Typography>
           }
              

          
          {
            user.email?<Link className="btn" onClick={()=>handleSignOut()}>Log Out</Link>
            :<Link className="btn" to={'/auth'}>LogIn</Link>
          } 

          <Link className="btn" to={'/'}>Home</Link>
          <Link className="btn">Donation</Link>
          <Link className="btn" to={'/event'}>Event</Link>
          <Link className="btn">BLog</Link>
          <Button href={'/reg'} className="mr-3" size ="large" variant="contained"  color="primary" >Register</Button>
          <Button  href={'/admin'} size ="large"  variant="contained" className={classes.but} >Admin</Button>
          {
                user&&   <Avatar alt="Nizam Uddin" className="ml-3" src={user.photo} />
          }
        </Toolbar>
      </AppBar>
    </div>
    );
};

export default Header;