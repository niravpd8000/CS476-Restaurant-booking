import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import SettingBox from "../../../reusable/SettingBox";
import {Loading, TextField} from "../../../reusable";
import GreenButton from "../../../reusable/GreenButton";
import {errorMessage, successMessage} from "../../../utils/common";
import "./SignIn.scss"
import {connect} from "react-redux";

const SignIn = (props) => {
    const {login, authorisation} = props;
    const history = useHistory();
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);


    return (
        <div className="signIn-box">
            {authorisation.loginLoading && <Loading center/>}
            <SettingBox className="container-fluid">
                <span className='fs-20 lh-23 fw-bold mt-30 mb-20 '>Sign in</span>
                <TextField errorMsg="Email or Mobile number" required label="Email or phone number" value={userName}
                           name="userName"
                           onChange={(e) => setUserName(e.target.value)}
                           placeholder="Enter Email or phone number "/>
                <TextField errorMsg="Password"
                    // type="password"
                           required label="Password" value={password} name="password"
                           onChange={(e) => setPassword(e.target.value)}
                           placeholder="Enter password"/>
                <div align="center">
                    <GreenButton className='btn-signIn' onClick={()=>{}}>Sign in</GreenButton>
                </div>
            </SettingBox>
        </div>
    )
};

export default SignIn;
