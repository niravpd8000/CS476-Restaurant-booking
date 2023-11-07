import React from 'react'
import "./ProgressBar.scss"
import {Col, Row} from "antd";

const ProgressBar = props => {
    const {labelList, index} = props;
    return (
        <div className="progressBar">
            <Row className="row label">
                <Col xs={12}>
                    <span>{labelList[index].label}</span>
                </Col>
                <Col xs={12} align="right">
                    <span className="align-content-end">{index + 1}/{labelList.length}</span>
                </Col>
            </Row>
            <div className="progress" style={{height:"8px"}}>
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
