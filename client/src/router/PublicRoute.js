import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import withAuth from '../components/withAuth/withAuth'

const PrivateRoute = ({ auth, component, ...props }) => {
    return auth.user ? (
        <Redirect to="/" />
    ) : (
        <Route component={component} {...props} />
    )
}

export default withAuth(PrivateRoute)
