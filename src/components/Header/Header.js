import React from 'react'
import ProfilePicture from '../ProfilePicture/ProfilePicture'
import Triangle from '../Triangle/Triangle'
import Button from '../Button/Button'
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
                <Button className="header__button" color="transparent">
                    {user.displayName}
                    <Triangle direction="bottom" />
                </Button>
                <Button color="transparent" onClick={onLogout}>
                    Log Out
                </Button>
            </div>
        </header>
    )
}

const HeaderWithAuth = withAuth(Header)

export default withFirebase(HeaderWithAuth)
