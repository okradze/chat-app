import React, { useState } from 'react'
import { useMutation } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import Input from '../Input/Input'
import Button from '../Button/Button'
import withSpinner from '../withSpinner/withSpinner'
import withAuth from '../withAuth/withAuth'

const LOGIN = gql`
    mutation Login($email: String!, $password: String!) {
        login(data: { email: $email, password: $password }) {
            _id
            fullName
            email
        }
    }
`

const LoginForm = ({ auth }) => {
    const [loginData, setLoginData] = useState({
        email: '',
        password: '',
    })
    const [login, { loading, error }] = useMutation(LOGIN, {
        variables: loginData,
        onCompleted(data) {
            if (data) {
                const { login } = data
                auth.setUser(login)
            }
        },
    })

    const onSubmit = e => {
        e.preventDefault()
        login()
    }

    const onChange = (value, path) => {
        setLoginData({
            ...loginData,
            [path]: value,
        })
    }

    const ButtonWithSpinner = withSpinner(() => 'Login')

    return (
        <form onSubmit={onSubmit}>
            <Input
                id="email"
                onChange={e => onChange(e.target.value, 'email')}
                value={loginData.email}
                type="text"
                placeholder="Enter Email"
                autoComplete="off"
            />
            <Input
                onChange={e => onChange(e.target.value, 'password')}
                id="password"
                value={loginData.password}
                type="password"
                placeholder="Enter Password"
                autoComplete="off"
            />

            <p className="error">{error && 'Incorrect Details'}</p>

            <Button type="submit" color="primary">
                <ButtonWithSpinner color="secondary" isLoading={loading} />
            </Button>
        </form>
    )
}

export default withAuth(LoginForm)
