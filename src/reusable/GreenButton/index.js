import React from 'react'
import "./GreenButton.scss"

const GreenButton = props => {
    const {onClick, className, id, disabled} = props;
    return (
        <button type="button" id={id}
                className={`btn GreenButton ${disabled ? "disabled-button" : ""} ${className || ""}`}
                onClick={onClick} disabled={disabled}>{props.children}</button>
    )
};

export default GreenButton
