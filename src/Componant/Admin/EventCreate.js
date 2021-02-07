import React, {history , useState ,useEffect} from 'react';
import { useForm } from "react-hook-form";
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import { Button,Typography } from '@material-ui/core';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import './eventCreate.css'
import { useHistory } from 'react-router-dom';
const axios = require('axios');


const EventCreate = () => {
    const history=useHistory()
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDateChange = (date) => {    
           setSelectedDate(date);
         };

  const { register, handleSubmit, errors } = useForm();
        

      const onSubmit = (data,e) =>{
      const newData={data,selectedDate}

            axios.post(`http://localhost:5000/users/addevent`,newData)
            .then(result=>{
                console.log("Backed Data",result);
            })
            e.target.reset();
        } 

    return (
        <div >
         
   <Grid className='d-flex justify-content-center reg '>
        {/* <Button  onClick={()=>history.push('/')}>HOME</Button> */}
              <h1>Create An Event</h1>
   </Grid>
    <Grid className='d-flex justify-content-center reg'>

    <form onSubmit={handleSubmit(onSubmit)}>
    {/* <Typography>Tittle</Typography> */}
      <input 
      name="title" 
      ref={register({ required: true })} 
      placeholder="Event Tittle" />
      {errors.title && <span>Tittle is required</span>}
      
    <br/>  <br/>
    {/* <Typography>Description</Typography> */}
      <input
      name="description" 
      ref={register({ required: true })} 
      placeholder="Description" />
      {errors.title && <span>description is required</span>}

      <br/>  <br/>
      {/* <Typography>Image</Typography> */}
      <input 
      name="pic" 
      ref={register({ required: true })} 
      placeholder="Picture" />
      {errors.date && <span>Image is required</span>}

      <br/>  <br/>
      {/* <Typography>Date</Typography> */}
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          format="MM/dd/yyyy"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
      
      </MuiPickersUtilsProvider >

      <br/>  <br/>


      <Button type="submit">Sumit</Button>
      {/* <Input type="submit" /> */}
    </form>
    </Grid>
          
        </div>
    );
};

export default EventCreate;