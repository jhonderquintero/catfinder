import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGoogle} from '@fortawesome/free-brands-svg-icons'
import React from 'react'
import { faKey, faPaw, faUser } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
    let a = 1;
    let className;
    if(a===1){
        className = 'auth__login-form_element'
    }else{
        className = 'auth__login-form_element_wrong'
    }

    return (
        <div className='auth__login-body'>

                <form className='auth__login-wrapper'>
                    
                        <div className='auth__login-header'>
                            <FontAwesomeIcon icon={faPaw} className='icon'/>
                            <div className='pd-5'></div>
                            <h1>WELCOME</h1>
                        </div>

                        <div className='auth_login-form-group'>
                            <div className={className} >
                                    <FontAwesomeIcon icon={faUser} className='icon'/>
                                    <div className='pd-5'></div>
                                    <input type='text' name='name' required autoComplete='none' placeholder='Username'></input>
                            </div>

                            <div className='mg-20'></div>

                            <div className={className} >
                                <FontAwesomeIcon icon={faKey} className='icon'/>
                                <div className='pd-5'></div>
                                <input type='password' name='name' required id='password' placeholder='Password'></input>
                            </div>

                            <div className='mg-20'></div>

                            <div className='auth_login-button'>
                                <button className='button'>Login</button>
                            </div>

                            <div className='mg-20'></div>
                            

                            <div className='auth__social-network-login'>
                                
                                <p>Login with Social Network</p>
                                <div className='mg-20'></div>

                                <button className='button google-btn'>
                                    <FontAwesomeIcon icon={faGoogle} />
                                    <div className='pd-5'></div>
                                    <p>Sign in with google</p>
                                </button>
                            </div>
                        </div>
                </form>
        </div>
    );
};

export default Login;