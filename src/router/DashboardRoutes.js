import React from 'react'
import {
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import Cats from '../components/ui/Cats';
import FilterCats from '../components/ui/FilterCats';
import NavBar from '../components/ui/NavBar';


export const DashboardRoutes = () => {

    return (
        <div>
            {/* Navigation Bar */}
            <NavBar /> 
            

            {/* MAIN CONTENT */}
            <main>
                    <Switch>
                        <Route exact path='/search' component={FilterCats} />
                        <Route exact path='/' component={Cats} />
                        <Redirect to='/'/>
                    </Switch>
            </main>

        </div>
    )
}