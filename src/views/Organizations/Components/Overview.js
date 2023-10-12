import React from 'react'
import {IdLabel, PhotoUpload, SelectMenu, Switch, TextField} from "../../../reusable";
import TextArea from "../../../reusable/TextArea";
import {validateEmail} from "../../../utils/common";

const Overview = (props) => {
    const {onChange, errorMsg, error} = props;
    const options = [
        {label: "1", value: "1"},
        {label: "2", value: "2"},
        {label: "3", value: "3"},
        {label: "4", value: "4"},
        {label: "5", value: "5"},
    ];
    return (
        <div className="mt-3">
            <TextField required
                       errorMsg={errorMsg?.name || "Name is required"} label="Name"
                       error={errorMsg?.name || (error && !"")}
                       value={""}
                       name="name"
                       placeholder="Enter organization name"
                       onChange={onChange}/>
            <SelectMenu required
                        errorMsg={errorMsg?.industryId || "Industry is required"} label="Industry"
                        error={errorMsg?.industryId || (error && !"")}
                        value={""} name="industryId" placeholder="Select Industry"
                        options={[]}
                        onChange={onChange}/>
            <TextArea required
                      errorMsg={errorMsg?.description || "Description is required"} label="Description"
                      error={errorMsg?.description || (error && !"")}
                      value={""} name="description"
                      placeholder="Enter Description of the org."
                      onChange={onChange}>
            </TextArea>
            <TextField required
                       errorMsg={errorMsg?.phone || "Phone is required"} label="Phone" value={""}
                       error={errorMsg?.phone} name="phone"
                       placeholder="Enter org. phone number"
                       onChange={onChange}/>
            <TextField required
                       errorMsg={errorMsg?.email || "Email is required"} label="Email" type="email"
                       value={""} name="email"
                       error={errorMsg?.email || (error && !validateEmail(""))}
                       placeholder="Enter org. email"
                       onChange={onChange}/>
            <Switch label="Status" onChange={onChange} name="status" value={""}
                    subLabel={!!"" ? "Active" : "Inactive"}/>
        </div>
    )
};

export default Overview
