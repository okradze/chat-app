import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import AuthContext from './Context'

const Auth = ({ children, history, firebase }) => {
    const [user, setUser] = useState(null)

    useEffect(() => {
        const unsubscribe = firebase.auth.onAuthStateChanged(user => {
            if (user) {
                const { displayName, email, photoURL } = user

                setUser({
                    displayName,
                    email,
                    photoURL,
                })

                history.push('/')
            } else {
                setUser(null)
                history.push('/login')
            }
        })
        return () => {
            unsubscribe()
        }
    }, [])

    return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>
}

export default withRouter(Auth)
