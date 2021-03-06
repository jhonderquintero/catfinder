import React from 'react'
import { faKey, faPaw, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Register = () => {
    let className = 'auth__login-form_element'
    return (
        <div className='auth__login-body'>
            <form className='auth__login-wrapper'>
            <div className='mg-20'></div>
            
            <div className='auth__login-header'>
                <FontAwesomeIcon icon={faPaw} className='icon'/>
                <div className='pd-5'></div>
                <h1>REGISTER</h1>
            </div>
            <div className='mg-20'></div>

            <div className='auth_login-form-group'>
                <div className={className} >
                        <FontAwesomeIcon icon={faUser} className='icon'/>
                        <div className='pd-5'></div>
                        <input type='text' name='name' required id='name' placeholder='Name FamilyName' autoComplete='none'></input>
                </div>

                <div className='mg-20'></div>

                <div className={className} >
                    <FontAwesomeIcon icon={faUser} className='icon'/>
                    <div className='pd-5'></div>
                    <input type='text' name='familyName' required id='familyName' placeholder='Email' autoComplete='none'></input>
                </div>

                <div className='mg-20'></div>

                <div className={className} >
                    <FontAwesomeIcon icon={faKey} className='icon'/>
                    <div className='pd-5'></div>
                    <input type='password' name='name' required id='password' placeholder='Password'></input>
                </div>

                <div className='mg-20'></div>

                <div className={className} >
                    <FontAwesomeIcon icon={faKey} className='icon'/>
                    <div className='pd-5'></div>
                    <input type='password' name='name' required id='password2' placeholder='Repeat Password'></input>
                </div>

                <div className='mg-20'></div>

                <div className='auth_login-button'>
                    <button className='button'>Create</button>
                </div>

                    </div>
            </form>
        </div>
    )
}

export default Register;
