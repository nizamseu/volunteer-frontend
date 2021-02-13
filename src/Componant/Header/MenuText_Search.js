import React from 'react';
import './menu.css'

const MenuText_Search = (props) => {
    const handleSearch=props.handleSearch;
    return (
        <div className='menuText'>
            <h1 >I GROW BY HELPING PEOPLE IN NEED</h1>
                <div className='menu'>
                    <input onChange={handleSearch}
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