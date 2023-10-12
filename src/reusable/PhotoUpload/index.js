import React, {useState} from 'react'
import "./PhotoUpload.scss"
import {UploadImageButton} from "../index";

const PhotoUpload = props => {
    const {label, image, onChange, error, userImage} = props;
    const [img, setImg] = useState();

    const onChangeImage = async (image) => {
        await setImg(image);
        await onChange(image);
    };

    return (
        <div className="imageUpload ">
            <div className="d-flex flex-row mb-4">
                <div className="roundDiv d-inline-block">
                    {(image || img) && <img src={img ? img : image} width="75px" height="75px"/>}
                </div>
                {image ?
                    <UploadImageButton userImage onChange={onChangeImage} changeImage={true}/>
                    :
                    <div className={`mt-4 ml-3 ${error ? "error-label" : "inputClassLabel"}`}>{label}</div>
                }
            </div>
            {!image && <UploadImageButton userImage onChange={onChangeImage}/>}
        </div>
    )
};

export default PhotoUpload
