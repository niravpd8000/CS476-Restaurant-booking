import React, {useState} from "react";
import GreenButton from "../../reusable/GreenButton";
import "./SignUp.scss";
import TextField from "../../reusable/TextField";
import SettingBox from "../../reusable/SettingBox";
import {Col, Row} from "antd";
import {errorMessage, validateEmail} from "../../utils/common";
import {signup} from "../../redux/modules/authorisation/authorisationActions";
import {connect} from "react-redux";
import {useNavigate} from "react-router-dom";

const SignUp = ({signup}) => {
    const navigate = useNavigate();
    const [state, setState] = useState({
        firstname: "",
        lastname: "",
        phone: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
    const [error, setError] = useState(false);

    const signupControl = () => {
        const onSuccess = response => {
            navigate("/sign-in")
        };
        const onFail = err => {
            errorMessage(err.data?.title || err.data?.message);
        };
        if (state.firstname && state.lastname && state.phone && validateEmail(state.email) && state.password && (state.confirmPassword && state.confirmPassword === state.password))
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
                        <TextField errorMsg="Enter valid First Name"
                                   required label="First Name"
                                   value={state.firstname}
                                   error={error && !state.firstname}
                                   name="firstname"
                                   onChange={(e) => setState({...state, [e.target.name]: e.target.value})}
                                   placeholder="Enter First Name"/>

                        <TextField errorMsg="Enter valid Last Name"
                                   required label="Last Name"
                                   value={state.lastname}
                                   error={error && !state.lastname}
                                   name="lastname"
                                   onChange={(e) => setState({...state, [e.target.name]: e.target.value})}
                                   placeholder="Enter Last Name "/>

                        <TextField errorMsg="Enter valid Mobile number"
                                   required label="Phone number"
                                   value={state.phone}
                                   error={error && !state.phone}
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
                        <TextField errorMsg="Enter valid Password"
                                   type="password"
                                   required label="Password"
                                   value={state.password}
                                   error={error && !state.password}
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
