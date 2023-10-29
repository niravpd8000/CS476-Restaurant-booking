import React from 'react';
import { Grid, Button, Typography, TextField } from "@mui/material";
import CartSummary from "./Component/CartSummary/CartSummary";
import AllergyBox from "./Component/AllergyBox/AllergyBox";

const allergies = ["Peanuts", "Gluten", "Dairy"]; // Example list of allergies

function MainCart() {
    return (
        <main>
            <CartSummary/>
            <Grid container spacing={2}>
                {/* Product Information Section */}
                <Grid item xs={12} sm={6}>
                    <Typography variant="h5" gutterBottom>
                        Product Information
                    </Typography>
                    {/* Input Bar for Product Information */}
                    <TextField fullWidth label="Product Information" variant="outlined" />
                </Grid>

                {/* Allergy Information Section */}
                <Grid item xs={12} sm={6}>
                    <Typography variant="h5" gutterBottom>
                        Allergy Information
                    </Typography>
                    {/* Input Bar for Allergy Information */}
                    <AllergyBox allergies={allergies} />
                </Grid>

                {/* Button placed at the bottom */}
                <Grid item xs={12}>
                    <Button variant="contained" color="primary">
                        Place Order
                    </Button>
                </Grid>
            </Grid>
        </main>
    );
}

export default MainCart;
