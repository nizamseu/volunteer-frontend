import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import trash from '../../logos/trash-alt-regular.svg'
import './eventCreate.css'


const VolunteerList = () => {

    const [list,setList]=useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/users/list')
        .then(res=>res.json())
        .then(data=>{
            setList(data)
        })

    },[])
    return (
        <div className='tbl'>
            <h4>Register Volunteer List</h4>

        <div className='tblInside'>

        {
        list&&
 <Table class="table" >
  <thead class="thead-dark " > 
    <tr>
      <th>#</th>
      <th>Name</th>
      <th>Email</th>
      <th>Registration Date</th>
      <th>Volunter LIst</th>
      <th>Action</th>
    </tr>
  </thead >
  <tbody>
      {
          list.map((item,index)=>
          <tr>
          <td>{index+1}</td>
          <td>{item?.data?.name}</td>
          <td>{item?.data?.email}</td>
          <td>{item?.selectedDate?.substring(0,10)}</td>
          <td>{item?.data?.Title}</td>
          <td>
          <button className='imgButton'><img  className='delImg'  src={trash} alt=""/></button>
          </td>
         
        </tr>
          )
      }
   
  
  </tbody>
</Table>
        }
        </div>

        </div>
    );
};

export default VolunteerList;