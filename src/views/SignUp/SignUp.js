import React, {useEffect, useState} from "react";
import GreenButton from "../../reusable/GreenButton";
import "./SignUp.scss";
import TextField from "../../reusable/TextField";
import SettingBox from "../../reusable/SettingBox";
import {Col, Row} from "antd";
import {errorMessage, getFromStorage, isPasswordComplex, validateEmail, validateMobileNumber} from "../../utils/common";
import {signup} from "../../redux/modules/authorisation/authorisationActions";
import {connect} from "react-redux";
import {useNavigate} from "react-router-dom";
import {Typography} from "@mui/material";

const SignUp = ({signup}) => {
    const navigate = useNavigate();
    const [state, setState] = useState({
        fullName: "",
        username: "",
        phone: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
    const [error, setError] = useState(false);


    useEffect(() => {
        if (getFromStorage("accessToken"))
            navigate("/")
    }, []);

    const signupControl = () => {
        const onSuccess = response => {
            navigate("/sign-in")
        };
        const onFail = err => {
            errorMessage(err.data?.title || err.data?.message);
        };
        if (state.fullName && state.username && validateMobileNumber(state.phone) && validateEmail(state.email) && isPasswordComplex(state.password) && (state.confirmPassword && state.confirmPassword === state.password))
            signup(
                {...state},
                onSuccess,
                onFail
            );
        else
            setError(true);
    };

    return (
        <Row className="container-center signUp-box">
            <Col xs={24} align={"center"}>
                <SettingBox className="container-fluid">
                    <div align="left">
                        <span className='fs-20 lh-23 fw-bold mt-30 mb-20 '>Sign Up</span>
                        <TextField errorMsg="Enter valid Full Name"
                                   required label="Full Name"
                                   value={state.fullName}
                                   error={error && !state.fullName}
                                   name="fullName"
                                   onChange={(e) => setState({...state, [e.target.name]: e.target.value})}
                                   placeholder="Enter Full Name"/>
                        <TextField errorMsg="Enter valid Username"
                                   required label="Username"
                                   value={state.username}
                                   error={error && !state.username}
                                   name="username"
                                   onChange={(e) => setState({...state, [e.target.name]: e.target.value})}
                                   placeholder="Enter Username "/>

                        <TextField errorMsg="Enter valid Mobile number"
                                   required label="Phone number"
                                   value={state.phone}
                                   error={error && !validateMobileNumber(state.phone)}
                                   name="phone"
                                   onChange={(e) => setState({...state, [e.target.name]: e.target.value})}
                                   placeholder="Enter phone number "/>

                        <TextField errorMsg="Enter valid Email"
                                   required label="Email"
                                   value={state.email}
                                   error={error && !validateEmail(state.email)}
                                   name="email"
                                   onChange={(e) => setState({...state, [e.target.name]: e.target.value})}
                                   placeholder="Enter Email"/>
                        <TextField
                            errorMsg={!isPasswordComplex(state.password) ? "Password doesn't meet complexity requirements" : "Enter password"}
                            error={error && !isPasswordComplex(state.password)}
                            type="password"
                            required label="Password"
                            value={state.password}
                            name="password"
                            onChange={(e) => setState({...state, [e.target.name]: e.target.value})}
                            placeholder="Enter password"/>
                        <TextField
                            errorMsg={state.confirmPassword && state.confirmPassword !== state.password ? "Confirm Password Doesn't Match" : "Enter valid Confirm Password"}
                            type="password"
                            required label="Confirm Password"
                            value={state.confirmPassword}
                            error={error && (!state.confirmPassword || state.confirmPassword !== state.password)}
                            name="confirmPassword"
                            onChange={(e) => setState({...state, [e.target.name]: e.target.value})}
                            placeholder="Enter Confirm password"/>
                        <div align="center">
                            <GreenButton className='btn-signIn' onClick={signupControl}>Sign Up</GreenButton>
                            <Typography style={{color: "blue", marginTop: 5}}
                                        onClick={() => navigate('/restaurant-home/sign-up')}>Register a
                                Restaurant</Typography>
                        </div>
                    </div>

                </SettingBox>
            </Col>
        </Row>
    )
};

const mapDispatchToProps = dispatch => {
    return {
        signup: (data, onSuccess, onFail) => dispatch(signup({data, onSuccess, onFail})),
    };
};

const mapStateToProps = state => {
    return {
        authorisation: state.authorisation,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
