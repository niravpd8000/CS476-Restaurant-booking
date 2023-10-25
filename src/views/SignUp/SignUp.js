import React, {useState} from "react";
import GreenButton from "../../reusable/GreenButton";
import "./SignUp.scss";
import TextField from "../../reusable/TextField";
import SettingBox from "../../reusable/SettingBox";
import {Col, Row} from "antd";

const SignUp = (props) => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');


    return (
        <Row className="container-center signIn-box">
            <Col xs={24} align={"center"}>
                <SettingBox className="container-fluid">
                    <div align="left">
                        <span className='fs-20 lh-23 fw-bold mt-30 mb-20 '>Sign Up</span>
                        <TextField errorMsg="First Name" required label="First Name"
                                   value={userName}
                                   name="firstName"
                                   onChange={(e) => setUserName(e.target.value)}
                                   placeholder="Enter First Name"/>
                        
                        <TextField errorMsg="Last Name" required label="Last Name"
                                   value={userName}
                                   name="lastName"
                                   onChange={(e) => setUserName(e.target.value)}
                                   placeholder="Enter Last Name "/>
                        
                        <TextField errorMsg="Mobile number" required label="Phone number"
                                   value={userName}
                                   name="phone"
                                   onChange={(e) => setUserName(e.target.value)}
                                   placeholder="Enter phone number "/>
                        
                        <TextField errorMsg="Email" required label="Email"
                                   value={userName}
                                   name="userName"
                                   onChange={(e) => setUserName(e.target.value)}
                                   placeholder="Enter Email"/>
                        <TextField errorMsg="Password"
                            // type="password"
                                   required label="Password" value={password} name="password"
                                   onChange={(e) => setPassword(e.target.value)}
                                   placeholder="Enter password"/>
                        <TextField errorMsg="Password"
                            // type="password"
                                   required label="Confirm Password" value={password} name="confirm_password"
                                   onChange={(e) => setPassword(e.target.value)}
                                   placeholder="Enter Confirm password"/>
                        <div align="center">
                            <GreenButton className='btn-signIn' onClick={() => {
                            }}>Sign Up</GreenButton>
                        </div>
                    </div>

                </SettingBox>
            </Col>
        </Row>
    )
};

export default SignUp;
