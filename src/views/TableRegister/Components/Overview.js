import React from 'react'
import {TextField} from "../../../reusable";
import {Row, Col} from "antd";
import TextArea from "../../../reusable/TextArea";

const Overview = (props) => {
    const {onChange, errorMsg, error, organizationData} = props;
    return (
        <div className="mt-3">
            <Row>
                <Col xs={12}>
                    <TextField style={{width: "100%"}} required
                               errorMsg={errorMsg?.firstName || "First Name is required"} label="First Name"
                               value={organizationData.firstName}
                               error={errorMsg?.firstName} name="fistName"
                               placeholder="Enter First Name"
                               onChange={onChange}/>
                </Col>
                <Col xs={12}>
                    <TextField required
                               errorMsg={errorMsg?.lastName || "Last Name is required"} label=" Last Name"
                               value={organizationData.lastName}
                               error={errorMsg?.lastName} name="lastName"
                               placeholder="Enter Last Name"
                               onChange={onChange}/>
                </Col>
            </Row>
            <TextArea errorMsg={errorMsg?.description || "Description is required"} label="Description"
                      error={errorMsg?.description || (error && !"")}
                      value={organizationData.description} name="description"
                      placeholder="Enter Description of the org."
                      onChange={onChange}>
            </TextArea>
            <TextField required
                       max={8}
                       errorMsg={errorMsg?.estimate_time || "Estimate time is required"}
                       label="Estimate time to Prepare (max 8)"
                       type={"number"}
                       value={organizationData.estimate_time} name="estimate_time"
                       error={errorMsg?.estimate_time || (error && !"")}
                       placeholder="Enter Estimate time to Prepare"
                       onChange={onChange}/>
        </div>
    )
};

export default Overview
