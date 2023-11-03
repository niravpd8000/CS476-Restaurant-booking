import React, {useEffect, useState} from "react";
import CustomModal from "../../../reusable/CustomModal";
import "../../../reusable/CustomModal/Modal.scss";
import FormGenerator from "../../../reusable/FromGenerator";
import {Col, Row} from "antd";
import SettingBox from "../../../reusable/SettingBox";

const AddToCartModal = (props) => {
    const {visible, onCancel, onSubmit, manuItem} = props;
    const [category, setCategory] = useState("")
    const [error, setError] = useState(false)
    useEffect(() => {
        setCategory("");
        setError(false);
    }, [visible]);
    const handleForm=(e)=>{
    }
    return (
        <CustomModal onClickSubmit={() => {
            if (category)
                onSubmit(category);
            else
                setError(true);
        }} title="ADD TO CART" visible={visible}
                     onClose={onCancel}
                     className="filter-modal">
            <Row>
                <Col>
                    <SettingBox className="container-fluid">
                        <FormGenerator handleForm={handleForm} dataJSON={JSON.parse(manuItem.additional_details)}/>
                    </SettingBox>
                </Col>
            </Row>

        </CustomModal>
    )
};

export default AddToCartModal;
