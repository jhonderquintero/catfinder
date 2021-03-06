import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPaw, faSignOutAlt, faSearch, faHome} from '@fortawesome/free-solid-svg-icons';
import AuthContext from '../../auth/AuthContext';
import { types } from '../../types/types';

export const NavBar = ({history}) => {

    const {dispatch} = useContext(AuthContext);

    const handleLogout = () =>{
        const action = {
            type: types.logout,
            payload: {
                name: 'somename',
                token: 'token'
            }
        }
        dispatch(action);
    };

    return (
        <header className='ui__navbar_header'>

            <div className='ui_navbar-logo'>
                <FontAwesomeIcon icon={faPaw} className='icon-logo'/>
                <div className='margin'></div>
                <h1>CatFinder </h1> 
            </div>

            <div></div>
            
            <nav className='ui__navbar-menu'>
                <Link to='./' className='ui__navbar_item-link'>
                    <button className='ui_navbar-button'>
                    <FontAwesomeIcon icon={faHome} className='icon'/>
                        <p className='ui_navbar-button-text'>Home</p>
                    </button>
                </Link>

                <div className='margin'>

                </div>

                <Link to='./search' className='ui__navbar_item-link'>
                    <button className='ui_navbar-button'>
                        <FontAwesomeIcon icon={faSearch} className='icon'/>
                        <p className='ui_navbar-button-text'>Search</p>
                    </button>
                </Link>

                <div className='margin'>

                </div>

                <Link to='./login' className='ui__navbar_item-link'>
                    <button className='ui_navbar-button' href='./login' onClick={handleLogout}>
                        <FontAwesomeIcon icon={faSignOutAlt} className='icon'/>
                        <p className='ui_navbar-button-text'>Logout</p>
                    </button>
                </Link>
            </nav>

        </header>
    );
};

export default NavBar;