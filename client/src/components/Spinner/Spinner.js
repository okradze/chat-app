import React from 'react'
import './Spinner.scss'

export const PrimarySpinner = () => (
    <div className="lds-dual-ring lds-dual-ring--primary" />
)

export const FullPageSpinner = () => (
    <div className="lds-dual-ring-fullpage">
        <div className="lds-dual-ring lds-dual-ring--secondary" />
    </div>
)
