import React from 'react';
import {
    TheContentPublic,
} from './index';
import "./TheLayout.scss";
const TheLayout = (props) => {

    return (
        <div className="c-app c-default-layout">
            <div className="c-wrapper">
                <div className="layout-display-center">
                    <TheContentPublic/>
                </div>
            </div>

        </div>
    )
};

export default TheLayout;
