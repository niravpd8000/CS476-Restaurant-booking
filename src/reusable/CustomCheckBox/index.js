import React from "react";

const CustomCheckBox = ({value, className, label, onChange}) => {
    return (
        <div className={`form-group form-check ${className}`}>
            <input checked={value} type="checkbox" onChange={onChange} className="form-check-input" id="exampleCheck1"/>
            <label className="form-check-label" htmlFor="exampleCheck1">{label || ""}</label>
        </div>
    )
};

export default CustomCheckBox;
