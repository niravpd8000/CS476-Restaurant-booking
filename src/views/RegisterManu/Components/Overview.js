import React from 'react'
import {IdLabel, PhotoUpload, SelectMenu, Switch, TextField} from "../../../reusable";
import TextArea from "../../../reusable/TextArea";
import {validateEmail} from "../../../utils/common";
import UploadImage from "../../../reusable/UploadImage";

const Overview = (props) => {
    const {onChange, errorMsg, error, organizationData} = props;
    return (
        <div className="mt-3">
            <UploadImage assetImage name="assetImages" imageSet={organizationData.assetImage} onChange={onChange}/>
            <TextField required
                       errorMsg={errorMsg?.name || "Name is required"} label="Name"
                       error={errorMsg?.name || (error && !"")}
                       value={organizationData.name}
                       name="name"
                       placeholder="Enter organization name"
                       onChange={onChange}/>
            <TextArea required
                      errorMsg={errorMsg?.description || "Description is required"} label="Description"
                      error={errorMsg?.description || (error && !"")}
                      value={organizationData.description} name="description"
                      placeholder="Enter Description of the org."
                      onChange={onChange}>
            </TextArea>
            <TextField required
                       errorMsg={errorMsg?.price || "Price is required"} label="Price" value={organizationData.price}
                       error={errorMsg?.price} name="price" type={"number"}
                       placeholder="Enter price"
                       onChange={onChange}/>
            <TextField required
                       errorMsg={errorMsg?.estimate_time || "Estimate time is required"} label="Estimate time to Prepare" type="number"
                       value={organizationData.estimate_time} name="estimate_time"
                       error={errorMsg?.estimate_time || (error && !"")}
                       placeholder="Enter Estimate time to Prepare"
                       onChange={onChange}/>
        </div>
    )
};

export default Overview
