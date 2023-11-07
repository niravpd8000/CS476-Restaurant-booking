import React from 'react'
import "./CheckBoxGroup.scss"

const CheckBoxGroup = props => {
    const {label, name, value, onChange, values, disabled, error, errorMsg, required} = props;
    return (
        <div className="checkBox-group mt-20">
            <div className="form-group">
                {label && <label className="labelClass margin-left-5">{label}{required &&
                    <span className="color-red">*</span>}</label>}
                {values.map((option, key) => {
                    return (
                        <div className="form-check ml-30" key={key}>
                            <input disabled={disabled} onClick={(e) => {
                                option.selected = e.target.checked;
                                onChange({name, value: values, type: "checkBox"});
                            }}
                                   className="form-check-input" type="checkbox" value={option.value}
                                   checked={option.selected}
                                   id={"flexCheckDefault" + key}/>
                            <label className="form-check-label inputClassLabel mt-5px"
                                   htmlFor={"flexCheckDefault" + key}>
                                {option.label}
                            </label>
                        </div>
                    )
                })
                }
                {error && <span className="margin-left-5 error-label">{errorMsg}</span>}
            </div>
        </div>
    )
};

export default CheckBoxGroup
