import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import Firebase from '../components/Firebase/Firebase'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'
import Home from '../components/Home/Home'
import LoginForm from '../components/LoginForm/LoginForm'
import SignupForm from '../components/SignupForm/SignupForm'

const Router = () => (
    <BrowserRouter>
        <Firebase>
            <Switch>
                <PrivateRoute exact path="/" component={Home} />
                <PublicRoute exact path="/login" component={LoginForm} />
                <PublicRoute exact path="/signup" component={SignupForm} />
            </Switch>
        </Firebase>
    </BrowserRouter>
)

export default Router
