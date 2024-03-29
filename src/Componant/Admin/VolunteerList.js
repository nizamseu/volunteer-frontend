import React, { useEffect, useState } from 'react';
import { Card,  Row, Table } from 'react-bootstrap';
import trash from '../../logos/trash-alt-regular.svg'
import Spinner from '../../Spinner/Spinner';
import './eventCreate.css'


const VolunteerList = () => {

    const [list,setList]=useState([])
  const handleDelete=(e,id)=>{
  console.log(e,id);
  fetch(`https://desolate-depths-30255.herokuapp.com/users/delete/${id}`,{
    method:'DELETE',
    body:{
      'Content-Type': 'application/json',
            'Accept': 'application/json'}
  })
  .then(res=>res.json())
  .then(result=>{
    if(result){
      e.target.parentNode.parentNode.parentNode.style.display='none'
    }
  })
  }
    useEffect(()=>{
        fetch('https://desolate-depths-30255.herokuapp.com/users/list')
        .then(res=>res.json())
        .then(data=>{
            setList(data)
        })

    },[])
    return (
<Row item xs={12}>
        <h4>Register Volunteer List</h4>
        {
          list.length===0 && <Spinner></Spinner>
        }

        {
        list&&
 <Table   class='table'>
  <thead   class="thead-dark "> 
    <tr>
      <th>#</th>
      <th>Name</th>
      <th>E-mail</th>
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
          <button 
          onClick={(e)=>handleDelete(e,item._id)}
          className='imgButton'><img  className='delImg'  src={trash} alt=""/></button>
          </td>
         
        </tr>
          )
      }
   
  
  </tbody>
</Table>
        }
        </Row>

    );
};

export default VolunteerList;