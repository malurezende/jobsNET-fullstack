import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route
  } from "react-router-dom";
import Home from '../pages/Home/home';
import SearchUser from '../pages/SearchUser/searchUser';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/search-user' exact component={SearchUser} />
        </Switch>
    </BrowserRouter>
)

export default Routes;