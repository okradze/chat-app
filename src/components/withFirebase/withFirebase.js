import React, { useContext } from 'react'
import FirebaseContext from '../Firebase/Context'

const withFirebase = Component => {
    const WithFirebase = ({ ...props }) => {
        const firebase = useContext(FirebaseContext)

        return <Component firebase={firebase} {...props} />
    }
    return WithFirebase
}

export default withFirebase
