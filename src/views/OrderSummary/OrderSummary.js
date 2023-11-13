import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import {Button, Rating, Typography} from '@mui/material';
import {useNavigate, useParams} from "react-router-dom";
import {
    cartItemValueExtract, confirmDelete,
    errorMessage,
    getRestIdFromToken,
    isRestaurantOwner,
    successMessage
} from "../../utils/common";
import {connect} from "react-redux";
import {fetchOrder, rateOrder, updateOrder} from "../../redux/modules/order/orderActions";
import moment from "moment";
import TextArea from "../../reusable/TextArea";


function OrderSummary({getOrder, updateOrderStatus, order, submitFeedback}) {
    const navigate = useNavigate();
    const [orderData, setOrderData] = useState({});
    const [rating, setRating] = useState(0);
    const [feedback, setFeedback] = useState("");

    const {id} = useParams();
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
    const updateStatus = (status) => {
        const onSuccess = response => {
            // getOrderData();
            successMessage(`Order ${status} successfully`)
            navigate(-1)

        };
        const onFail = err => {
            errorMessage(err.data?.title || err.data?.message);
        };
        updateOrderStatus({
            order_id: id,
            status
        }, onSuccess, onFail);
    };

    const giveFeedback = () => {
        const onSuccess = response => {
            successMessage(`Feedback submitted successfully`)
            getOrderData();
        };
        const onFail = err => {
            errorMessage(err.data?.title || err.data?.message);
        };
        submitFeedback({order_id: id, feedback, rating}, onSuccess, onFail);
    };

    return (

        <Box p={4}>
            <Grid container spacing={4}>
                <Grid item xs={6}>
                    <Typography variant="body2">Your Order from</Typography>
                    <Typography variant="h5" style={{fontWeight: "bold"}}>{orderData?.restaurantName}</Typography>

                </Grid>
                <Grid item xs={6}>
                    <Typography variant="h5" align={"right"} style={{
                        fontWeight: "bold",
                        color: orderData?.status === "Pending" ? "blue" : orderData?.status === "Accepted" ? "#ff9e00" : orderData?.status === "Completed" ? "green" : "red"
                    }}>{orderData?.status}</Typography>

                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper style={{padding: '20px'}}>
                        <Typography variant="body1" style={{fontWeight: "bold"}}>Order
                            #{id.slice(-5)}</Typography>
                        {orderData?.items?.map((item, index) => <Grid key={index} container style={{
                            margin: " 10px 0", padding: "15px", border: "1px solid #eeeaea"
                        }}>
                            <Grid item xs={4} className="cart-item-image">
                                <img
                                    src={item?.item?.image_url}
                                    alt="Product"/>
                            </Grid>
                            <Grid container item xs={8} style={{padding: "0 10px"}}>
                                <Grid item xs={8}>
                                    <Typography variant="body1"
                                                style={{fontWeight: "bold"}}>{item.quantity} x {item?.item?.name}</Typography>
                                    <Typography style={{fontSize: "11px"}}
                                                variant="body1"> {cartItemValueExtract(JSON.parse(item?.item?.additional_details) || {})} </Typography>
                                </Grid>
                                <Grid item xs={4} align={"right"}>
                                    <Typography variant="subtitle1">CA${item?.item?.price * item.quantity}</Typography>
                                </Grid>
                            </Grid>
                        </Grid>)}
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper style={{padding: "30px"}}>
                        <Grid item xs={12} style={{justifyContent: "space-between", display: "flex"}}>
                            <Typography variant="body1" style={{fontWeight: "bold"}}>Customer Name</Typography>
                            <Typography variant="body2"
                                        style={{fontWeight: "bold"}}>{orderData?.customerName}</Typography>
                        </Grid>
                        <Grid item xs={12} style={{justifyContent: "space-between", display: "flex"}}>
                            <Typography variant="body1" style={{fontWeight: "bold"}}>Total</Typography>
                            <Typography variant="body2">CA${orderData?.total_price}</Typography>
                        </Grid>
                        <Grid item xs={12} style={{justifyContent: "space-between", display: "flex"}}>
                            <Typography variant="body1" style={{fontWeight: "bold"}}>Payment Type</Typography>
                            <Typography variant="body2">{orderData?.payment_type}</Typography>
                        </Grid>
                        {!orderData?.isPickUp && orderData?.tableDetails && orderData?.tableDetails?.number_of_people ?
                            <Grid item xs={12} style={{justifyContent: "space-between", display: "flex"}}>
                                <Typography variant="body1" style={{fontWeight: "bold"}}>Number of People</Typography>
                                {orderData?.rating ? <Typography
                                        variant="body2">{orderData?.tableDetails?.number_of_people}</Typography> :
                                    <Typography variant="body2">{orderData?.rating}</Typography>}
                            </Grid> : <></>}
                        <Grid item xs={12} style={{justifyContent: "space-between", display: "flex"}}>
                            <Typography variant="body1"
                                        style={{fontWeight: "bold"}}>{!orderData?.isPickUp && orderData?.tableDetails && orderData?.tableDetails?.number_of_people ? "Reservstion Time" : "Pick Up Time"}</Typography>
                            <Typography variant="body2">
                                {moment(orderData?.pickup_time).format('dddd, MMMM D, h:mm A')}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} style={{justifyContent: "space-between", display: "flex"}}>
                            <Typography variant="body1" style={{fontWeight: "bold"}}>Order Created At</Typography>
                            <Typography
                                variant="body2">{moment(orderData?.timestamp).format('dddd, MMMM D, h:mm A')}</Typography>
                        </Grid>
                        {getRestIdFromToken() && orderData?.status === "Pending" &&
                            <Grid item xs={12}
                                  style={{
                                      padding: "60px 80px 0 65px",
                                      justifyContent: "space-between",
                                      display: "flex"
                                  }}>
                                <>
                                    <Button style={{width: "100px"}}
                                            variant="contained"
                                            color="success"
                                            onClick={() => updateStatus("Accepted")}
                                    >
                                        Accept
                                    </Button>
                                    <Button
                                        onClick={
                                            () => confirmDelete("Are you sure you want to decline this order?",
                                                () => updateStatus("Declined")
                                            )}
                                        style={{width: "100px"}} variant="contained" color="primary">
                                        Decline
                                    </Button>
                                </>
                            </Grid>}
                        {getRestIdFromToken() && orderData?.status === "Accepted" &&
                            <Grid item xs={12}
                                  style={{
                                      marginTop: "20px",
                                      justifyContent: "center",
                                      display: "flex"
                                  }}>
                                <Button
                                    variant="contained"
                                    color="success"
                                    onClick={() => updateStatus("Completed")}
                                >
                                    Mark as Completed
                                </Button>
                            </Grid>
                        }

                    </Paper>
                    <Paper style={{padding: "30px", marginTop: "10px"}}>
                        <Grid item xs={12} style={{justifyContent: "space-between", display: "flex"}}>
                            <Typography variant="body1" style={{fontWeight: "bold"}}>Special Instructions</Typography>
                            <Typography
                                variant="subtitle2`">{orderData?.special_instruction ? orderData?.special_instruction : "No instruction provided"}</Typography>
                        </Grid>
                    </Paper>
                    {orderData?.status === "Completed" && !isRestaurantOwner() &&
                        <Paper style={{padding: "30px", marginTop: "10px"}}>
                            <Grid item xs={12} style={{justifyContent: "space-between", display: "flex"}}>
                                <Typography variant="body1"
                                            style={{fontWeight: "bold"}}>{orderData?.rating ? "Your Rating" : "Please rate your experience"}</Typography>
                                <Rating
                                    name="simple-controlled"
                                    readOnly={!!orderData?.rating}
                                    onChange={(event, newValue) => {
                                        setRating(newValue);
                                    }}
                                    value={rating || orderData?.rating}
                                />
                            </Grid>
                            {orderData?.rating ?
                                <Grid item xs={12} style={{justifyContent: "space-between", display: "flex"}}
                                      className={"mt-2"}>
                                    <Typography variant="body1"
                                                style={{fontWeight: "bold"}}>Feedback</Typography>
                                    <Typography variant="body1">{orderData?.feedback}</Typography>
                                </Grid> :
                                <Grid item xs={12}>
                                    <TextArea rows={3} onChange={(e) => setFeedback(e.value)} style={{width: "100%"}}
                                              label={"Feedback (optional)"}/>
                                    <Button variant="contained" color="primary"
                                            onClick={() => giveFeedback()}>Submit</Button>
                                </Grid>}
                        </Paper>}
                    {orderData?.status === "Completed" && isRestaurantOwner() &&
                        <Paper style={{padding: "30px", marginTop: "10px"}}>
                            <Grid item xs={12} style={{justifyContent: "space-between", display: "flex"}}>
                                <Typography variant="body1"
                                            style={{fontWeight: "bold"}}>Customer feedback</Typography>
                                <Rating
                                    name="simple-controlled"
                                    readOnly={true}
                                    value={orderData?.rating}
                                />
                            </Grid>
                            <Grid item xs={12} style={{justifyContent: "space-between", display: "flex"}}
                                  className={"mt-2"}>
                                <Typography variant="body1"
                                            style={{fontWeight: "bold"}}>Feedback</Typography>
                                <Typography
                                    variant="body1">{orderData?.feedback ? orderData?.feedback : "No feedback"}</Typography>
                            </Grid>
                        </Paper>
                    }
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
        updateOrderStatus: (data, onSuccess, onFail) => dispatch(updateOrder({data, onSuccess, onFail})),
        submitFeedback: (data, onSuccess, onFail) => dispatch(rateOrder({data, onSuccess, onFail})),
    };
};

const mapStateToProps = state => {
    return {
        order: state.order,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderSummary);
