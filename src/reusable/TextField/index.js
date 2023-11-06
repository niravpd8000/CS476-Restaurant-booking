import React from 'react'
import "./TextField.scss"
import moment from "moment";
import {validateEmail} from "../../utils/common";

const TextField = ({
                       name,
                       label,
                       disabled,
                       style,
                       value,
                       onBlur,
                       onChange,
                       placeholder,
                       type,
                       error,
                       required,
                       errorMsg,
                       max
                   }) => {
    const [blur, setBlur] = React.useState(false);

    function errorStatus() {
        return required ? error ? true : (blur && !(type === "email" ? validateEmail(value) : value)) : false
    }

    const handleOnBlur = () => {
        setBlur(true);
        if (onBlur)
            onBlur();
    };
    return (
        <div className="textField mt-20" style={style}>
            <div className="form-group">
                <label className="labelClass margin-left-5 w-100">{label}{required &&
                    <span className="color-red">*</span>}</label>
                <input type={type ? type : "text"}
                       disabled
                       max={max}
                       maxLength={100}
                       disabled={disabled}
                       className={`form-control ${disabled ? "disabled" : ""} w-100 inputClass ${errorStatus() && 'error'}`}
                       name={name}
                       onChange={(e) => {
                           e.target.value = e.target.value === " " ? "" : e.target.value;
                           if (onChange)
                               onChange(e)
                       }} value={type === "date" ? value ? moment(value).format("yyyy-MM-DD") : "" : value}
                       placeholder={placeholder} onBlur={handleOnBlur}/>
                {errorStatus() && <span
                    className="margin-left-5 error-label">{type === "email" && value ? "Enter valid email address" : errorMsg || `${name} is required`}</span>}
                {(!!value && type === "email" && !validateEmail(value) && !required) && <span
                    className="margin-left-5 error-label">Enter valid email address</span>}
            </div>
        </div>
    )
};

// Factory function for generating custom TextField components
export const createCustomTextField = (customProps) => {
    return (props) => {
        return <TextField {...props} {...customProps} />;
    };
};
export default TextField
