import React from 'react';
import logo from '../../images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Header.css'
const Header = () => {
  
    return (
        <div className='header'>   
        <div>
            <img src={logo} alt="" />
            <nav className='nav-1'>
            <a href="/shop">Shop</a>
            <a href="/review">Order Review</a>
            <a href="/manage">Manage Inventory here</a>
            </nav>
        </div>
        <div>
            <div className='nav-2'>
                <input type="text" placeholder='type here to search' className='search'></input>
                <FontAwesomeIcon icon={faShoppingCart} className='icon'/>
           </div>
         
        </div>
        </div>
    );
};

export default Header;