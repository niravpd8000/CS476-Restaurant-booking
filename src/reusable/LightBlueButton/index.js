import React from 'react'
import "./LightBlueButton.scss"

const LightBlueButton = props => {
    const {onClick, className, disabled, style} = props;
    return (
        <button type="button"
                style={style}
                className={`btn lightBlueButton ${disabled ? "disabled-button" : ""}  ${className || ""}`}
                disabled={disabled}
                onClick={onClick}>{props.children}</button>
    )
};

export default LightBlueButton
