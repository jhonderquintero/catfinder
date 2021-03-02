import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Login from '../components/auth/Login';
import Register from '../components/auth/Register';
import { DashboardRoutes } from './DashboardRoutes';

export const AppRouter = () => {
    return (
        <>
            <Router>
                <div>
                    <Switch>
                        <Route exact={true} path='/login' component={Login} />
                        <Route exact={true} path='/register' component={Register} />
                        <Route path='/' component={DashboardRoutes} />
                    </Switch>
                </div>
            </Router>
        </>
    );
};