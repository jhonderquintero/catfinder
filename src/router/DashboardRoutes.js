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
                        {/* <Route exact path='/marvel' component={MarvelScreen} />
                        <Route exact path='/dc' component={DcScreen} />
                        <Route exact path='/hero/:heroId' component={HeroesScreen} />
                        <Route exact path='/hero/API/:hero' component={HeroesScreen} /> */}
                        <Route exact path='/search' component={FilterCats} />
                        <Route exact path='/' component={Cats} />
                        <Redirect to='/'/>
                    </Switch>
            </main>

        </div>
    )
}