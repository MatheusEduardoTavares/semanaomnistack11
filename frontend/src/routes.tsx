import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Logon from './pages/Logon'
import NewIncident from './pages/NewIncident'
import Profile from './pages/Profile'
import Register from './pages/Register'

import PrivateRoute from './privateRoute/PrivateRoute'
import {isAuthenticated} from './privateRoute/isAuthenticated'

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon}/>
                <PrivateRoute path="/profile" component={Profile} redirectPath="/" isAuth={isAuthenticated()}/>
                <Route path="/register" component={Register}/>
                <PrivateRoute path="/incidents/new" component={NewIncident} redirectPath="/" isAuth={isAuthenticated()}/>
            </Switch>
        </BrowserRouter>
    )
}