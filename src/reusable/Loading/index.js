import React from 'react'
import {Spin} from 'antd';
import "./Loading.scss"
import {connect} from "react-redux";

const Loading = ({className, mainClass, style, position, center, organization, authorisation}) => {
    const organizationHasLoading = Object.keys(organization || {}).some(key => key.endsWith('Loading') && organization[key] === true);
    const authorisationHasLoading = Object.keys(authorisation || {}).some(key => key.endsWith('Loading') && authorisation[key] === true);
    if (!authorisationHasLoading && !organizationHasLoading)
        return <></>;

    return (
        <div className={`loading ${mainClass ? mainClass : ""}`} style={{position}}>
            <Spin className={`spin ${center ? "no-left" : ""} ${className}`} style={{position}}/>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        organization: state.organization,
        authorisation: state.authorisation
    };
};

export default connect(mapStateToProps, null)(Loading);

