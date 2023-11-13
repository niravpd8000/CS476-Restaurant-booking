import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import {Button, FormControlLabel, Radio, RadioGroup, Tooltip, Typography} from '@mui/material';
import {useNavigate} from "react-router-dom";
import {cartItemValueExtract, createDisabledTime, errorMessage} from "../../utils/common";
import {cartUpdate, fetchCart} from "../../redux/modules/organization/organizationActions";
import {connect} from "react-redux";
import moment from "moment";
import TextArea from "../../reusable/TextArea";
import {TimePicker} from "antd";
import CreditCardIcon from '@mui/icons-material/CreditCard';
import MoneyIcon from '@mui/icons-material/Money';
import {createOrder} from "../../redux/modules/order/orderActions";
import TextField from "../../reusable/TextField";
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import AddIcon from '@mui/icons-material/Add';

function CartSummary({getCart, updateCart, createOrder, organization}) {
    const navigate = useNavigate();
    const [cartData, setCartData] = useState([]);
    const [restData, setRestData] = useState({});
    const [isPickup, setIsPickup] = React.useState(true);
    const [error, setError] = React.useState(false);
    const [timeRange, setTimeRange] = useState({});
    const [duration, setDuration] = useState();
    const [pickupTime, setPickupTime] = useState(null);
    const [numberOfPeople, setNumberOfPeople] = useState(1);
    const [specialInstruction, setSpecialInstruction] = useState(null);
    const handleOrderType = (event) => {
        setIsPickup(event.target.value === "true");
    };

    useEffect(() => {
        if (organization?.cartItemQTY || organization?.cartUpdateLoaded)
            getCartData();
    }, []);

    useEffect(() => {
        const duration = moment.duration(cartData?.reduce((sum, product) => sum + product?.item?.estimate_time * product?.quantity, 0), 'minutes');
        console.log(restData?.restaurantSchedules)
        const todayTime = restData?.restaurantSchedules?.find(item => item.day === moment().format('dddd').toLowerCase())?.times[0] || {};
        todayTime.estimate_time = duration;
        setTimeRange(todayTime)
        setDuration(duration);
    }, [cartData]);

    console.log(timeRange)
    const getCartData = () => {
        const onSuccess = response => {
            setCartData(response?.items);
            const {restaurantId, restaurantName, restaurantSchedules} = response;
            setRestData({restaurantId, restaurantName, restaurantSchedules});
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


    const placeOrder = () => {
        const onSuccess = response => {
            fetchCart();
            navigate(`/order-summary/${response._id}`)
        };
        const onFail = err => {
            errorMessage(err.data?.title || err.data?.message);
        };
        if (numberOfPeople, pickupTime?.toDate())
            createOrder(
                {
                    special_instruction: specialInstruction,
                    total_price: cartData.reduce((sum, product) => sum + product?.item?.price * product?.quantity, 0),
                    pickup_time: pickupTime?.toDate(),
                    tableDetails: {
                        number_of_people: numberOfPeople,
                        arrival_time: pickupTime?.toDate()
                    },
                    payment_type: 'cash',
                    isPickUp: isPickup
                },
                onSuccess,
                onFail
            );
        else setError(true);
    };


    const hours = duration?.hours();
    const remainingMinutes = duration?.minutes();

    const onChangePickupTime = (time) => {
        setPickupTime(time);
    };
    return (

        <Box p={4}>
            {!organization.cartItemQTY|| !cartData.length?
                <Grid container spacing={4}>
                    <Grid item xs={12} align={"center"}>
                        <RemoveShoppingCartIcon style={{color: "#c5c5c5", fontSize: "300px"}}/>
                        <Typography variant="body1" style={{fontWeight: "bold", color: "#c5c5c5"}}>
                            Your cart is empty.<br/>
                            Fill it with delicious items from our menu and enjoy a delightful dining experience!
                        </Typography>
                    </Grid>
                </Grid>
                :

                <Grid container spacing={4}>
                    <Grid item xs={6}>
                        <Typography variant="body2">Your Cart from</Typography>
                        <Typography variant="h5" style={{fontWeight: "bold"}}>{restData?.restaurantName}</Typography>
                    </Grid>
                    <Grid item xs={6} md={6} lg={4} align={"right"} className="checkout-container justify-content-end">
                        <Button variant="contained" color="primary"
                                onClick={() => placeOrder()}>{isPickup ? "Schedule Pick Up" : "Reserve a Table"}</Button>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Paper style={{padding: '20px'}}>
                            {cartData?.map((item, index) =>
                                <Grid key={index} container style={{
                                    margin: " 10px 0",
                                    padding: "15px",
                                    border: "1px solid #eeeaea"
                                }}>
                                    <Grid item xs={4} className="cart-item-image">
                                        <img
                                            src={item?.item?.image_url || "https://freeiconshop.com/wp-content/uploads/edd/food-outline.png"}
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
                                            <Typography
                                                variant="subtitle1">CA${item?.item?.price * item.quantity}</Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Grid container spacing={2}
                                                  style={{display: "flex", justifyContent: "center"}}>
                                                <Grid item>
                                                    <Button variant="outlined"
                                                            onClick={() => addToCart(item, item.quantity - 1)}>-</Button>
                                                </Grid>
                                                <Grid item>
                                                    <Typography style={{margin: "6px 0"}}>{item.quantity}</Typography>
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
                            <Grid className={"cursor-pointer"} item xs={12} align={"center"}
                                  onClick={() => navigate(`/meals/${restData?.restaurantId}`)}>
                                <AddIcon style={{color: "#8080c5"}}/><Typography style={{color: "#8080c5"}}>Add
                                more items</Typography>
                            </Grid>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} md={6} lg={4}>
                        <Paper style={{padding: "30px"}}>
                            <Grid item xs={12}
                                  style={{justifyContent: "space-between", display: "flex", marginTop: "5px"}}>
                                <Typography variant="body1" style={{fontWeight: "bold"}}>Estimate time to
                                    prepare</Typography>
                                <Typography
                                    variant="body2">{hours ? hours + "h " + remainingMinutes + "m" : remainingMinutes + "m"}</Typography>
                            </Grid>
                            <Grid item xs={12} style={{justifyContent: "space-between", display: "flex"}}>
                                <Typography variant="body1" style={{fontWeight: "bold"}}>Total</Typography>
                                <Typography variant="body2"
                                            style={{fontWeight: "bold"}}>CA${cartData.reduce((sum, product) => sum + product?.item?.price * product?.quantity, 0)}</Typography>
                            </Grid>
                            <Grid item xs={12}
                                  style={{justifyContent: "space-between", display: "flex", marginTop: "10px"}}>
                                <Typography variant="body1" style={{fontWeight: "bold"}}>Store Timing</Typography>
                                <Typography variant="body2"
                                >{`${timeRange.startTime}-${timeRange.endTime}`}</Typography>
                            </Grid>
                            <Grid item xs={12} style={{marginTop: "30px"}}>
                                <Typography variant="body1" style={{fontWeight: "bold"}}>Please choose your order
                                    type</Typography>
                                <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label"
                                            name="row-radio-buttons-group"
                                            value={isPickup}
                                            onChange={handleOrderType}>
                                    <Tooltip
                                        style={{background: 'white'}}
                                        title={
                                            <React.Fragment>
                                                <Typography color="inherit">
                                                    Please note that
                                                </Typography>


                                                <p>
                                                    Please ensure that your order is picked up at least <b>15
                                                    minutes</b> before the restaurant's closing time.
                                                    <br/>
                                                    Our closing time today is at <b>{timeRange?.endTime}</b>. We
                                                    appreciate your understanding.
                                                </p>
                                            </React.Fragment>
                                        }
                                    >
                                        <FormControlLabel value={true} control={<Radio/>} label="Schedule Pick Up"/>
                                    </Tooltip>
                                    <Tooltip
                                        style={{background: 'white'}}
                                        title={
                                            <React.Fragment>
                                                <Typography color="inherit">
                                                    Please note that
                                                </Typography>
                                                <p>
                                                    Table reservations are closed <b>30
                                                    minutes</b> before the
                                                    restaurant's closing time.<br/>
                                                    Our closing time today is at <b>{timeRange?.endTime}</b>. We
                                                    appreciate your understanding.
                                                </p>
                                            </React.Fragment>
                                        }
                                    >
                                        <FormControlLabel value={false} control={<Radio/>} label="Reserve table"/>
                                    </Tooltip>
                                </RadioGroup>
                            </Grid>
                            {!isPickup && <Grid item xs={12}>
                                <Typography variant="subtitle1" style={{fontWeight: "bold", paddingTop: "5px"}}>Number
                                    of
                                    People (Max 4)<span style={{color: "red"}}> *</span></Typography>
                                <TextField type={"number"} style={{marginTop: -20, width: "50%"}} value={numberOfPeople}
                                           onChange={(e) => setNumberOfPeople(e.target.value > 0 && e.target.value < 5 ? e.target.value : 1)}/>
                            </Grid>}
                            <Grid item xs={12} style={{justifyContent: "space-between", display: "flex"}}>
                                <Typography variant="body1" style={{fontWeight: "bold", paddingTop: "5px"}}>Please
                                    Select
                                    Time <span style={{color: "red"}}> *</span></Typography>
                                <TimePicker status={error && !pickupTime && "error"} showNow={false} minuteStep={5}
                                            style={{height: 40, width: 200}}
                                            value={pickupTime} onChange={onChangePickupTime}
                                            disabledTime={() => createDisabledTime(timeRange, !isPickup)} format="HH:mm"
                                />
                            </Grid>

                            <Grid item xs={12} style={{marginTop: "30px"}}>
                                <Typography variant="body1" style={{fontWeight: "bold"}}>Please choose Payment
                                    Type</Typography>
                                <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label"
                                            name="row-radio-buttons-group"
                                            value={true}
                                >
                                    <FormControlLabel value={true} control={<Radio/>}
                                                      label={<><MoneyIcon style={{marginTop: 5}}
                                                                          fontSize={"large"}/></>}/>
                                    <FormControlLabel disabled value={false} control={<Radio/>}
                                                      label={<><CreditCardIcon style={{marginTop: 5}}
                                                                               fontSize={"large"}/></>}/>
                                        <Typography style={{color:"red", marginTop:'12px'}} varient={"subtitle1"}>Coming Soon</Typography>
                                </RadioGroup>

                            </Grid>
                        </Paper>
                        <Paper style={{padding: "30px", marginTop: "10px"}}>
                            <Grid item xs={12}
                                  style={{justifyContent: "space-between", display: "flex", marginTop: "5px"}}>
                                <TextArea onChange={(e) => setSpecialInstruction(e.value)} style={{width: "100%"}}
                                          label={"Special Instructions (optional)"}/>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>}
        </Box>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        getCart: (data, onSuccess, onFail) => dispatch(fetchCart({data, onSuccess, onFail})),
        updateCart: (data, onSuccess, onFail) => dispatch(cartUpdate({data, onSuccess, onFail})),
        createOrder: (data, onSuccess, onFail) => dispatch(createOrder({data, onSuccess, onFail})),
    };
};

const mapStateToProps = state => {
    return {
        organization: state.organization,
        order: state.order,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartSummary);
