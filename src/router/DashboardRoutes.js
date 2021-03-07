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

export const DashboardRoutes = ({history}) => {

    const {user} = useContext(AuthContext);

    return (
        <div>
            {/* Navigation Bar */}
            <NavBar /> 
            
            <main>
            {/* MAIN CONTENT */}
                    <Switch>
                        <Route exact path='/search' component={FilterCats} />
                        <PrivateRoute exact path='/' auth={user.logged} component={Cats} />
                        <Redirect to='/'/>
                    </Switch>
            </main>

        </div>
    );
};