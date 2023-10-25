import React from 'react'
import "./SettingBox.scss"

const SettingBox = props => {
    return (
        <div className="settingBox">
            {props.children}
        </div>
    )
};

export default SettingBox;
