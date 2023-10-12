import React, {useState} from "react";
import ResetPassword from "./ResetPassword";
import "./SignIn.scss"

const ForgetPassword = () => {
    const [currentTab, setCurrentTab] = useState(0);

    const resetPasswordSubmit = () => {
    };

    return (
        <div className="signIn-box">
            {currentTab === 2 && <ResetPassword onSubmit={resetPasswordSubmit}/>}
        </div>
    )
};

export default ForgetPassword;
