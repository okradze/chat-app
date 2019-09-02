import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'
import Home from '../components/Home/Home'
import LoginAndSignupPage from '../pages/LoginAndSignupPage/LoginAndSignupPage'

const Router = () => (
    <BrowserRouter>
        <Switch>
            <PrivateRoute exact path="/" component={Home} />
            <PublicRoute exact path="/login" component={LoginAndSignupPage} />
        </Switch>
    </BrowserRouter>
)

export default Router
