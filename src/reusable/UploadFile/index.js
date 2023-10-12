import React from 'react'
import "./UploadFile.scss"

const UploadFile = props => {
    const {name, label, error, errorMsg, required} = props;
    return (
        <div className="textField mt-20">
            <div className="form-group">
                <label className="labelClass margin-left-5">{label}{required &&
                    <span className="color-red">*</span>}</label>
                <input type="file" className={`form-control inputClass ${error && 'error'}`} name={name}/>
                {/*{error && <span className="margin-left-5 error-label">{`${name} is required`}</span>}*/}
                {error && <span className="margin-left-5 error-label">{errorMsg || "File is required."}</span>}
            </div>
        </div>
    )
};

export default UploadFile
