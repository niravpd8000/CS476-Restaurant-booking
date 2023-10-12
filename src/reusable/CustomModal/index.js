import React from "react";
import {Modal} from "react-bootstrap";
import LightBlueButton from "../LightBlueButton";
import GreenButton from "../GreenButton";
import './Modal.scss';
import {Loading} from "../index";

const CustomModal = (props) => {
    const {title, visible, onClose, className, children, btnname, backBtnName, loading, onClickSubmit} = props;
    return (
        <Modal
            show={visible} onHide={() => {
            !loading && onClose()
        }}
            className={`custom-modal ${className || ""}`}
        >
            {
                title && (
                    <div className="md-header">
                        {title}
                    </div>
                )
            }
            {loading && <Loading mainClass="loadingModal"/>}
            {children}
            <div className="md-footer mt-3">
                <div className="text-right mt-4">
                    <LightBlueButton className='cancel-btn'
                                     onClick={onClose}>{backBtnName ? backBtnName : "Cancel"}</LightBlueButton>
                    {onClickSubmit &&
                        <GreenButton onClick={onClickSubmit}
                                     className='submit-btn'>{`${btnname ? btnname : "Submit"}`}</GreenButton>}
                </div>
            </div>
        </Modal>
    )
};

export default CustomModal;
