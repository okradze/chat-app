import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import Firebase from '../components/Firebase/Firebase'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'
import Home from '../components/Home/Home'
import LoginAndSignupPage from '../pages/LoginAndSignupPage/LoginAndSignupPage'

const Router = () => (
    <BrowserRouter>
        <Firebase>
            <Switch>
                <PrivateRoute exact path="/" component={Home} />
                <PublicRoute
                    exact
                    path="/login"
                    component={LoginAndSignupPage}
                />
            </Switch>
        </Firebase>
    </BrowserRouter>
)

export default Router
