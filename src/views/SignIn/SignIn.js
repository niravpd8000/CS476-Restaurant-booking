import React, {useState} from "react";
import GreenButton from "../../reusable/GreenButton";
import "./SignIn.scss";
import TextField from "../../reusable/TextField";
import SettingBox from "../../reusable/SettingBox";
import {Col, Row} from "antd";

const SignIn = (props) => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    return (
        <Row className="container-center signIn-box">
            <Col xs={24} align={"center"}>
                <SettingBox className="container-fluid">
                    <div align="left">
                        <span className='fs-20 lh-23 fw-bold mt-30 mb-20 '>Sign in</span>
                        <TextField errorMsg="Email or Mobile number" required label="Email or phone number"
                                   value={userName}
                                   name="userName"
                                   onChange={(e) => setUserName(e.target.value)}
                                   placeholder="Enter Email or phone number "/>
                        <TextField errorMsg="Password"
                            // type="password"
                                   required label="Password" value={password} name="password"
                                   onChange={(e) => setPassword(e.target.value)}
                                   placeholder="Enter password"/>
                        <div align="center">
                            <GreenButton className='btn-signIn' onClick={() => {
                            }}>Sign in</GreenButton>
                        </div>
                    </div>

                </SettingBox>
            </Col>
        </Row>
    )
};

export default SignIn;
