import React, { useContext } from 'react'
import {
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import AuthContext from '../auth/AuthContext';
import Cats from '../components/ui/Cats';
import FilterCats from '../components/ui/FilterCats';
import NavBar from '../components/ui/NavBar';
import PrivateRoute from './PrivateRoute';
import { GoogleLogout } from 'react-google-login';
import { types } from '../types/types';

const clientId = '890895167918-o17h2hmpatre78rjjd11o0rocf67pk53.apps.googleusercontent.com';

export const DashboardRoutes = ({history}) => {

    const {user, dispatch} = useContext(AuthContext);

    const logout = () =>{
        let action = {
            type: types.logout,
            payload: {
                logged: false
            }
        };
        dispatch(action);
        history.push('/login');
    };

    return (
        <div>
            {/* Navigation Bar */}
            <NavBar /> 
            

            {/* MAIN CONTENT */}
            <main>
                    <Switch>
                        <Route exact path='/search' component={FilterCats} />
                        <PrivateRoute exact path='/' auth={user.logged} component={Cats} />
                        <Redirect to='/'/>
                    </Switch>
            </main>

            <GoogleLogout
            clientId={clientId}
            buttonText="Logout"
            onLogoutSuccess={logout}
            >
            </GoogleLogout>

        </div>
    )
}