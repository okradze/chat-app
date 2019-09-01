import React from 'react'
import './Spinner.scss'

const PrimarySpinner = ({ style }) => (
    <div style={style} className="lds-dual-ring lds-dual-ring--primary" />
)

const SecondarySpinner = ({ style }) => (
    <div style={style} className="lds-dual-ring lds-dual-ring--secondary" />
)

const withSpinner = Component => {
    const WithSpinner = ({ isLoading, style, color, ...props }) => {
        if (!isLoading) return <Component {...props} />
        if (!color) return <PrimarySpinner style={style} />
        return <SecondarySpinner style={style} />
    }
    return WithSpinner
}
export default withSpinner
