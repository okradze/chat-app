import React from 'react'
import Firebase from '../../firebase/firebase'
import Auth from '../Auth/Auth'
import FirebaseContext from './Context'

const FirebaseComponent = ({ children }) => {
    const firebase = new Firebase()

    return (
        <FirebaseContext.Provider value={firebase}>
            <Auth firebase={firebase}>{children}</Auth>
        </FirebaseContext.Provider>
    )
}

export default FirebaseComponent
