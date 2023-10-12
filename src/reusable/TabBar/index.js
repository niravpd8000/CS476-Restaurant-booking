import React from 'react'
import "./TabBar.scss"

const TabBar = props => {
    const {labelList, index, onClick} = props;
    return (
        <div className={`tabBar `}>
            <ul className="nav nav-pills nav-fill mt-1px">
                {labelList.map((item, key) => {
                    let isActive = (item.value || item.value === "") ? index === item.value : index === key
                    return (
                        <li onClick={() => onClick((item.value || item.value === "") ? item.value : key)}
                            className="nav-item" key={key}>
                            <a className={`nav-link pmt-5px button${isActive ? "-active" : ""}`}>{item.label}</a>
                        </li>
                    )
                })
                }
            </ul>
        </div>
    )
};

export default TabBar
