import React, {history , useState ,useEffect} from 'react';
import { useForm } from "react-hook-form";
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import { Button,Input,Typography } from '@material-ui/core';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import './reg.css'
import { flexbox } from '@material-ui/system';
import { useHistory, useParams } from 'react-router-dom';
import logo from '../../logos/Group 1329.png'
const axios = require('axios');

const Register = () => {
    const history=useHistory()
    const {id}=useParams()
    const [loadData,setLoadData]=useState([])
console.log("load",loadData);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const handleDateChange = (date) => {    
           setSelectedDate(date);
         };

  const { register, handleSubmit, errors } = useForm();
        

      const onSubmit = (data,e) =>{
        console.log("data",data);
      const newData={data,selectedDate}
            axios.post(`http://localhost:5000/users/reg`,newData)
            .then(result=>{
                console.log("Backed Data",result);
            })
            e.target.reset();
            history.goBack()
        } 

        useEffect(()=>{
          fetch(`http://localhost:5000/users/loadData/${id}`)
          .then(res=>res.json())
          .then(data=>{
           setLoadData(data)
          })
        },[])
    return (
        <div className='regMain'>
    
            <Grid className='d-flex justify-content-center mb-3' >
            <img style={{width:'250px'}} src={logo} alt=""/>
            </Grid>
           <Grid className='d-flex justify-content-center reg'>
    <form onSubmit={handleSubmit(onSubmit)}>
        <h3>Register As Volunteer</h3>
        <br/><br/>
      <input
      name="name" 
      ref={register({ required: true })} 
      placeholder="Full Name" />
      {errors.title && <span>Name is required</span>}
      
    <br/>  <br/>
      <input
      name="email" 
      ref={register({ required: true })} 
      placeholder="User name or Email" />
      {errors.title && <span>Email is required</span>}
      
    <br/>  <br/>


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


      <input
      name="description" 
      ref={register({ required: true })} 
      placeholder="Description" />
      {errors.title && <span>description is required</span>}

      <br/>  <br/>
 
      <input 
      name="Title" 
      ref={register({ required: true })} 
      defaultValue={loadData?.data?.title}
      placeholder="Title" />
      {errors.date && <span>Title is required</span>}
          
      <br/>  <br/><br/>


      <input 
      name="pic" 
      ref={register({ required: true })} 
      defaultValue={loadData?.data?.pic}
      type='hidden'
      />
      {errors.date && <span>Title is required</span>}
      <br/>

      <Button variant="contained" color="primary" fullWidth='true' type="submit">Sumit</Button>
      
    </form>
    
    </Grid>
    
        </div>
    );
};

export default Register;