import React from 'react'
import Firebase from '../../firebase/firebase'
import FirebaseContext from './Context'

const FirebaseComponent = ({ children }) => (
    <FirebaseContext.Provider value={new Firebase()}>
        {children}
    </FirebaseContext.Provider>
)

export default FirebaseComponent
