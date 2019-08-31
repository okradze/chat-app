import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Firebase from '../Firebase/Firebase'
import LoginForm from '../LoginForm/LoginForm'
import SignupForm from '../SignupForm/SignupForm'

const Router = () => (
    <Firebase>
        <BrowserRouter>
            <Switch>
                <Route path="/login" component={LoginForm} />
                <Route path="/signup" component={SignupForm} />
            </Switch>
        </BrowserRouter>
    </Firebase>
)

export default Router
