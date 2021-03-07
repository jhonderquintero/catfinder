import React, { useEffect, useReducer } from 'react'
import { authReducer } from './auth/authReducer';
import { AppRouter } from './router/AppRouter'
import AuthContext from './auth/AuthContext'
import './styles/index.scss'

const init = () => JSON.parse(localStorage.getItem('user')) || { logged: false };

  export const CatFinderApp = () => {

  const [user, dispatch] = useReducer(authReducer, {}, init);

  // save information about user in local storage
  useEffect(() => {
    localStorage.setItem( 'user', JSON.stringify(user));
  }, [user])

  return (
      <>
      <AuthContext.Provider value={{ user, dispatch }}>
        <AppRouter />
      </AuthContext.Provider>        
      </>
)};