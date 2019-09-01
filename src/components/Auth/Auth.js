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
                const { email, photoURL, uid, displayName } = user

                console.log(user.displayName, displayName)

                setUser({
                    uid,
                    displayName: user.displayName,
                    email,
                    photoURL:
                        'data:image/jpeg;base64,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',
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
            <ChildrenWithSpinner
                isLoading={loading}
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%,-50%)',
                }}
            />
        </AuthContext.Provider>
    )
}

export default withRouter(Auth)
