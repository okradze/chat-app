import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Firebase from '../components/Firebase/Firebase'
import PrivateRoute from './PrivateRoute'
import Home from '../components/Home/Home'
import LoginForm from '../components/LoginForm/LoginForm'
import SignupForm from '../components/SignupForm/SignupForm'

const Router = () => (
    <BrowserRouter>
        <Firebase>
            <Switch>
                <PrivateRoute exact path="/" component={Home} />
                <Route path="/login" component={LoginForm} />
                <Route path="/signup" component={SignupForm} />
            </Switch>
        </Firebase>
    </BrowserRouter>
)

export default Router
