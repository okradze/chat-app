import React, { useState } from 'react'
import { useMutation } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import Input from '../Input/Input'
import Button from '../Button/Button'
import withAuth from '../withAuth/withAuth'

const SIGNUP = gql`
    mutation Signup(
        $firstName: String!
        $lastName: String!
        $email: String!
        $password: String!
    ) {
        signup(
            data: {
                firstName: $firstName
                lastName: $lastName
                email: $email
                password: $password
            }
        ) {
            _id
            fullName
            email
        }
    }
`

const SignupForm = ({ auth }) => {
    const [signupData, setSignupData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    })
    const [signup, { loading }] = useMutation(SIGNUP, {
        variables: signupData,
        onCompleted(data) {
            if (data.signup) {
                auth.setUser(data.signup)
            }
        },
    })

    const onSubmit = e => {
        e.preventDefault()
        signup()
    }

    const onChange = (value, path) => {
        setSignupData({
            ...signupData,
            [path]: value,
        })
    }

    return (
        <form onSubmit={onSubmit}>
            <Input
                id="firstName"
                onChange={e => onChange(e.target.value, 'firstName')}
                value={signupData.firstName}
                type="text"
                placeholder="Enter First Name"
                autoComplete="off"
            />
            <Input
                id="lastName"
                onChange={e => onChange(e.target.value, 'lastName')}
                value={signupData.lastName}
                type="text"
                placeholder="Enter Last Name"
                autoComplete="off"
            />
            <Input
                id="email"
                onChange={e => onChange(e.target.value, 'email')}
                value={signupData.email}
                type="email"
                placeholder="Enter Email"
                autoComplete="off"
            />
            <Input
                onChange={e => onChange(e.target.value, 'password')}
                id="password"
                value={signupData.password}
                type="password"
                placeholder="Enter Password"
                autoComplete="off"
            />

            <Button disabled={loading} color="primary" type="submit">
                {loading ? 'Loading...' : 'Sign Up'}
            </Button>
        </form>
    )
}

export default withAuth(SignupForm)
