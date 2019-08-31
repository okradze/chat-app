import React from 'react'
import './Button.scss'

const Button = ({ color, className = '', children, ...props }) => (
    <button
        type="button"
        className={`button button--${color} ${className}`}
        {...props}
    >
        {children}
    </button>
)

export default Button
