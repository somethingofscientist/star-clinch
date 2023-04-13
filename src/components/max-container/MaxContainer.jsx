import React, { Children } from 'react'
import './max-container.css';


const MaxContainer = ({children}) => {
    return (
        <>
            <div className="max-container">
                {children}
            </div>
        </>
    )
}

export default MaxContainer