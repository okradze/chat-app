import React, { useState } from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
import SignupForm from '../../components/SignupForm/SignupForm'
import Button from '../../components/Button/Button'
import './LoginAndSignupPage.scss'

const LoginAndSignupPage = () => {
    const [isLoginForm, setIsLoginForm] = useState(true)

    return (
        <div className="LoginAndSignupPage">
            <div className="container">
                <div className="LoginAndSignupForm">
                    <h2 className="LoginAndSignupForm__heading">
                        {isLoginForm ? 'Log In' : 'Sign Up'}
                    </h2>
                    {isLoginForm ? <LoginForm /> : <SignupForm />}
                    <Button
                        color="transparent"
                        onClick={() => setIsLoginForm(!isLoginForm)}
                    >
                        <span className="LoginAndSignupForm__link">
                            {isLoginForm ? 'Sign Up' : 'Log In'}
                        </span>
                    </Button>
                </div>
            </div>
        </div>
    )
}
export default LoginAndSignupPage
