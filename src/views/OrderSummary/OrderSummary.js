import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import {Typography} from '@mui/material';
import {useNavigate, useParams} from "react-router-dom";
import {cartItemValueExtract, errorMessage} from "../../utils/common";
import {cartUpdate, fetchCart} from "../../redux/modules/organization/organizationActions";
import {connect} from "react-redux";
import {fetchOrder} from "../../redux/modules/order/orderActions";
import moment from "moment";

function OrderSummary({getOrder, updateCart, order}) {
    const navigate = useNavigate();
    const [orderData, setOrderData] = useState({});

    const {id} = useParams();
    console.log(id)
    useEffect(() => {
        getOrderData();
    }, []);
    const getOrderData = () => {
        const onSuccess = response => {
            setOrderData(response);
        };
        const onFail = err => {
            errorMessage(err.data?.title || err.data?.message);
        };
        getOrder({id}, onSuccess, onFail);
    };
    const addToCart = (manuItem, quantity) => {
        const onSuccess = response => {
            getOrderData();
        };
        const onFail = err => {
            errorMessage(err.data?.title || err.data?.message);
        };
        updateCart({
            item: manuItem.item,
            quantity: quantity,
            restaurantId: manuItem?.item.rest_id,
            cartItemId: manuItem._id
        }, onSuccess, onFail);
    };


    return (

        <Box p={4}>
            <Grid container spacing={4}>
                <Grid item xs={6}>
                    <Typography variant="body2">Your Order from</Typography>
                    <Typography variant="h5" style={{fontWeight: "bold"}}>{orderData?.restaurantName}</Typography>

                </Grid>
                <Grid item xs={6}>
                    <Typography variant="h5" align={"right"} style={{fontWeight: "bold", color: order?.status === "Pending" ? "blue" : order?.status === "Accepted" ? "#ff9e00" : "red"}}>{orderData?.status}</Typography>

                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper style={{padding: '20px'}}>
                        {orderData?.items?.map((item, index) => <Grid key={index} container style={{
                            margin: " 10px 0", padding: "15px", border: "1px solid #eeeaea"
                        }}>
                            <Grid item xs={4} className="cart-item-image">
                                <img
                                    src="https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                    alt="Product"/>
                            </Grid>
                            <Grid container item xs={8} style={{padding: "0 0 0 10px"}}>
                                <Grid item xs={8}>
                                    <Typography variant="body1">{item.quantity} x {item?.item?.name}</Typography>
                                    <Typography
                                        variant="body1"> {cartItemValueExtract(JSON.parse(item?.item?.additional_details) || {})} </Typography>
                                </Grid>
                                <Grid item xs={4} align={"right"}>
                                    <Typography variant="subtitle1">CA${item?.item?.price}</Typography>
                                </Grid>
                            </Grid>
                        </Grid>)}
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>

                    <Paper style={{padding: "30px"}}>
                        <Grid item xs={12} style={{justifyContent: "space-between", display: "flex"}}>
                            <Typography variant="body1" style={{fontWeight: "bold"}}>Total</Typography>
                            <Typography variant="body2">CA${orderData?.total_price}</Typography>
                        </Grid>
                        <Grid item xs={12} style={{justifyContent: "space-between", display: "flex"}}>
                            <Typography variant="body1" style={{fontWeight: "bold"}}>Payment Type</Typography>
                            <Typography variant="body2">{orderData?.payment_type}</Typography>
                        </Grid>
                        <Grid item xs={12} style={{justifyContent: "space-between", display: "flex"}}>
                            <Typography variant="body1" style={{fontWeight: "bold"}}>Pickup Time</Typography>
                            <Typography variant="body2">
                                {moment(orderData?.pickup_time).format('dddd, MMMM D, h:mm A')}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} style={{justifyContent: "space-between", display: "flex"}}>
                            <Typography variant="body1" style={{fontWeight: "bold"}}>Order Created At</Typography>
                            <Typography
                                variant="body2">{moment(orderData?.timestamp).format('dddd, MMMM D, h:mm A')}</Typography>
                        </Grid>
                        <Grid item xs={12} style={{justifyContent: "space-between", display: "flex"}}>
                            <Typography variant="body1" style={{fontWeight: "bold"}}>Rating</Typography>
                            {orderData?.rating ? <Typography variant="body2">{orderData?.rating}</Typography> :
                                <Typography variant="body2">{orderData?.rating}</Typography>}
                        </Grid>


                    </Paper>
                </Grid>

                {/*<Grid item xs={12} md={6}>*/}
                {/*    <div className="checkout-container">*/}
                {/*        <Typography variant="h6">Total:*/}
                {/*            CA${orderData?.items?.reduce((sum, product) => sum + product?.item?.price * product?.quantity, 0)}</Typography>*/}
                {/*    </div>*/}
                {/*</Grid>*/}
            </Grid>
        </Box>);
}

const mapDispatchToProps = dispatch => {
    return {
        getOrder: (data, onSuccess, onFail) => dispatch(fetchOrder({data, onSuccess, onFail})),
        updateCart: (data, onSuccess, onFail) => dispatch(cartUpdate({data, onSuccess, onFail})),
    };
};

const mapStateToProps = state => {
    return {
        order: state.order,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderSummary);
