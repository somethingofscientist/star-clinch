import React, { useState } from 'react';
import './toggle.css';

function ToggleDiv() {
    const [isActive, setIsActive] = useState(false);

    function handleClick() {
        setIsActive(!isActive);
    }

    return (
        <div className="toggle" onClick={handleClick}>
            <div className="main-toggler">
                <h3>Click to toggle</h3>
                <i className={isActive ? "fas fa-minus" : "fas fa-plus"}></i>
            </div>
            {isActive ? <p>Content that will be toggled</p> : null}
        </div>
    );
}

export default ToggleDiv;
