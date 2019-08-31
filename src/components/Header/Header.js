import React from 'react'
import ProfilePicture from '../ProfilePicture/ProfilePicture'
import withAuth from '../withAuth/withAuth'
import withFirebase from '../withFirebase/withFirebase'

const Header = ({ user, firebase }) => {
    const onLogout = async () => {
        await firebase.logout()
    }

    return (
        <header className="header">
            <input type="text" placeholder="search" />
            {user ? (
                <ProfilePicture photoURL={user.photoURL} />
            ) : (
                <p>Loading...</p>
            )}
            <button type="button" onClick={onLogout}>
                Log Out
            </button>
        </header>
    )
}

const HeaderWithAuth = withAuth(Header)
const HeaderWithFirebase = withFirebase(HeaderWithAuth)

export default HeaderWithFirebase
