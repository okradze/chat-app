import React, { useContext } from 'react'
import AuthContext from '../Auth/Context'

const withAuth = Component => {
    const WithAuth = ({ ...props }) => {
        const auth = useContext(AuthContext)

        return <Component auth={auth} {...props} />
    }
    return WithAuth
}

export default withAuth
