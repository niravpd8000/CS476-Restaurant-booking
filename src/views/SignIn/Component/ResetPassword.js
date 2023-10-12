import React from "react";
import {Input} from "antd";
import SettingBox from "../../../reusable/SettingBox";
import GreenButton from "../../../reusable/GreenButton";
import {EyeFilled, EyeInvisibleFilled} from '@ant-design/icons';

const ResetPassword = (props) => {
    const {onSubmit} = props;

    const eyeIcon = (visible) => {
        if (!visible)
            return <EyeInvisibleFilled style={{fontSize: '20px'}}/>;
        else
            return <EyeFilled style={{fontSize: '20px'}}/>;
    };
    return (
        <SettingBox className="container-fluid">
            <span className='fs-20 lh-23 fw-bold mt-30 mb-20 '>Forget password</span>
            <span className='fs-17 lh-20 mt-16 d-flex'>Enter new password</span>
            <div className='fs-15 lh-18 mt-2 mb-17 text-gray'>Should be at least 8 characters and include numbers</div>
            <div className='fs-15 lh-18 mb-6 text-gray'>New Password</div>
            <Input.Password
                iconRender={eyeIcon}
                className='boxheight-40'/>
            <div className="fs-15 lh-18 mt-15 mb-6 text-gray">Confirm Password</div>
            <Input.Password
                iconRender={eyeIcon}
                className='boxheight-40'/>
            <div align="center">
                <GreenButton className='btn-signIn' onClick={onSubmit}>Submit</GreenButton>
            </div>
        </SettingBox>
    )
};

export default ResetPassword;
