import React, { useEffect, useState } from 'react';
import { Card, Col} from 'react-bootstrap/';
import './body.css'
import {Link} from "react-router-dom";
import Spinner from '../../Spinner/Spinner';
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
        <div className='row'>
             {/* <Link to={'/addEvent'}> Add Event </Link>
             <Link to={'/event'}> Event Task </Link> */}
           
           {
               load.length ===0 && <Spinner></Spinner>
           }

            {load &&
                 load.map(item=>
                    <Col item sm={4} xs={6} md={3}  >
                <Link to={`/reg/${item._id}`}>
                         <Card className="cart bg-dark text-white"  >
                            <Card.Img  className ="cartImg"  src={item?.data?.pic} />
                                <Card.ImgOverlay className='overLay'  >
                                    <Card.Title className="design bg-primary text-white " >{item?.data?.title}</Card.Title>
                                   
                                </Card.ImgOverlay>
                        </Card>
                        </Link>
                        </Col>
                 )}
            
        </div>
    );
};

export default Body;