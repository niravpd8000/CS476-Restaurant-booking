import React from 'react'
import dwnArrow from "../../assets/icons/down-arrow.png";
import "./SelectMenu.scss"

const SelectMenu = props => {
    const {
        label,
        onBlur,
        name,
        labelIndex,
        value,
        onChange,
        placeholder,
        options,
        parentClass,
        inputClass,
        error,
        disabled,
        required,
        errorMsg
    } = props;
    const [blur, setBlur] = React.useState(false);

    function errorStatus() {
        return required ? error ? true : (blur && !value) : false
    }

    const handleOnBlur = () => {
        setBlur(true);
        if (onBlur)
            onBlur()
    };
    return (
        <>
            {label ? <div className={`selectMenu mt-20 ${parentClass || ""} `}>
                    <div className="form-group set-width">
                        {label && <label className="labelClass margin-left-5">{label} {required &&
                            <span className="color-red">*</span>}</label>}
                        <div className="position-relative">
                            <span className="down-arrow"><img src={dwnArrow} alt="arrow"/></span>
                            <select
                                disabled={disabled}
                                value={value || value === 0 ? value : ""}
                                className={`form-control inputClass ${disabled ? "disabled" : ""}  ${inputClass || "w-100"} ${errorStatus() && 'error'} ${(!value || value === '') && 'text-gray'}`}
                                name={name}
                                onChange={onChange}
                                onBlur={handleOnBlur}
                            >
                                {placeholder && <option className="text-muted" value="">{placeholder}</option>}
                                {options?.length > 0 && options.map((option, index) => {
                                    return (
                                        <option key={index}
                                                value={option.value || option.id || option}>{option?.name || option?.label || [option[labelIndex]] || option}</option>
                                    )
                                })}
                            </select>
                            {errorStatus() &&
                                <span className="margin-left-5 error-label">{errorMsg || `${name} is required`}</span>}
                        </div>
                    </div>
                </div>
                :
                <div className={parentClass}>
                    <select
                        disabled={disabled}
                        value={value || value === 0 ? value : ""}
                        name={name}
                        onChange={onChange}
                        onBlur={handleOnBlur}
                        className={`form-control inputClass  ${inputClass || "w-100"} ${error && 'error'}`}
                    >
                        {placeholder && <option className="text-muted" value="">{placeholder}</option>}
                        {options.length > 0 && options.map((option, index) => {
                            return (
                                <option key={index}
                                        value={option.value || option.id || option.value}>{option?.name || option?.label || [option[labelIndex]] || index}</option>
                            )
                        })}
                    </select>
                </div>
            }
        </>
    )
};

export default SelectMenu
