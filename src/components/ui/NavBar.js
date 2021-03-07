import React, { useContext } from 'react'
import { Link, useHistory} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPaw, faSignOutAlt, faSearch, faHome} from '@fortawesome/free-solid-svg-icons';
import AuthContext from '../../auth/AuthContext';
import { GoogleLogout } from 'react-google-login';
import { types } from '../../types/types';
import axios from 'axios';
import qs from 'qs';
const clientId = '890895167918-o17h2hmpatre78rjjd11o0rocf67pk53.apps.googleusercontent.com';
const url='https://cat-finder-backend.herokuapp.com';

export const NavBar = () => {
    const history = useHistory();
    const {dispatch} = useContext(AuthContext);
    const logout = () =>{
        let action = {
            type: types.logout,
            payload: {
                logged: false
            }
        };
        dispatch(action);
        let email = localStorage.getItem('user');
        email = JSON.parse(email).email;
        let data = qs.stringify({
            'email': email
        });
        let config = {
            method: 'put',
            url: `${url}/api/auth/logout`,
            headers: { },
            data : data
        };
        axios(config)
        .then(() => {
            console.log('Logout sucessfull');
        })
        .catch((err) => {
            console.log(err);
        });
        history.replace('/');
    };

    return (
        <header className='ui__navbar_header'>

            <div className='ui_navbar-logo'>
                <FontAwesomeIcon icon={faPaw} className='icon-logo'/>
                <div className='margin'></div>
                <h1 className='ui_navbar-title'>CatFinder </h1> 
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

                <GoogleLogout
                render={renderProps => (
                    <button className='ui_navbar-button' href='./login' onClick={renderProps.onClick} disabled={renderProps.disabled}>
                        <FontAwesomeIcon icon={faSignOutAlt} className='icon'/>
                        <p className='ui_navbar-button-text'>Logout</p>
                    </button>
                )}
                
                clientId={clientId}
                buttonText="Logout"
                onLogoutSuccess={logout}
                >
                </GoogleLogout>
            </nav>
        </header>
    );
};

export default NavBar;