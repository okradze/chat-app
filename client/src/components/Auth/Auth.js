import React, { useState } from 'react'
import AuthContext from './Context'

const Auth = ({ children, user: userState }) => {
    const [user, setUser] = useState(userState)

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    )
}

export default Auth
