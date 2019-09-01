import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import withAuth from '../components/withAuth/withAuth'

const PrivateRoute = ({ auth, component, ...props }) => {
    return auth.user ? (
        <Route component={component} {...props} />
    ) : (
        <Redirect to="/login" />
    )
}

export default withAuth(PrivateRoute)
