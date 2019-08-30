import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Firebase from '../Firebase/Firebase'
import LoginForm from '../LoginForm/LoginForm'

const Router = () => (
    <Firebase>
        <BrowserRouter>
            <Switch>
                <Route path="/" component={LoginForm} />
            </Switch>
        </BrowserRouter>
    </Firebase>
)

export default Router
