import React from "react";
import {Row, Col} from "react-bootstrap";
import SelectMenu from "../../../reusable/SelectMenu";
import CustomModal from "../../../reusable/CustomModal";
import "../../../reusable/CustomModal/Modal.scss";

const OrgModal = (props) => {
    const {visible, onCancel} = props;
    const options = [
        {label: "1", value: "1"},
        {label: "2", value: "2"},
        {label: "3", value: "3"},
        {label: "4", value: "4"},
        {label: "5", value: "5"},
    ];

    return (
        <CustomModal title="Filter" visible={visible} onClose={onCancel} className="filter-modal">
            <Row>
                <Col xs={6}>
                    <SelectMenu label="Category" placeholder="Select Country" options={options}
                                onChange={(e) => console.log(e.target.value)}/>
                </Col>
                <Col xs={6}>
                    <SelectMenu label="Location" placeholder="Select City" options={options}
                                onChange={(e) => console.log(e.target.value)}/>
                </Col>
            </Row>
            <Row>
                <Col xs={6}>
                    <SelectMenu label="Warehouse" placeholder="Select Warehouse." options={options}
                                onChange={(e) => console.log(e.target.value)}/>
                </Col>
                <Col xs={6}>
                    <SelectMenu label="Status" placeholder="Select Status" options={options}
                                onChange={(e) => console.log(e.target.value)}/>
                </Col>
            </Row>
        </CustomModal>
    )
};

export default OrgModal;
