import React from 'react'
import TextArea from "../../../reusable/TextArea";
import {validateEmail} from "../../../utils/common";
import TextField from "../../../reusable/TextField";

const Overview = (props) => {
    const {onChange, errorMsg, error, organizationData} = props;
    return (
        <div className="mt-3">
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
                       errorMsg={errorMsg?.phone || "Phone is required"} label="Phone" value={organizationData.phone}
                       error={errorMsg?.phone} name="phone"
                       placeholder="Enter org. phone number"
                       onChange={onChange}/>
            <TextField required
                       errorMsg={errorMsg?.email || "Email is required"} label="Email" type="email"
                       value={organizationData.email} name="email"
                       error={errorMsg?.email || (error && !validateEmail(""))}
                       placeholder="Enter org. email"
                       onChange={onChange}/>
        </div>
    )
};

export default Overview
