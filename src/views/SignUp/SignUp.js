import React, {useState} from "react";
import GreenButton from "../../reusable/GreenButton";
import "./SignUp.scss";
import TextField from "../../reusable/TextField";
import SettingBox from "../../reusable/SettingBox";
import {Col, Row} from "antd";

const SignUp = (props) => {
    const [state, setState] = useState({
        firstName:"",
        lastname:"",
        phone:"",
        email:"",
        password:"",
        confirmPassword:""
    });


    return (
        <Row className="container-center signUp-box">
            <Col xs={24} align={"center"}>
                <SettingBox className="container-fluid">
                    <div align="left">
                        <span className='fs-20 lh-23 fw-bold mt-30 mb-20 '>Sign Up</span>
                        <TextField errorMsg="First Name" required label="First Name"
                                   value={state.firstName}
                                   name="firstName"
                                   onChange={(e) => setState({...state, [e.target.name]:e.target.value})}
                                   placeholder="Enter First Name"/>
                        
                        <TextField errorMsg="Last Name" required label="Last Name"
                                   value={state.lastname}
                                   name="lastName"
                                   onChange={(e) => setState({...state, [e.target.name]:e.target.value})}
                                   placeholder="Enter Last Name "/>
                        
                        <TextField errorMsg="Mobile number" required label="Phone number"
                                   value={state.phone}
                                   name="phone"
                                   onChange={(e) => setState({...state, [e.target.name]:e.target.value})}
                                   placeholder="Enter phone number "/>
                        
                        <TextField errorMsg="Email" required label="Email"
                                   value={state.email}
                                   name="email"
                                   onChange={(e) => setState({...state, [e.target.name]:e.target.value})}
                                   placeholder="Enter Email"/>
                        <TextField errorMsg="Password"
                            // type="password"
                                   required label="Password" value={state.password} name="password"
                                   onChange={(e) => setState({...state, [e.target.name]:e.target.value})}
                                   placeholder="Enter password"/>
                        <TextField errorMsg="Password"
                            // type="password"
                                   required label="Confirm Password" value={state.confirmPassword} name="confirmPassword"
                                   onChange={(e) => setState({...state, [e.target.name]:e.target.value, ...state})}
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
