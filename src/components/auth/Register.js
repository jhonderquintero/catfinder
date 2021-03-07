import React, {useState} from 'react'
import { faKey, faPaw, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { validateEmail, validatePasswordModerate, validateUsername } from '../../helpers/validation';
import RegisterModal from './registerModal';
import fetchUrl from '../../helpers/fetchUrl';

const initialState = {
    givenName: 'Name',
    givenFamilyName: 'FamilyName',
    userEmail: 'Email',
    password: 'Password'
};

const Register = ({history}) => {
    const [registerModal, setRegisterModal] = useState(false);
    const [registerModal2, setRegisterModal2] = useState(false);
    const [completeRegisterModal] = useState(false);
    
    // Handle Login (Authentications)
    const [formRegisterValues, handleInputRegisterChange] = useForm(initialState);

    const {givenName, givenFamilyName, userEmail, password} = formRegisterValues;

    const handleRegister = async(e) =>{
        e.preventDefault();
        const validName = validateUsername(givenName);
        const validFamilyName = validateUsername(givenFamilyName);
        const validEmail = validateEmail(userEmail);
        const validPassword = validatePasswordModerate(password);

        if(validName && validFamilyName && validEmail && validPassword){
            let data = {
                body: {
                    givenName,
                    familyName: givenFamilyName,
                    email: userEmail,
                    password
                }
            }

            const response = await fetchUrl('api/auth/register', data).catch(() => {
                console.log(`[LOGIN FAILED]`);
            });
            
            if(typeof response === typeof {}){
                console.log('Register complete');
                history.push('./login');
            }else{
                console.log('error');
            }

        }else{
            if(registerModal){
                setRegisterModal(false);
                setRegisterModal2(true); 
            }else{
                setRegisterModal2(false);
                setRegisterModal(true);
            }
        }
        
    };

    let className = 'auth__login-form_element'
    return (
        <div className='auth__login-body'>
            <form className='auth__login-wrapper' onSubmit={handleRegister}>

            <div className='mg-10'></div>
            <div className='auth__login-header'>
                <FontAwesomeIcon icon={faPaw} className='icon'/>
                <div className='pd-5'></div>
                <h1>REGISTER</h1>
            </div>
            <div className='mg-10'></div>

            <div className='auth_login-form-group'>
                <div className={className} >
                        <FontAwesomeIcon icon={faUser} className='icon'/>
                        <div className='pd-5'></div>
                        <input type='text' name='givenName' value={givenName}  required id='givenName' placeholder='givenName' autoComplete='none' onChange={handleInputRegisterChange}></input>
                </div>

                <div className='mg-10'></div>

                <div className={className} >
                        <FontAwesomeIcon icon={faUser} className='icon'/>
                        <div className='pd-5'></div>
                        <input type='text' name='givenFamilyName' value={givenFamilyName} required id='givenFamilyName' placeholder='FamilyName' autoComplete='none' onChange={handleInputRegisterChange}></input>
                </div>

                <div className='mg-10'></div>

                <div className={className} >
                    <FontAwesomeIcon icon={faUser} className='icon'/>
                    <div className='pd-5'></div>
                    <input type='text' name='userEmail' value={userEmail} required id='userEmail' placeholder='Email' autoComplete='none' onChange={handleInputRegisterChange}></input>
                </div>

                <div className='mg-10'></div>

                <div className={className} >
                    <FontAwesomeIcon icon={faKey} className='icon'/>
                    <div className='pd-5'></div>
                    <input type='password' name='password' value={password} required id='password' placeholder='Password' autoComplete='none' onChange={handleInputRegisterChange}></input>
                </div>

                <div className='mg-20'></div>

                <div className='auth_login-button'>
                    <button className='button'>Create</button>
                </div>
                
                <div className='mg-10'></div>

                <Link to='./login'> Sign In </Link>

                </div>
            </form>
            <RegisterModal show={registerModal} />
            <RegisterModal show={registerModal2} />
            <RegisterModal show={completeRegisterModal} />
        </div>
    )
}

export default Register;
