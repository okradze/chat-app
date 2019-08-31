import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import withSpinner from '../withSpinner/withSpinner'
import AuthContext from './Context'

const Auth = ({ children, history, firebase }) => {
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // setup listener on auth change
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

    // render children with spinner
    const ChildrenWithSpinner = withSpinner(() => children)

    return (
        <AuthContext.Provider value={user}>
            <ChildrenWithSpinner isLoading={loading} />
        </AuthContext.Provider>
    )
}

export default withRouter(Auth)
