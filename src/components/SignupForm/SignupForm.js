import React, { useState, useContext } from 'react'
import FirebaseContext from '../Firebase/Context'
import Input from '../Input/Input'

const LoginForm = () => {
    const firebase = useContext(FirebaseContext)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onSubmit = async e => {
        try {
            e.preventDefault()
            const user = await firebase.signup(name, email, password)
            console.log(user)
        } catch (e) {
            console.log(e)
        }
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

export default LoginForm
