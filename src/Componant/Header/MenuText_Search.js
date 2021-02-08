import React from 'react';
import './menu.css'

const MenuText_Search = () => {
    return (
        <div className='menuText'>
            <h1 >I GROW BY HELPING PEOPLE IN NEED</h1>
                <div className='menu'>
                    <input 
                    className='search'
                    type='text'
                    placeholder='Search...'
                    >       
                    </input >

                    <button  className='searchBtn'>
                    Search
                    </button>
                </div>
        </div>
    );
};

export default MenuText_Search;