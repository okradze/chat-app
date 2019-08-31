import React, { useState } from 'react'
import Button from '../Button/Button'
import Triangle from '../Triangle/Triangle'
import './Dropdown.scss'

const Dropdown = ({ children, text, className }) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="dropdown">
            <Button
                onClick={() => setIsOpen(!isOpen)}
                className={className}
                color="transparent"
            >
                {text}
                <Triangle direction="bottom" />
            </Button>
            {isOpen && <ul className="dropdown__overview">{children}</ul>}
        </div>
    )
}

export default Dropdown
