import React from 'react'
import {Row, Col} from "antd";
import TextArea from "../../../reusable/TextArea";
import TextField from "../../../reusable/TextField";

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
                <Col xs={24}>
                    <TextArea errorMsg={errorMsg?.description || "Description is required"} label="Description"
                              error={errorMsg?.description || (error && !"")}
                              value={organizationData.description} name="description"
                              placeholder="Enter Description of the org."
                              onChange={onChange}>
                    </TextArea>
                </Col>
                <Col xs={24}>
                    <TextField required
                               max={8}
                               errorMsg={errorMsg?.estimate_time || "Number of People is required"}
                               label="Number of People (max 4)"
                               type={"number"}
                               value={organizationData.estimate_time} name="estimate_time"
                               error={errorMsg?.estimate_time || (error && !"")}
                               placeholder="Enter Number of People"
                               onChange={onChange}/>
                </Col>
            </Row>

        </div>
    )
};

export default Overview
