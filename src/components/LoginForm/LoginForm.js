import React, { useState, useContext } from 'react'
import FirebaseContext from '../Firebase/Context'
import Input from '../Input/Input'

const LoginForm = () => {
    const firebase = useContext(FirebaseContext)
    const [loginData, setLoginData] = useState({
        email: '',
        password: '',
    })

    const onSubmit = e => {
        try {
            e.preventDefault()
            firebase.login(loginData.email, loginData.password)
        } catch (e) {
            console.log(e)
        }
    }

    const onChange = (e, path) => {
        setLoginData({
            ...loginData,
            [path]: e.target.value,
        })
    }

    return (
        <form onSubmit={onSubmit}>
            <Input
                id="email"
                onChange={e => onChange(e, 'email')}
                value={loginData.email}
                type="text"
                placeholder="email"
                autoComplete="off"
            />
            <Input
                onChange={e => onChange(e, 'password')}
                id="password"
                value={loginData.password}
                type="text"
                placeholder="password"
                autoComplete="off"
            />

            <button type="submit">Log In</button>
        </form>
    )
}

export default LoginForm
