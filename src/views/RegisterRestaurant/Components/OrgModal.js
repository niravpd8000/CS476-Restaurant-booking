import React, {useEffect, useState} from "react";
import {Row, Col} from "react-bootstrap";
import CustomModal from "../../../reusable/CustomModal";
import "../../../reusable/CustomModal/Modal.scss";
import TextField from "../../../reusable/TextField";

const OrgModal = (props) => {
    const {visible, onCancel, onSubmit} = props;
    const [category, setCategory] = useState("")
    const [error, setError] = useState(false)
    useEffect(() => {
        setCategory("");
        setError(false);
    }, [visible]);
    return (
        <CustomModal onClickSubmit={() => {
            if (category)
                onSubmit(category);
            else
                setError(true);
        }} title="Create Category" visible={visible}
                     onClose={onCancel}
                     className="filter-modal">
            <Row>
                <Col xs={24}>
                    <TextField required error={error} name={"category"} label="Category" placeholder="Enter Category"
                               value={category}
                               onChange={(e) => setCategory(e.target.value)}/>
                </Col>
            </Row>
        </CustomModal>
    )
};

export default OrgModal;
