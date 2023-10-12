import React from 'react'
import "./UploadImageButton.scss"
import cameraIcon from '../../assets/icons/Camera.svg'
import {connect} from "react-redux";
import {errorMessage} from "../../utils/common";

const UploadImageButton = props => {
    const {changeImage, onChange, label, required, fileUpload, userImage, userUpload} = props;
    const uploadFile = (e) => {
        const re = /(\.jpg|\.jpeg|\.bmp|\.gif|\.png)$/i;
        if (!re.exec(e.target.value)) {
            alert("File extension not supported!");
            document.getElementById('file').value = '';
        } else {
            const formData = new FormData();
            formData.append(userUpload ? "file" : "model", e.target.files[0]);
            const onSuccess = data => {
                onChange(userUpload ? data.imageUrl : data.data)
            };
            const onFail = err => {
                errorMessage(err.data?.title);
            };
            if (userImage) {
                formData.append("ImageType", 2);
                userUpload(formData, onSuccess, onFail);
            } else
                fileUpload(formData, onSuccess, onFail);
        }
    };
    return (
        <div className="uploadImageButton">
            {
                changeImage ?
                    <label className="btn btn-default change">Change
                        <input id="file" type="file" onChange={uploadFile} hidden/>
                    </label>
                    :
                    <label className="btn btn-default uploadImageBox">
                        {label && <label className="labelClass margin-left-5">{label}{required &&
                            <span className="color-red">*</span>}</label>}
                        <div className="button-div">
                            <img src={cameraIcon} className="mb-2" alt="image"/> <span
                            className="inputClassLabel">Upload</span>
                        </div>
                        <input id="file" type="file" onChange={uploadFile} hidden/>
                    </label>
            }
        </div>
    )
};
export default UploadImageButton;
