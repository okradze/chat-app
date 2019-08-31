import React from 'react'
import FirebaseContext from './Context'
import Firebase from '../../firebase/firebase'

const FirebaseComponent = ({ children }) => (
    <FirebaseContext.Provider value={new Firebase()}>
        {children}
    </FirebaseContext.Provider>
)

export default FirebaseComponent
