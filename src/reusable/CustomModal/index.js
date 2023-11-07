import React from "react";
import Modal from '@mui/material/Modal';
import LightBlueButton from "../LightBlueButton";
import GreenButton from "../GreenButton";
import './Modal.scss';
import Loading from "../Loading";
import Box from "@mui/material/Box";
import {Col, Row} from "antd";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    overflow:"auto",
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
const CustomModal = (props) => {
    const {title, visible, onClose, className, children, btnname, backBtnName, loading, onClickSubmit} = props;
    return (
        <Modal
            open={visible} onClose={() => {
            !loading && onClose()
        }}
            className={`custom-modal ${className || ""}`}
            style={{width:"auto"}}
        >
            <Box sx={style}>
                <Row>
                    <Col xs={24}>
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
                    </Col>
                </Row>
            </Box>
        </Modal>
    )
};

export default CustomModal;
