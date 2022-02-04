import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import Customers from '../pages/Customers'
import Workers from './table/Workers'
import Users from './table/Users'
import AddMenu from './add/AddMenu'

const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Dashboard}/>
            <Route path='/customers' component={Customers}/>
            <Route path='/workers' component={Workers} />
            <Route path='/users' component={Users} />
            <Route path='/adduser' component={AddMenu}/>
        </Switch>
    )
}

export default Routes
