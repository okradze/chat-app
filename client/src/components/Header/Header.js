import React from 'react'
import { useMutation } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import ProfilePicture from '../ProfilePicture/ProfilePicture'
import Dropdown from '../Dropdown/Dropdown'
import Button from '../Button/Button'
import withAuth from '../withAuth/withAuth'
import { PrimarySpinner } from '../Spinner/Spinner'
import AutoCompleteInputContainer from './AutoCompleteInputContainer'
import './Header.scss'

const LOGOUT = gql`
    mutation {
        logout
    }
`

const Header = ({ auth: { setUser, user } }) => {
    const [logout, { loading }] = useMutation(LOGOUT, {
        onCompleted: data => {
            if (data.logout === true) {
                setUser()
            }
        },
    })

    return (
        <header className="header-wrapper">
            <div className="container header">
                <AutoCompleteInputContainer />
                <div className="header__right">
                    <ProfilePicture
                        width="4rem"
                        height="4rem"
                        photoURL="https://randomuser.me/api/portraits/men/9.jpg"
                    />
                    <Dropdown
                        className="header__button header__button-preview"
                        text={user.fullName}
                    >
                        <Button
                            className="header__dropdown-button"
                            color="transparent"
                            onClick={() => logout()}
                        >
                            {loading && <PrimarySpinner />}
                            Log Out
                        </Button>
                    </Dropdown>
                </div>
            </div>
        </header>
    )
}

export default withAuth(Header)
