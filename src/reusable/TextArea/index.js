import React from 'react'
import "./TextArea.scss"

const TextArea = props => {
    const {label, name, value, style, onChange, onBlur, placeholder, error, required, errorMsg, rows} = props;
    const [blur, setBlur] = React.useState(false);

    let inputProps = {
        name,
        value,
        placeholder,
        rows
    };

    function errorStatus() {
        return required ? error ? true : (blur && !value) : false
    }

    const handleOnBlur = () => {
        setBlur(true);
        if (onBlur)
            onBlur()
    }
    return (
        <div className="textAreaForm mt-20" style={style}>
            <div className="form-group">
                <label className="labelClass margin-left-5">{label} {required &&
                    <span className="color-red">*</span>}
                </label>
                <textarea
                    className={`form-control w-100 inputTextArea ${errorStatus() && 'error'}`} {...inputProps}
                    rows={rows ? rows : 5} onChange={(e) => {
                    e.target.value = e.target.value === " " ? "" : e.target.value;
                    onChange({name, value: e.target.value})
                }} onBlur={handleOnBlur}>
                </textarea>
                {errorStatus() &&
                    <span className="margin-left-5 error-label">{errorMsg || `${name} is required`}</span>}
            </div>
        </div>
    )
};

export default TextArea
