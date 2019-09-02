import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import { FullPageSpinner } from '../Spinner/Spinner'
import Auth from '../Auth/Auth'

const AUTH = gql`
    query {
        auth {
            _id
            fullName
            email
        }
    }
`

const Session = ({ children }) => {
    const { loading, data } = useQuery(AUTH)

    return loading ? (
        <FullPageSpinner />
    ) : (
        <Auth user={data ? data.auth : null}>{children}</Auth>
    )
}

export default Session
