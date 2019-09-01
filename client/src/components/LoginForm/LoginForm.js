import React, { useState } from 'react'
import Input from '../Input/Input'
import Button from '../Button/Button'
import withFirebase from '../withFirebase/withFirebase'
import withSpinner from '../withSpinner/withSpinner'

const LoginForm = ({ firebase }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const onSubmit = async e => {
        e.preventDefault()
        setLoading(true)
        await firebase.login(email, password)
    }

    const ButtonWithSpinner = withSpinner(() => 'Login')

    return (
        <form onSubmit={onSubmit}>
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

            <Button type="submit" color="primary">
                <ButtonWithSpinner color="secondary" isLoading={loading} />
            </Button>
        </form>
    )
}

export default withFirebase(LoginForm)
