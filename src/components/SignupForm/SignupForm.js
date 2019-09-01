import React, { useState } from 'react'
import Input from '../Input/Input'
import Button from '../Button/Button'
import withSpinner from '../withSpinner/withSpinner'
import withFirebase from '../withFirebase/withFirebase'

const LoginForm = ({ firebase }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const onSubmit = e => {
        e.preventDefault()
        setLoading(true)
        firebase.signup(name, email, password)
    }

    const ButtonWithLoader = withSpinner(() => 'Sign Up')

    return (
        <form onSubmit={onSubmit}>
            <Input
                id="name"
                onChange={e => setName(e.target.value)}
                value={name}
                type="text"
                placeholder="Enter Full Name"
                autoComplete="off"
            />
            <Input
                id="email"
                onChange={e => setEmail(e.target.value)}
                value={email}
                type="text"
                placeholder="Enter Email"
                autoComplete="off"
            />
            <Input
                onChange={e => setPassword(e.target.value)}
                id="password"
                value={password}
                type="password"
                placeholder="Enter Password"
                autoComplete="off"
            />

            <Button color="primary" type="submit">
                <ButtonWithLoader color="secondary" isLoading={loading} />
            </Button>
        </form>
    )
}

export default withFirebase(LoginForm)
