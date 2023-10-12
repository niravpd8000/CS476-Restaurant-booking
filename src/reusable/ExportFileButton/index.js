import React, {useState} from 'react'
import "./UploadFileButton.scss"
import fileIcon from '../../assets/icons/upload.png'
import cameraIcon from "../../assets/icons/Camera.svg";

const ExportFileButton = props => {
    const {onFileUpload} = props;
    const uploadFile = (e) => {
        const re = /(\.csv|\.xls|\.xlsx)$/i;
        if (!re.exec(e.target.value)) {
            alert("File extension not supported!");
            document.getElementById('file').value = '';
        } else {
            const formData = new FormData();
            formData.append("model", e.target.files[0]);
            onFileUpload(formData);
        }
    };
    return (
        <div className="uploadFileButton">
            <label className="btn btn-default uploadFileBox">
                <div className="button-div">
                    <img src={fileIcon} width="20px" className="mb-2" alt="image"/> <span
                    className="inputClassLabel">Upload</span>
                </div>
                <input id="file" type="file" onChange={uploadFile} hidden/>
            </label>

        </div>
    )
};

export default ExportFileButton
