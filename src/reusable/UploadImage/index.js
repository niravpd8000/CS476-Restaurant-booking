import React, {useEffect, useState} from 'react'
import "./UploadImage.scss"
import {Upload} from 'antd';
import cameraIcon from '../../assets/icons/Camera.svg'
import {connect} from "react-redux";
import {errorMessage} from "../../utils/common";

const UploadImage = props => {
    const {onChange, fileUpload, imageSet, name, assetImage, assetUpload} = props;
    const [imageList, setImageList] = useState([]);
    let paths = [];
    useEffect(() => {
        setImageList(imageSet && imageSet.filter(i => i.url));
        paths = imageSet
    }, []);
    const handleChange = async ({fileList, file}) => {
        if (file.status !== "removed" && file.status === "uploading") {
            const formData = new FormData();
            formData.append(assetImage ? "file" : "model", file?.originFileObj);
            formData.append("ImageType", 1);
            const onSuccess = response => {// x = 1;
                paths = [...imageSet, {
                    url: response.data || response.imageUrl,
                    thumbUrl: response.data,
                    status: "done",
                    name: file.name,
                    uid: file.uid
                }];
                onChange({
                    name: name || "images", value: [...imageSet, {
                        url: response.data || response.imageUrl,
                        thumbUrl: response.data,
                        status: "done",
                        name: file.name,
                        uid: file.uid
                    }]
                });
            };
            const onFail = err => {
                errorMessage(err.data?.title || err.data?.message || err?.data?.returnMessage[0]);
            };
            if (assetImage)
                await assetUpload(formData, onSuccess, onFail);
            else
                await fileUpload(formData, onSuccess, onFail);
        } else {
            paths = imageSet.filter(item => item.uid !== file.uid);
            onChange({name: name || "images", value: [...paths]})
        }
        setImageList(fileList);
    };
    const uploadButton = (
        <div className="uploadImageBox p-2">
            <div>
                <img src={cameraIcon} alt="img"/>
                <div style={{marginTop: 8}}>Upload</div>
            </div>
        </div>
    );

    return (
        <>
            <div className="upload-image">
                <Upload
                    action={'/'}
                    fileList={imageList}
                    onChange={handleChange}
                    className="upload-list-inline"
                    listType="picture-card"
                    accept="image/png, image/jpeg"
                >
                    {imageList?.length >= 8 ? null : uploadButton}
                </Upload>
            </div>
        </>
    )
};


const mapDispatchToProps = dispatch => {
    return {
        fileUpload: (data, onSuccess, onFail) => dispatch(fileUpload({data, onSuccess, onFail})),
        assetUpload: (data, onSuccess, onFail) => dispatch(userImageUpload({data, onSuccess, onFail})),
    };
};

export default connect(null, mapDispatchToProps)(UploadImage)
