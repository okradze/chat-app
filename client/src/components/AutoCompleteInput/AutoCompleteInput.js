import React from 'react'
import Input from '../Input/Input'
import './AutoCompleteInput.scss'

const AutoCompleteInput = ({ onChange, Svg, suggestions, render, isOpen }) => (
    <div className="AutoCompleteInput">
        <Input placeholder="Search" onChange={onChange} Svg={Svg} />

        {isOpen && (
            <ul className="AutoCompleteInput__item-overview">
                {suggestions.map(item => (
                    <li className="AutoCompleteInput__item">{render(item)}</li>
                ))}
            </ul>
        )}
    </div>
)

export default AutoCompleteInput
