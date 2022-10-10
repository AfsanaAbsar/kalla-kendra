import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div class="header">
            <div className='logo'>
                <h1>Kalla Kendra</h1>
            </div>
            <div>
                <button className='header-btn'>Login</button>
                <button className='header-btn'>sign up</button>
            </div>
        </div>

    );
};

export default Header;