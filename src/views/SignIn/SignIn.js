import React, {useEffect, useState} from "react";
import GreenButton from "../../reusable/GreenButton";
import "./SignIn.scss";
import TextField from "../../reusable/TextField";
import SettingBox from "../../reusable/SettingBox";
import {Col, Row} from "antd";
import {errorMessage, getFromStorage, getRestIdFromToken} from "../../utils/common";
import {useNavigate} from "react-router-dom";
import {connect} from "react-redux";
import {login} from "../../redux/modules/authorisation/authorisationActions";

const SignIn = ({login, authorisation}) => {
    const navigate = useNavigate();
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    useEffect(() => {
        if (getFromStorage("accessToken"))
            navigate("/")
    }, []);

    const signIn = () => {
        const onSuccess = response => {
            if (getRestIdFromToken())
                navigate("/restaurant-home")
            else
                navigate("/")
        };
        const onFail = err => {
            errorMessage(err.data?.title || err.data?.message);
        };
        if (password && userName)
            login(
                {username: userName, password},
                onSuccess,
                onFail
            );
        else
            setError(true);
    };

    return (
        <Row className="container-center signIn-box">
            <Col xs={24} align={"center"}>
                <SettingBox className="container-fluid">
                    <div align="left">
                        <span className='fs-20 lh-23 fw-bold mt-30 mb-20 '>Sign in</span>
                        <TextField errorMsg="Please enter Username" required label="Username"
                                   value={userName}
                                   name="userName"
                                   error={error && !userName}
                                   onChange={(e) => setUserName(e.target.value)}
                                   placeholder="Enter Username "/>
                        <TextField errorMsg="Please enter Password"
                                   type="password"
                                   error={error && !password}
                                   required label="Password" value={password} name="password"
                                   onChange={(e) => setPassword(e.target.value)}
                                   placeholder="Enter password"/>
                        <div align="center">
                            <GreenButton disabled={!(password && userName)} className='btn-signIn' onClick={signIn}>Sign
                                in</GreenButton>
                        </div>
                    </div>

                </SettingBox>
            </Col>
        </Row>
    )
};

const mapDispatchToProps = dispatch => {
    return {
        login: (data, onSuccess, onFail) => dispatch(login({data, onSuccess, onFail})),
    };
};

const mapStateToProps = state => {
    return {
        authorisation: state.authorisation,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
