import React from 'react'
import "./Breadcrumb.scss"
import routes from "../../routes";
import {CBreadcrumbRouter} from "@coreui/react";

const Breadcrumbs = props => {
    const {subLine} = props;
    return (
        <div className="row breadcrumbBar">
            <div className="breadcrumb col-sm-12 col-md-6">
                <CBreadcrumbRouter
                    className="border-0 c-subheader-nav m-0 px-0 px-md-3"
                    routes={routes}
                />
                {subLine && <div className="subLine text-gray fs-15">{subLine}</div>}
            </div>
            <div className="rightDiv pt-3 col-sm-12 col-md-6">
                {props.children}
            </div>
        </div>
    )
};

export default Breadcrumbs



