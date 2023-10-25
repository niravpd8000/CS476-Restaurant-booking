import React from 'react'
import "./IdLabel.scss"
import rightArrowBlue from "../../assets/icons/RightArrowBlue.svg";

const IdLabel = props => {
    const {label, error, required, value, label2, value2, link, className, onClick} = props;
    return (
        <div className={`idLabel mt-20 ${className}`}>
            <div className="row">
                {label && <div className={`col${label2 ? "-6" : "-12"}`}>
                    <label className="labelClass">{label}{required && <span className="color-red">*</span>}</label>
                </div>}
                {label2 && <div className="col-6">
                    <label className="labelClass">{label2}</label>
                </div>}
                {value && <div className={`col${label2 ? "-6" : "-12"}`}>
                    {!!link ?
                        <span onClick={onClick} className="common-link">{value} <img src={rightArrowBlue}
                                                                                     alt={"arrow"}/></span>
                        : <span onClick={() => onClick && onClick()}
                                className={`inputClassLabel  overflow-hidden d-flex ${!!onClick ? "cursor-pointer" : ""}`}>{value}</span>}
                </div>}
                {label2 && <div className="col-6">
                    <span className="inputClassLabel d-flex">{value2}</span>
                </div>}
            </div>
        </div>
    )
};


export default IdLabel
