import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import AuthContext from './Context'

const Auth = ({ children, history, firebase }) => {
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const unsubscribe = firebase.auth.onAuthStateChanged(user => {
            if (user) {
                const { displayName, email, photoURL, uid } = user

                setUser({
                    uid,
                    displayName,
                    email,
                    photoURL,
                })

                setLoading(false)

                history.push('/')
            } else {
                setUser(null)
                setLoading(false)
                history.push('/login')
            }
        })
        return () => {
            unsubscribe()
        }
    }, [])

    return (
        <AuthContext.Provider value={{ user, loading }}>
            {children}
        </AuthContext.Provider>
    )
}

export default withRouter(Auth)
