import React from 'react'
import ProfilePicture from '../ProfilePicture/ProfilePicture'
import Dropdown from '../Dropdown/Dropdown'
import SearchSvg from '../../svg/Search'
import Button from '../Button/Button'
import withAuth from '../withAuth/withAuth'
import withFirebase from '../withFirebase/withFirebase'
import './Header.scss'

const Header = ({ user, firebase }) => {
    const onLogout = async () => {
        await firebase.logout()
    }

    return (
        <header className="header-wrapper">
            <div className="container header">
                <div className="input-group">
                    <input className="input" type="text" placeholder="Search" />
                    <SearchSvg className="input-group__icon" />
                </div>
                <div className="header__right">
                    <ProfilePicture photoURL={user.photoURL} />
                    <Dropdown
                        className="header__button header__button-preview"
                        text={user.displayName}
                    >
                        <Button
                            className="header__dropdown-button"
                            color="transparent"
                            onClick={onLogout}
                        >
                            Log Out
                        </Button>
                    </Dropdown>
                </div>
            </div>
        </header>
    )
}

const HeaderWithAuth = withAuth(Header)

export default withFirebase(HeaderWithAuth)
