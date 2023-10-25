import React from 'react'
import RestaurantCard from "../../reusable/RestaurantCard";
import {useNavigate} from "react-router-dom";
import {Grid} from "@mui/material";

const Dashboard = () => {
    const navigate = useNavigate();

    const x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return (
        <>
            <div className="dashboard-wrapper mb-4">
                <div className="card-container mb-3">
                    <Grid container spacing={2}>
                        {
                            x.map(i =>
                                <Grid item key={i} lg={3} md={4} sm={6} xs={12}>
                                    <RestaurantCard onClick={() => navigate("/meals")}/>
                                </Grid>
                            )
                        }
                    </Grid>
                </div>
            </div>
        </>
    )
};

export default Dashboard
