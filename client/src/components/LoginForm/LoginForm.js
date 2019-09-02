import React, { useState } from 'react'
import { useMutation } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import Input from '../Input/Input'
import Button from '../Button/Button'
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
    const [errorClassName, setErrorClassName] = useState('input')

    const [login, { loading }] = useMutation(LOGIN, {
        variables: loginData,
        onCompleted(data) {
            if (data) {
                const { login } = data
                auth.setUser(login)
            }
        },
        onError(error) {
            if (error.message.endsWith('NO_USER')) {
                setErrorClassName('input input-error')
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

    return (
        <form onSubmit={onSubmit}>
            <Input
                id="email"
                onChange={e => onChange(e.target.value, 'email')}
                value={loginData.email}
                type="text"
                placeholder="Enter Email"
                autoComplete="off"
                className={errorClassName}
            />
            <Input
                onChange={e => onChange(e.target.value, 'password')}
                id="password"
                value={loginData.password}
                type="password"
                placeholder="Enter Password"
                autoComplete="off"
                className={errorClassName}
            />

            <Button disabled={loading} type="submit" color="primary">
                {loading ? 'Logging In...' : 'Log In'}
            </Button>
        </form>
    )
}

export default withAuth(LoginForm)
