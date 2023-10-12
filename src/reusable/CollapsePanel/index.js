import React, {useState} from 'react'
import "./CollapsePanel.scss"
import lockIcon from "../../assets/icons/lock.svg";
import downArrowCollapse from "../../assets/icons/downArrowCollapse.svg";
import upArrowCollapse from "../../assets/icons/upArrowCollapse.svg"


const CollapsePanel = props => {
    const {title, subTitle, className, open} = props;
    const [panel, setPanel] = useState(open || false);
    return (
        <div className={`collapse-panel formBox ${className}`}>
            <div className="collapse-hide d-flex row cursor-pointer" onClick={() => {
                setPanel(!panel)
            }}>
                <div className="d-inline-block col-10">
          <span className="collapse-heading d-flex">
            {title}
              {!panel && <img src={lockIcon} className="lock-icon" alt="lock"/>}
          </span>
                    {subTitle && <span className="ml-2px">{subTitle}</span>}
                </div>
                <div className="col-2" align="right">
                    <img src={panel ? upArrowCollapse : downArrowCollapse} className="lock-icon"/>
                </div>
            </div>
            {panel && <div className="children">
                {props.children}
            </div>}
            <hr className="mainDivider"/>
        </div>
    )
};

export default CollapsePanel
