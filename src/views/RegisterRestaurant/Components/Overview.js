import React from 'react'
import TextArea from "../../../reusable/TextArea";
import {isPasswordComplex, validateEmail, validateMobileNumber} from "../../../utils/common";
import TextField from "../../../reusable/TextField";

const Overview = (props) => {
    const {onChange, error, isEditRestPath, organizationData} = props;
    return (
        <div className="mt-3">
            {!isEditRestPath &&
                <><TextField required
                             label="Username"
                             error={error && !organizationData.username}
                             value={organizationData.username}
                             name="username"
                             placeholder="Enter Username"
                             onChange={onChange}/>
                    <TextField required
                               type={"password"}
                               label="Password"
                               errorMsg={!isPasswordComplex(organizationData.password)? "Password doesn't meet complexity requirements":"Enter password"}
                               error={error && !isPasswordComplex(organizationData.password)}
                               value={organizationData.password}
                               name="password"
                               placeholder="Enter Password name"
                               onChange={onChange}/>
                    <TextField required
                               type={"password"}
                               errorMsg={organizationData.confirmPassword && organizationData.confirmPassword !== organizationData.password ? "Confirm Password Doesn't Match" : "Enter valid Confirm Password"}
                               label="Confirm Password"
                               error={error && (!organizationData.confirmPassword || organizationData.confirmPassword !== organizationData.password)}
                               name="confirmPassword"
                               placeholder="Enter Confirm Password name"
                               onChange={onChange}/></>}
            <TextField required
                       label="Restaurant Name"
                       error={error && !organizationData.name}
                       value={organizationData.name}
                       name="name"
                       placeholder="Enter Restaurant name"
                       onChange={onChange}/>
            <TextArea required
                      label="Description"
                      error={error && !organizationData.description}
                      value={organizationData.description} name="description"
                      placeholder="Enter Description of the org."
                      onChange={onChange}>
            </TextArea>
            <TextField required
                       label="Phone" value={organizationData.phone}
                       errorMsg={"Enter Valid phone number"}
                       error={error && !validateMobileNumber(organizationData.phone)}
                       name="phone"
                       placeholder="Enter org. phone number"
                       onChange={onChange}/>
            <TextField required
                       label="Email" type="email"
                       value={organizationData.email} name="email"
                       error={error && !validateEmail(error?.email)}
                       placeholder="Enter org. email"
                       onChange={onChange}/>
        </div>
    )
};

export default Overview
