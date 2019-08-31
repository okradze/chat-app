import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Firebase from '../Firebase/Firebase'
import Home from '../Home/Home'
import LoginForm from '../LoginForm/LoginForm'
import SignupForm from '../SignupForm/SignupForm'

const Router = () => (
    <BrowserRouter>
        <Firebase>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/login" component={LoginForm} />
                <Route path="/signup" component={SignupForm} />
            </Switch>
        </Firebase>
    </BrowserRouter>
)

export default Router
