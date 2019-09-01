import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import withAuth from '../components/withAuth/withAuth'

const PrivateRoute = ({ user, component, ...props }) => {
    return user ? (
        <Route component={component} {...props} />
    ) : (
        <Redirect to="/login" />
    )
}

export default withAuth(PrivateRoute)
