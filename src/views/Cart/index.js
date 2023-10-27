import React from 'react';
import { Grid } from "@mui/material";
import CartSummary from "./Component/CartSummary/CartSummary";

function MainCart() {
    return (
        <main>
            <CartSummary/>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    {/* You can add content specific to your cart item here */}
                </Grid>
                <Grid item xs={12} sm={6}>
                    {/* You can add another grid item for cart item or any other content */}
                </Grid>
                {/* Add more Grid items as needed */}
            </Grid>
        </main>
    );
}

export default MainCart;
