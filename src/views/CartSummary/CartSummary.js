import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Button, Typography } from '@mui/material';
import './CartSummary.css';

function CartSummary() {
    return (
        <Box p={4}>
            <Grid container spacing={4}>
                <Grid item xs={12}>
                    <Typography variant="h5">Your cart from Subway</Typography>
                    <Typography variant="body1">Maximum order limit: CA$150.00</Typography>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Paper style={{ padding: '20px' }}>
                        <div className="cart-item-image">
                            <img src="https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Product" />
                        </div>
                        <Typography variant="h6">Cold Cut Combo</Typography>
                        <Typography variant="body1">Footlong (800 Cals), Multigrain (400 Cals)</Typography>
                        <Grid container spacing={2} alignItems="center">
                            <Grid item>
                                <Button variant="outlined">-</Button>
                            </Grid>
                            <Grid item>
                                <Typography>1x</Typography>
                            </Grid>
                            <Grid item>
                                <Button variant="outlined">+</Button>
                            </Grid>
                        </Grid>
                        <Typography variant="subtitle1">CA$15.18</Typography>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={6}>
                    <div className="checkout-container">
                        <Button variant="contained" color="primary">Checkout</Button>
                        <Typography variant="h6">Total: CA$15.18</Typography>
                    </div>
                </Grid>
            </Grid>
        </Box>
    );
}

export default CartSummary;
