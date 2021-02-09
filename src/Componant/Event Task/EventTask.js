import { Button, Typography } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ButtonBase from '@material-ui/core/ButtonBase';
import { userAuth } from '../../App';
import { Col, Row } from 'react-bootstrap';


const useStyles = makeStyles((theme) => ({
    root: {
    
      marginTop:'50px',
      marginLeft:'5%',
      marginRight:'1%',
      
    },
    paper: {
      padding: theme.spacing(2),
      margin: '15px',
      paddin:'5px',
      display: 'inline-flex',
      width: '45%',
      height: '250px',
      alignContent:'center',
      boxShadow:'5px 7px 7px 5px gray'


    },
    imagee: {
      width:'250px',
      height: '200px',
    },
    img: {
      margin: 'auto',
      width:'100%',
      height: '100%',
     
    },
  }));




const EventTask = () => {
    const classes = useStyles();
    const [user,setUser]=useContext(userAuth)
    const [loadData,setLoadData]=useState([]);

    useEffect(()=>{
        fetch(`https://desolate-depths-30255.herokuapp.com/users/eventTask/${user.email}`)
        .then(res=>res.json())
        .then(data=>{
            setLoadData(data)
        })
    },[])

const handleCancel=(id,event)=>{
    console.log("id",id);
    fetch(`https://desolate-depths-30255.herokuapp.com/users/delete/${id}`,{
        method:'DELETE',
        headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
    })
    .then(re=>re.json())
    .then(result =>{
        if(result){
            event.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.style.display="none"
        }
    })
}



    console.log("backdata",loadData);
    return (
        <Row item xs={12} className={classes.root}>

        {
            loadData&&
            loadData.map(item=> <Col item xs={12} sm={5} className={classes.paper}>
              
                  
                    <Grid item xs={5} className={classes.imagee}>
                      <img className={classes.img} alt="complex" src={item.data.pic} />
                    </Grid>
                 
                  
                    
                      <Grid item xs={7} style={{padding:'20px',height:'100%'}}>
                        <Typography gutterBottom  variant='h5'>
                          {item.data.Title}
                        </Typography >
                        <Typography  gutterBottom>
                          {item.selectedDate.substring(0,10)}
                        </Typography>
                      
                       <Grid >
                       <Button
                        variant="contained" 
                        style={{float:'right',marginTop:'30%'}}
                        onClick={(event)=>{handleCancel(item._id,event)}}
                        >
                          Cancel
                        </Button>
                       </Grid>
                      </Grid>
                 
                  
                
              </Col>)
        }
    </Row>
    );
};

export default EventTask;