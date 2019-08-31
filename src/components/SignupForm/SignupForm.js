import React, { useState } from 'react'
import Input from '../Input/Input'
import withFirebase from '../withFirebase/withFirebase'

const LoginForm = ({ firebase }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onSubmit = async e => {
        e.preventDefault()
        await firebase.signup(name, email, password)
    }

    return (
        <form onSubmit={onSubmit}>
            <Input
                id="name"
                onChange={e => setName(e.target.value)}
                value={name}
                type="text"
                placeholder="name"
                autoComplete="off"
            />
            <Input
                id="email"
                onChange={e => setEmail(e.target.value)}
                value={email}
                type="text"
                placeholder="email"
                autoComplete="off"
            />
            <Input
                onChange={e => setPassword(e.target.value)}
                id="password"
                value={password}
                type="password"
                placeholder="password"
                autoComplete="off"
            />

            <button type="submit">Log In</button>
        </form>
    )
}

export default withFirebase(LoginForm)
