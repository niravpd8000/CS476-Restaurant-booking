import React from 'react'
import "./InputBox.scss"
import Loading from "../Loading";

const InputBox = props => {
    const {title, className, loading, headerAction} = props;
    return (
        <div className={`inputBox ${className}`}>
            {
                title &&
                <>
                    <div className="d-flex justify-content-between w-100">
                        <span className="heading">{title}</span>
                        {headerAction ? headerAction
                            : ""
                        }
                    </div>
                    <hr className="divider mb-4"/>
                </>
            }
            {props.children}
        </div>
    )
};

export default InputBox
