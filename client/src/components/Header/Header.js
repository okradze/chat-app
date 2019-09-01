import React from 'react'
import ProfilePicture from '../ProfilePicture/ProfilePicture'
import Dropdown from '../Dropdown/Dropdown'
import Button from '../Button/Button'
import withAuth from '../withAuth/withAuth'
import withFirebase from '../withFirebase/withFirebase'
import AutoCompleteInputContainer from './AutoCompleteInputContainer'
import './Header.scss'

const Header = ({ auth: { user }, firebase }) => {
    const onLogout = async () => {
        await firebase.logout()
    }

    return (
        <header className="header-wrapper">
            <div className="container header">
                <AutoCompleteInputContainer />
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
