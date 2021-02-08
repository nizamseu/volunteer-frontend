import { Button, Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ButtonBase from '@material-ui/core/ButtonBase';
import { userAuth } from '../../App';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 2,
      marginLeft:'100px',
      marginTop:'50px'
    },
    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
      maxWidth: 500,
      display: 'inline-flex',
      margin:' 20px 20px 20px 30px',
      width: '45%',
      height: '200px',
      alignContent:'center',

    },
    imagee: {
      padding:10
    },
    img: {
      margin: 'auto',
      display: 'block',
      width:'200px',
      height: '150px',
     
    },
  }));




const EventTask = () => {
    const classes = useStyles();
    const [user,setUser]=useContext(userAuth)
    const [loadData,setLoadData]=useState([]);

    useEffect(()=>{
        fetch(`http://localhost:5000/users/eventTask/${user.email}`)
        .then(res=>res.json())
        .then(data=>{
            setLoadData(data)
        })
    },[])

const handleCancel=(id,event)=>{
    console.log("id",id);
    fetch(`http://localhost:5000/users/delete/${id}`,{
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
        <div className={classes.root}>

        {
            loadData&&
            loadData.map(item=> <Paper className={classes.paper}>
                <Grid container spacing={2}>
                  <Grid item>
                    <ButtonBase className={classes.imagee}>
                      <img className={classes.img} alt="complex" src={item.data.pic} />
                    </ButtonBase>
                  </Grid>
                  <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                      <Grid item xs>
                        <Typography gutterBottom variant="h5">
                          {item.data.Title}
                        </Typography>
                        <Typography variant="h6" gutterBottom>
                          {item.selectedDate.substring(0,10)}
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Button 
                        variant="contained" 
                        style={{ cursor: 'pointer',float:'right'}}
                        onClick={(event)=>{handleCancel(item._id,event)}}
                        >
                          Cancel
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>)
        }
    </div>
    );
};

export default EventTask;