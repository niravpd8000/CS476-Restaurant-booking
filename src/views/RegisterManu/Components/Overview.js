import React from 'react'
import TextArea from "../../../reusable/TextArea";
import UploadImage from "../../../reusable/UploadImage";
import TextField from "../../../reusable/TextField";
import {Switch} from "antd";

const Overview = (props) => {
    const {onChange, errorMsg, error, manuData} = props;

    return (
        <div className="mt-3">
            <UploadImage assetImage name="assetImages" setImageUrl={(e) => onChange({name: "image_url", value: e})}
                         imageSet={manuData.assetImage} onChange={onChange}/>
            <TextField required
                       errorMsg={errorMsg?.name || "Dish Name is required"} label="Dish Name"
                       error={errorMsg?.name || (error && !"")}
                       value={manuData.name}
                       name="name"
                       placeholder="Enter Dish name"
                       onChange={onChange}/>
            <TextArea required
                      errorMsg={errorMsg?.description || "Description is required"} label="Description"
                      error={errorMsg?.description || (error && !"")}
                      value={manuData.description} name="description"
                      placeholder="Enter Description of the org."
                      onChange={onChange}/>
            <TextField required
                       errorMsg={errorMsg?.price || "Price is required"} label="Price" value={manuData.price}
                       error={errorMsg?.price} name="price" type={"number"}
                       placeholder="Enter price"
                       onChange={onChange}/>
            <TextField required
                       errorMsg={errorMsg?.estimate_time || "Estimate time is required"}
                       label="Estimate time to Prepare (In min)" type="number"
                       value={manuData.estimate_time} name="estimate_time"
                       error={errorMsg?.estimate_time || (error && !"")}
                       placeholder="Enter Estimate time to Prepare"
                       onChange={onChange}/>
            <div className={"mt-20"}>
                <Switch onChange={(e) => onChange({name: "available", value: !manuData.available})}
                        checked={manuData.available}/>&nbsp; &nbsp;{manuData.available ? "Available" : "Unavailable"}
            </div>
        </div>
    )
};

export default Overview
