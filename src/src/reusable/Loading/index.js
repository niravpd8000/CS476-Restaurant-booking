import React from 'react'
import {Spin} from 'antd';
import "./Loading.scss"

const Loading = ({className, mainClass, style, position, center}) => {
    return (
        <div className={`loading ${mainClass ? mainClass : ""}`} style={{position}}>
            <Spin className={`spin ${center ? "no-left" : ""} ${className}`} style={{position}}/>
        </div>
    )
};

export default Loading

