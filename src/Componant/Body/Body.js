import { Button} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Card, CardGroup} from 'react-bootstrap/';
import './body.css'
import {Link} from "react-router-dom";
const Body = () => {
    const [load,setLoad]=useState([]);

    useEffect(()=>{
        fetch(`https://desolate-depths-30255.herokuapp.com/users/find`)
        .then(res=>res.json())
        .then(data=>{
           
            setLoad(data)
        })
    },[])
    return (
        <div className='container'>
             {/* <Link to={'/addEvent'}> Add Event </Link>
             <Link to={'/event'}> Event Task </Link> */}
           
           

            {load &&
                 load.map(item=>
                <Link to={`/reg/${item._id}`}>
                         <Card  className="cart bg-dark text-white" style={{ width: '15rem'}}>
                            <Card.Img  style={{ width: '15rem',height:'18rem'}}  src={item?.data?.pic} />
                                <Card.ImgOverlay className='overLay'  >
                                    <Card.Title className="design bg-primary text-white " >{item?.data?.title}</Card.Title>
                                   
                                </Card.ImgOverlay>
                        </Card>
                        </Link>
                 )}
            
        </div>
    );
};

export default Body;