import {validateEmail, validatePasswordModerate} from '../../helpers/validation'
import { faKey, faPaw, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState } from 'react'
import AuthContext from '../../auth/AuthContext';
import { useForm } from '../../hooks/useForm';
import GoogleLogin from 'react-google-login';
import { types } from '../../types/types';
import LoginModalComponent from './LoginModal';


// CONSTANT DECLARATIONS
const clientId = '890895167918-o17h2hmpatre78rjjd11o0rocf67pk53.apps.googleusercontent.com';
const initialState = {
    loginUsername: 'email',
    loginPassword: 'password'
};

const Login = React.memo(({history}) => {
    const {dispatch} = useContext(AuthContext);
    const [modal, setModal] = useState(false);

    // Handling User Context 
    const handleLoginStatus = () =>{
        let action = {
            type: types.login,
            payload: {
                name: 'somename',
                token: 'token'
            }
        };
        dispatch(action);
        // history.replace('/');
    };

    // Google login Functions
    const onFailure = (response) => {
        console.log(`[LOGIN FAILED]`);
    };

    const onSuccess = (response) =>{
        console.log(response.profileObj); //save to DB
        console.log(`[LOGIN SUCCESS]`);
    };

    // Handle Login

    const [formLoginValues, handleInputLoginChange] = useForm(initialState);

    const {loginUsername, loginPassword} = formLoginValues;

    const handleLogin = (e) =>{
        e.preventDefault();
        handleLoginStatus();
        const validEmail = validateEmail(loginUsername);
        const validPassword = validatePasswordModerate(loginPassword);
        if(validEmail && validPassword){
            console.log('Validation succesfull');
        }else{
            setModal(true);
            console.log('Email or Password incorrect');
        };
    };

    return (
        <div className='auth__login-body'>

                <form className='auth__login-wrapper' onSubmit={handleLogin}>
                    
                        <div className='auth__login-header'>
                            <FontAwesomeIcon icon={faPaw} className='icon'/>
                            <div className='pd-5'></div>
                            <h1>WELCOME</h1>
                        </div>

                        <div className='auth_login-form-group'>
                            <div className='auth__login-form_element' >
                                    <FontAwesomeIcon icon={faUser} className='icon'/>
                                    <div className='pd-5'></div>
                                    <input type='text' name='loginUsername' required autoComplete='none' placeholder='Email' value={loginUsername} onChange={handleInputLoginChange}></input>
                            </div>

                            <div className='mg-20'></div>

                            <div className='auth__login-form_element' >
                                <FontAwesomeIcon icon={faKey} className='icon'/>
                                <div className='pd-5'></div>
                                <input type='password' name='loginPassword' required id='password' placeholder='Password' value={loginPassword} onChange={handleInputLoginChange}></input>
                            </div>

                            <div className='mg-20'></div>

                            <div className='auth_login-button'>
                                <button className='button' onClick={handleLogin}>Login</button>
                            </div>

                            <div className='mg-20'></div>

                            <div className='auth__social-network-login'>
                                
                                <p>Login with Social Network</p>
                                <div className='mg-20'></div>

                                <GoogleLogin className='button google-btn'
                                    clientId={clientId}
                                    buttonText="Login"
                                    onSuccess={onSuccess}
                                    onFailure={onFailure}
                                    cookiePolicy={'single_host_origin'}
                                    isSignedIn={true}
                                />
                            </div>
                        </div>
                </form>
                
                <LoginModalComponent show={modal} />
        </div>
    );
});

export default Login;