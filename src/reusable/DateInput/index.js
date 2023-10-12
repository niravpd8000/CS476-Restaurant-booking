import React from 'react';
import {DatePicker} from 'antd';
import downArrow from "../../assets/icons/down-arrow.png";
import "./DateInput.scss";

const DateInput = props => {
    const {className, type, format, w100, picker, onChange, value} = props;
    let inputProps = {
        onChange,
        format,
        allowClear: false,
        value,
        suffixIcon: <span><img src={downArrow} alt="down"/></span>
    };
    if (picker) {
        inputProps = {
            ...inputProps,
            picker: type
        }
    }
    return (
        <div className={`date-input ${className || ""}`}>
            <DatePicker className={w100 ? "w-100" : ""} format="DD MMM YY" {...inputProps} />
        </div>
    )
}

export default DateInput
