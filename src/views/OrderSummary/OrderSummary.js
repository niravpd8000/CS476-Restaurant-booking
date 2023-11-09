import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import {Button, Typography} from '@mui/material';
import {useNavigate} from "react-router-dom";
import {cartItemValueExtract, errorMessage, successMessage} from "../../utils/common";
import {cartUpdate, fetchCart} from "../../redux/modules/organization/organizationActions";
import {connect} from "react-redux";
import Loading from "../../reusable/Loading";

function CartSummary({getCart, updateCart, organization}) {
    const navigate = useNavigate();
    const [cartData, setCartData] = useState([]);

    useEffect(() => {
        getCartData();
    }, []);
    const getCartData = () => {
        const onSuccess = response => {
            setCartData(response?.items);
        };
        const onFail = err => {
            errorMessage(err.data?.title || err.data?.message);
        };
        getCart(
            {},
            onSuccess,
            onFail
        );
    };

    const addToCart = (manuItem, quantity) => {
        const onSuccess = response => {
            getCartData();
        };
        const onFail = err => {
            errorMessage(err.data?.title || err.data?.message);
        };
        updateCart(
            {item: manuItem.item, quantity: quantity, restaurantId: manuItem?.item.rest_id, cartItemId: manuItem._id},
            onSuccess,
            onFail
        );
    };


    return (

        <Box p={4}>
            <Grid container spacing={4}>
                <Grid item xs={12}>
                    <Typography variant="h5">Your cart from Subway</Typography>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Paper style={{padding: '20px'}}>
                        {cartData.map((item, index) =>
                            <Grid key={index} container style={{
                                margin: " 10px 0",
                                padding: "15px",
                                border: "1px solid #eeeaea"
                            }}>
                                <Grid item xs={4} className="cart-item-image">
                                    <img
                                        src="https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                        alt="Product"/>
                                </Grid>
                                <Grid container item xs={8} style={{padding: "0 10px"}}>
                                    <Grid item xs={6}>
                                        <Typography variant="h6">{item?.item?.name}</Typography>
                                        <Typography
                                            variant="body1"> {cartItemValueExtract(JSON.parse(item?.item?.additional_details) || {})} </Typography>
                                    </Grid>
                                    <Grid item xs={6} align={"right"}>
                                        <Typography variant="subtitle1">CA${item?.item?.price}</Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Grid container spacing={2} style={{display: "flex", justifyContent: "center"}}>
                                            <Grid item>
                                                <Button variant="outlined"
                                                        onClick={() => addToCart(item, item.quantity - 1)}>-</Button>
                                            </Grid>
                                            <Grid item>
                                                <Typography style={{margin:"6px 0"}}>{item.quantity}</Typography>
                                            </Grid>
                                            <Grid item>
                                                <Button variant="outlined"
                                                        onClick={() => addToCart(item, item.quantity + 1)}>+</Button>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        )}
                    </Paper>
                </Grid>

                <Grid item xs={12} md={6}>
                    <div className="checkout-container">
                        <Button variant="contained" color="primary"
                                onClick={() => navigate("/payment")}>Schedule Pick Up</Button>
                        <Button variant="contained" color="primary"
                                onClick={() => navigate("/payment")}>Checkout</Button>
                        <Typography variant="h6">Total:
                            CA${cartData.reduce((sum, product) => sum + product?.item?.price * product?.quantity, 0)}</Typography>
                    </div>
                </Grid>
            </Grid>
        </Box>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        getCart: (data, onSuccess, onFail) => dispatch(fetchCart({data, onSuccess, onFail})),
        updateCart: (data, onSuccess, onFail) => dispatch(cartUpdate({data, onSuccess, onFail})),
    };
};

const mapStateToProps = state => {
    return {
        organization: state.organization,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartSummary);
