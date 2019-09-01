import React from 'react'

const Input = ({ id, label, onChange, Svg, ...otherProps }) => (
    <div className="input-group">
        {label && (
            <label htmlFor={id} className="input-group__label">
                {label}
            </label>
        )}
        <input className="input" id={id} onChange={onChange} {...otherProps} />
        {Svg && <Svg className="input-group__icon" />}
    </div>
)

export default Input
