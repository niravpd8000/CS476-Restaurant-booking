import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import {Button, Typography} from '@mui/material';
import {useNavigate} from "react-router-dom";
import {errorMessage, successMessage} from "../../utils/common";
import {cartUpdate, fetchCart} from "../../redux/modules/organization/organizationActions";
import {connect} from "react-redux";

function CartSummary({getCart}) {
    const navigate = useNavigate();
    const [cartData, setCartData] = useState([]);

    useEffect(() => {
        getCartData();
    }, [])
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
    return (

        <Box p={4}>
            <Grid container spacing={4}>
                <Grid item xs={12}>
                    <Typography variant="h5">Your cart from Subway</Typography>
                    <Typography variant="body1">Maximum order limit: CA$150.00</Typography>
                </Grid>

                <Grid item xs={12} md={6}>
                    {cartData.map((item, index) => <Paper key={index} style={{padding: '20px'}}>
                        <div className="cart-item-image">
                            <img
                                src="https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="Product"/>
                        </div>
                        <Typography variant="h6">{item?.item?.name}</Typography>
                        <Typography variant="body1"> </Typography>
                        <Grid container spacing={2} alignItems="center">
                            <Grid item>
                                <Button variant="outlined">-</Button>
                            </Grid>
                            <Grid item>
                                <Typography>{item.quantity}</Typography>
                            </Grid>
                            <Grid item>
                                <Button variant="outlined">+</Button>
                            </Grid>
                        </Grid>
                        <Typography variant="subtitle1">CA${item?.item?.price}</Typography>
                    </Paper>)}
                </Grid>

                <Grid item xs={12} md={6}>
                    <div className="checkout-container">
                        <Button variant="contained" color="primary"
                                onClick={() => navigate("/payment")}>Checkout</Button>
                        <Typography variant="h6">Total: CA$15.18</Typography>
                    </div>
                </Grid>
            </Grid>
        </Box>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        getCart: (data, onSuccess, onFail) => dispatch(fetchCart({data, onSuccess, onFail})),
    };
};

export default connect(null, mapDispatchToProps)(CartSummary);
