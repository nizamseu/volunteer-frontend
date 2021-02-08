import { Button, Grid} from '@material-ui/core';
import React, { useState } from 'react';
import EventCreate from './EventCreate';
import VolunteerList from './VolunteerList';
import AddIcon from '@material-ui/icons/Add';
import GroupIcon from '@material-ui/icons/Group';
import './eventCreate.css'
import logo from '../../logos/Group 1329.png'
import { Link } from 'react-router-dom';

const Admin = () => {
const [toggled,setToggled]=useState(true)

    return (
        <div>
        <Grid container spacing={3}>
            <Grid item xs={3} className='authLogo'>
               <Link to={'/'}><img src={logo} alt=""/></Link> 
            <Grid className='leftMenu'>
            <Button 
                onClick={()=>setToggled(true)}
                startIcon={<GroupIcon />}
                color="primary">
                 Volunteer List
                </Button>
                <br/>
                <Button 
                onClick={()=>setToggled(false)}
                startIcon={<AddIcon />}
                color="primary">
                Add Event
                </Button>

            </Grid>
            </Grid>


            <Grid item xs={9} >

               <Grid className='rigthMenu' >
               {
                     toggled
                     ? <VolunteerList></VolunteerList>
                     :<EventCreate></EventCreate>
                 }
               </Grid>

                 
                
            </Grid>
        </Grid>
        </div>
    );
};

export default Admin;