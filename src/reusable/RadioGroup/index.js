import React from 'react'
import "./RadioGroup.scss"

const RadioGroup = props => {
    const {label, name, value, onChange, values, disabled, error, errorMsg, required} = props;
    return (
        <div className="radio-group mt-20">
            <div className="form-group">
                {label &&
                    <label className="labelClass margin-left-5">{label}{required &&
                        <span className="color-red">*</span>}</label>}
                {values.map((option, key) => {
                    return (
                        <div className="form-check ml-30" key={key}>
                            <input disabled={disabled} onChange={() => {
                                onChange({name, value: option.value})
                            }} className="form-check-input" name={option.name} type="radio" value={option.value}
                                   checked={option.value === value}
                                   id={"flexRadioDefault" + key}/>
                            <label className="form-check-label inputClassLabel mt-5px"
                                   htmlFor={"flexRadioDefault" + key}>
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

export default RadioGroup
