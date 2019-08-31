import React from 'react'
import ProfilePicture from '../ProfilePicture/ProfilePicture'
import Triangle from '../Triangle/Triangle'
import withAuth from '../withAuth/withAuth'
import withFirebase from '../withFirebase/withFirebase'
import './Header.scss'

const Header = ({ user, firebase }) => {
    const onLogout = async () => {
        await firebase.logout()
    }

    return (
        <header className="header">
            <input className="input" type="text" placeholder="search" />
            <div className="header__right">
                <ProfilePicture photoURL={user.photoURL} />
                <button type="button">
                    {user.displayName}
                    <Triangle direction="bottom" />
                </button>
                <button type="button" onClick={onLogout}>
                    Log Out
                </button>
            </div>
        </header>
    )
}

const HeaderWithAuth = withAuth(Header)

export default withFirebase(HeaderWithAuth)
