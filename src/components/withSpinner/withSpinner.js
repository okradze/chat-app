import React from 'react'
import './Spinner.scss'

const withSpinner = Component => {
    const WithSpinner = ({ isLoading, ...props }) => {
        if (!isLoading) return <Component {...props} />
        return (
            <div class="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        )
    }
    return WithSpinner
}
export default withSpinner
