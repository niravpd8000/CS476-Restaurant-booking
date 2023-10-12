import React from 'react';
import {Link} from 'react-router-dom';
import {CBreadcrumb, CBreadcrumbItem} from "@coreui/react";
// STYLE
import './CustomBreadcrumb.scss';

export default function CustomBreadcrumb({
                                             children,
                                             subLine,
                                             parentPageTitle = '',
                                             pageTitle = '',
                                             parentPageUrl = '/'
                                         }) {
    return (
        <div className="row customBreadcrumbBar">
            <div className="breadcrumb col-sm-12 col-md-6" style={{height: "80px"}}>
                <CBreadcrumb className="border-0 c-subheader-nav m-0 px-0 px-md-3">
                    <CBreadcrumbItem><Link to={parentPageUrl}>{parentPageTitle}</Link></CBreadcrumbItem>
                    {pageTitle && <CBreadcrumbItem active>{pageTitle}</CBreadcrumbItem>}
                </CBreadcrumb>
                {subLine && <div className="subLine text-gray fs-15">{subLine}</div>}
            </div>
            <div className="rightDiv pt-3 col-sm-12 col-md-6">
                {children}
            </div>
        </div>
    )
}
