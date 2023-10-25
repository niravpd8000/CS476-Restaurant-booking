import {useState} from "react";
import {Grid} from "@mui/material";
import MealItem from "./MealItem/MealItem";
import MealsSummary from "./MealsSummary";

function MainMeals() {

    return (
        <main>
            <MealsSummary/>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <MealItem/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <MealItem/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <MealItem/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <MealItem/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <MealItem/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <MealItem/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <MealItem/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <MealItem/>
                </Grid>
            </Grid>
        </main>
    );
}

export default MainMeals;
