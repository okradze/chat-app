import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import withAuth from '../components/withAuth/withAuth'

const PrivateRoute = ({ user, component, ...props }) => {
    return user ? (
        <Redirect to="/" />
    ) : (
        <Route component={component} {...props} />
    )
}

export default withAuth(PrivateRoute)
