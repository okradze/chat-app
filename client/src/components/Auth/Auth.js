import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import AuthContext from './Context'

const Auth = ({ children }) => {
    const [user, setUser] = useState()

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    )
}

export default Auth
