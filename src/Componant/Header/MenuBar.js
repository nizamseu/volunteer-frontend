import React from 'react';
import { Card } from 'react-bootstrap';
import nature from '../../logos/nature.png'
import './menu.css'
import Header from './Header';
import Body from '../Body/Body';
import MenuText_Search from './MenuText_Search';
const MenuBar = () => {
    return (
        <div>
            
            <Card className="bg-dark text-white" style={{border:'none'}}>
                <Card.Img src={nature} style={{height:'500px'}} />
                <Card.ImgOverlay>
                    <Header></Header>
                   <MenuText_Search></MenuText_Search>

                    <Body></Body> 
                </Card.ImgOverlay>
            </Card>


        </div>
    );
};

export default MenuBar;