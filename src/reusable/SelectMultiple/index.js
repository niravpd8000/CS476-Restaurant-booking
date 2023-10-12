import React from 'react'
import dwnArrow from "../../assets/icons/down-arrow.png";
import {Select} from 'antd';
import "./SelectMultiple.scss"
import downArrow from "../../assets/icons/DouwnArrow.svg"

const SelectMultiple = props => {
    const {
        label,
        name,
        value,
        onChange,
        className,
        placeholder,
        options,
        parentClass,
        inputClass,
        error,
        required,
        errorMsg
    } = props;
    const [blur, setBlur] = React.useState(false);

    // const filteredOptions = options.filter(o => !value.includes(o));
    function errorStatus() {
        return required ? error ? true : (blur && !value) : false
    }

    return (
        <div className={`SelectMultiple mt-20 ${className}`}>
            <div className="form-group">
                <label className="labelClass margin-left-5">{label}{required &&
                    <span className="color-red">*</span>}</label>
                <Select
                    mode="multiple"
                    allowClear
                    style={{width: '100%'}}
                    className={errorStatus() && 'error'}
                    placeholder="Please select"
                    showArrow
                    suffixIcon={<img src={dwnArrow} alt={""}/>}
                    value={value}
                    onChange={(e, e2) => {
                        onChange({name, value: e2, value2: e})
                    }}
                    onBlur={() => setBlur(true)}
                >
                    {options?.map((option, index) => {
                        return (
                            <Select.Option key={index}
                                           value={option.id || option.value}>{option.label || option.name}</Select.Option>
                        )
                    })}
                </Select>
                {errorStatus() &&
                    <span className="margin-left-5 error-label">{`${errorMsg || name} is required`}</span>}
            </div>
        </div>
    )
};

export default SelectMultiple
