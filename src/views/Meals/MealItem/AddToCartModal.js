import React, {useEffect, useState} from "react";
import CustomModal from "../../../reusable/CustomModal";
import "../../../reusable/CustomModal/Modal.scss";
import FormGenerator from "../../../reusable/FromGenerator";
import {Col, Row} from "antd";
import {errorMessage} from "../../../utils/common";
import {useNavigate} from "react-router-dom";
import {cartUpdate} from "../../../redux/modules/organization/organizationActions";
import {connect} from "react-redux";
import Grid from "@mui/material/Grid";
import {Button, Typography} from "@mui/material";

const AddToCartModal = (props) => {
    const {visible, onCancel, manuItem, updateCart} = props;
    const [quantity, setQty] = useState(1);
    const [state, setState] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        delete manuItem._id;
    }, [visible]);
    const handleForm = (data) => {
        setState(data);
    }

    const addToCart = () => {
            const onSuccess = response => {
                onCancel();
                navigate("/cartSummary");
            };
            const onFail = err => {
                errorMessage(err.data?.title || err.data?.message);
            };
            updateCart(
                {

                    item: {...manuItem, additional_details: JSON.stringify(state)},
                    quantity: quantity,
                    restaurantId: manuItem.rest_id
                },
                onSuccess,
                onFail
            );
        };
    return (
        <CustomModal onClickSubmit={() => {
            addToCart()
        }} title="ADD TO CART" visible={visible}
                     btnname={"Add to Cart"}
                     onClose={onCancel}
                     className="filter-modal">
            <Row>
                <Col>
                    <FormGenerator handleForm={handleForm} dataJSON={JSON.parse(manuItem.additional_details)}/>
                </Col>
                <Grid container spacing={2} alignItems="center">
                    <Grid item>
                        <Button disabled={quantity < 2} onClick={() => setQty(quantity - 1)}
                                variant="outlined">-</Button>
                    </Grid>
                    <Grid item>
                        <Typography>{quantity}</Typography>
                    </Grid>
                    <Grid item>
                        <Button variant="outlined" onClick={() => setQty(quantity + 1)}>+</Button>
                    </Grid>
                </Grid>
            </Row>

        </CustomModal>
    )
};

const mapDispatchToProps = dispatch => {
    return {
        updateCart: (data, onSuccess, onFail) => dispatch(cartUpdate({data, onSuccess, onFail})),
    };
};

export default connect(null, mapDispatchToProps)(AddToCartModal);
