import React from 'react'
import './Triangle.scss'

const Triangle = ({ direction = 'bottom' }) => {
    return <span className={`triangle-${direction}`} />
}

export default Triangle
