import React from 'react'
import "./Switch.scss"

const Switch = props => {
    const {name, value, onChange, label, subLabel, customClass} = props;
    return (
        <div className={`switch mt-20 ${customClass}`}>
            {label && <label className="labelClass">{label}</label>} < br/>
            <div className="custom-control custom-switch">
                <input type="checkbox" name={name} checked={!!value}
                       onChange={(e) => onChange({name, value: e.target.checked})} className="custom-control-input"
                       id={"a" + name}/>
                {subLabel &&
                    <label className="custom-control-label d-inline inputClassLabel"
                           htmlFor={"a" + name}>{subLabel}</label>}
            </div>
        </div>
    )
};

export default Switch
