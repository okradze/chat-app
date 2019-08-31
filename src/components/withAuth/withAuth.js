import React, { useContext } from 'react'
import AuthContext from '../Auth/Context'

const withAuth = Component => {
    const WithAuth = ({ ...props }) => {
        const { user, loading } = useContext(AuthContext)

        return <Component user={user} {...props} />
    }
    return WithAuth
}

export default withAuth
