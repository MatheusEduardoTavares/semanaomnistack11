import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Logon from './pages/Logon'
import NewIncident from './pages/NewIncident'
import Profile from './pages/Profile'
import Register from './pages/Register'

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon}/>
                <Route path="/profile" component={Profile}/>
                <Route path="/register" component={Register}/>
                <Route path="/incidents/new" component={NewIncident}/>
            </Switch>
        </BrowserRouter>
    )
}