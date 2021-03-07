import {validateEmail, validatePasswordModerate} from '../../helpers/validation'
import { faKey, faPaw, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState} from 'react'
import AuthContext from '../../auth/AuthContext';
import LoginModalComponent from './LoginModal';
import { useForm } from '../../hooks/useForm';
import fetchUrl from '../../helpers/fetchUrl';
import GoogleLogin from 'react-google-login';
import { types } from '../../types/types';
import { Link } from 'react-router-dom';

// CONSTANT DECLARATIONS
const clientId = '890895167918-o17h2hmpatre78rjjd11o0rocf67pk53.apps.googleusercontent.com';
const initialState = {
    loginUsername: 'Email',
    loginPassword: 'Password'
};

// LOGIN COMPONENT
const Login = ({history}) => {
    const {dispatch} = useContext(AuthContext);
    const [modal, setModal] = useState(false);
    const [modal2, setModal2] = useState(false);

    // HANDLING USER CONTEXT
    const handleLoginStatus = (name, email='user_email', google='false') =>{
        let action = {
            type: types.login,
            payload: {
                name,
                email,
                google
            }
        };
        dispatch(action);
        history.replace('/');
    };

    // Execute onFailure when sometime failed in google auth 
    const onFailure = (response) => {
        console.log(`[LOGIN FAILED]`);
    };

    // Execute onSucess when google auth result succesfull
    const onSuccess = async({profileObj}) =>{
        const {givenName, familyName, email, googleId} = profileObj; //Obtain data from google
        let data = {
            body: {
                givenName,
                familyName,
                email,
                googleId,
            }
        };
        const response = await fetchUrl('api/auth/google/login', data).catch(() => {
        console.log(`[LOGIN FAILED]`);
        });
        
        if (typeof response === typeof {}){
            handleLoginStatus(response.data.user.givenName, response.data.user.email, true);
            history.replace('/');
        };
    };

    // Handle Login (Authentications)
    const [formLoginValues, handleInputLoginChange] = useForm(initialState);

    const {loginUsername, loginPassword} = formLoginValues;

    const handleLogin = async (e) =>{
        e.preventDefault();
        const validEmail = validateEmail(loginUsername);
        const validPassword = validatePasswordModerate(loginPassword);
        if(validEmail && validPassword){

            const data = {
                body: {
                    email: loginUsername,
                    password: loginPassword 
                }
            };

            const response = await fetchUrl('api/auth', data).catch( () =>
                {   if(modal){
                    setModal(false);
                    setModal2(true); 
                }else{
                    setModal2(false);
                    setModal(true);
                }
            });

            if(typeof response === typeof {}){
                handleLoginStatus(response.data.user.givenName, response.data.user.email);
                history.replace('/');
            };

        }else{
            if(modal){
                setModal(false);
                setModal2(true);
            }else{
                setModal2(false); 
                setModal(true);
            }
        };
    };

    return (
        <div className='auth__login-body'>

                <form className='auth__login-wrapper' onSubmit={handleLogin}>
                        <div className='mg-10'></div>
                        <div className='auth__login-header'>
                            <FontAwesomeIcon icon={faPaw} className='icon'/>
                            <div className='pd-5'></div>
                            <h1>WELCOME</h1>
                        </div>
                        <div className='mg-10'></div>

                        <div className='auth_login-form-group'>
                            <div className='auth__login-form_element' >
                                    <FontAwesomeIcon icon={faUser} className='icon'/>
                                    <div className='pd-5'></div>
                                    <input type='text' name='loginUsername' required autoComplete='none' placeholder='loginUsername' value={loginUsername} onChange={handleInputLoginChange}></input>
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

                            <div className='mg-10'></div>

                            <Link to='./register'>
                                Sign up here
                            </Link>

                            <div className='mg-10'></div>

                            <div className='auth__social-network-login'>
                                
                                <p>Login with Google</p>
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
                <LoginModalComponent show={modal2} />
        </div>
    );
};

export default Login;