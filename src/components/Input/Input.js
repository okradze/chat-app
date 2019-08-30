import React from 'react'

const Input = ({ id, label, onChange, ...otherProps }) => (
    <div className="input-group">
        <label htmlFor={id} className="input-group__label">
            {label}
        </label>
        <input id={id} onChange={onChange} {...otherProps} />
    </div>
)

export default Input
