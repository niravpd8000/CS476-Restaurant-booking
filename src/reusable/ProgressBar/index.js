import React from 'react'
import "./ProgressBar.scss"

const ProgressBar = props => {
    const {labelList, index} = props;
    return (
        <div className="progressBar">
            <div className="row label">
                <div className="col-6">
                    <span>{labelList[index].label}</span>
                </div>
                <div className="col-6" align="right">
                    <span className="align-content-end">{index + 1}/{labelList.length}</span>
                </div>
            </div>
            <div className="progress">
                <div className="progress-bar" role="progressbar"
                     style={{width: `${((index + 1) / labelList.length) * 100}%`}}
                     aria-valuemin="0"
                     aria-valuemax="100">
                </div>
            </div>
        </div>
    )
};

export default ProgressBar
