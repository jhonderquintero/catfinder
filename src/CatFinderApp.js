import React, { useEffect, useReducer } from 'react'
import { AppRouter } from './router/AppRouter'
import './styles/index.scss'
import AuthContext from './auth/AuthContext'
import { authReducer } from './auth/authReducer';

const init = () => JSON.parse(localStorage.getItem('user')) || { logged: false };

  export const CatFinderApp = () => {

  const [user, dispatch] = useReducer(authReducer, {}, init);

  // save information about user in local storage
  useEffect(() => {
    localStorage.setItem( 'user', JSON.stringify(user) );
  }, [user])

  return (
      <>
      <AuthContext.Provider value={{ user, dispatch }}>
        <AppRouter />
      </AuthContext.Provider>        
      </>
)};