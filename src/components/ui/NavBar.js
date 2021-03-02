import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPaw, faSignOutAlt} from '@fortawesome/free-solid-svg-icons';

export const NavBar = () => {
    return (
        <header className='ui__navbar_header'>

            <div className='ui_navbar-logo'>
                <FontAwesomeIcon icon={faPaw} className='icon'/>
                <div className='margin'></div>
                <h1>CatFinder App</h1> 
            </div>
            
            <nav className='ui__navbar-menu'>
                    <button className='button-header'>
                        <Link to='./' className='ui__navbar_item-link'>Home</Link>
                    </button>

                    <button className='button-header'>
                        <Link to='./search' className='ui__navbar_item-link'>
                            Search
                        </Link>
                    </button>
            </nav>

            <div className='ui_navbar-logout'>
                <button className='ui__navbar_item-link ' href='./login' >
                    <FontAwesomeIcon icon={faSignOutAlt} className='icon'/>
                    <Link to='./login' className='ui__navbar_item-link'>Logout</Link>
                </button>
            </div>

        </header>
    )
};

export default NavBar;