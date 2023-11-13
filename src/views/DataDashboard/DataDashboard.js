import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {BarChart, LineChart} from '@mui/x-charts';
import {Table, TableBody, TableCell, TableHead, TableRow, Paper, Typography} from '@mui/material';
import {connect} from "react-redux";
import {fetchOrderItemsForDashboard} from "../../redux/modules/order/orderActions";
import {errorMessage} from "../../utils/common";
import moment from "moment/moment";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";

function DataDashboard({fetchOrderItemsDashboard}) {
    const xLabels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
    const orderData = [5, 7, 3, 5, 8];
    const reservationData = [4, 6, 2, 6, 7];
    const [dashboardData, setDashboardData] = useState([]);

    useEffect(() => {
        getOrderItems()
    }, [])
    const getOrderItems = () => {
        const onSuccess = response => {
            setDashboardData(response);
        };
        const onFail = err => {
            errorMessage(err.data?.title || err.data?.message);
        };
        fetchOrderItemsDashboard(
            {timeInterval: "thisMonth"},
            onSuccess,
            onFail
        );
    };
    return (
        <Box p={4}>
            {(dashboardData?.reservationOrders?.length || dashboardData?.pickupOrders?.length || dashboardData?.itemCounts) ?
                <Grid container spacing={4}>

                    <Grid item xs={12} md={6}>
                        {Object.keys(dashboardData?.reservationOrders ? dashboardData?.reservationOrders : {}).length ?
                            <BarChart
                                xAxis={[
                                    {
                                        id: 'barCategories',
                                        data: Object.keys(dashboardData?.reservationOrders ? dashboardData?.reservationOrders : {}) || xLabels,
                                        scaleType: 'band',
                                    },
                                ]}
                                series={[
                                    {
                                        data: Object.values(dashboardData?.reservationOrders ? dashboardData?.reservationOrders : {}) || orderData,
                                    },
                                ]}
                                width={500}
                                height={300}
                            /> : <></>}
                    </Grid>

                    <Grid item xs={12} md={6}>
                        {Object.keys(dashboardData?.pickupOrders ? dashboardData?.pickupOrders : {}).length ?
                            <BarChart
                                xAxis={[
                                    {
                                        id: 'barCategories',
                                        data: Object.keys(dashboardData?.pickupOrders ? dashboardData?.pickupOrders : {}) || xLabels,
                                        scaleType: 'band',
                                    },
                                ]}
                                series={[
                                    {
                                        data: Object.values(dashboardData?.pickupOrders ? dashboardData?.pickupOrders : {}) || orderData,
                                    },
                                ]}
                                width={500}
                                height={300}
                            /> : <></>}
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Paper>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Item Name</TableCell>
                                        <TableCell>Number</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {Object.keys(dashboardData?.itemCounts || {}).map((key, index) => (
                                        <TableRow key={index}>
                                            <TableCell>{key}</TableCell>
                                            <TableCell>{dashboardData?.itemCounts[key]}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Paper>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Order#</TableCell>
                                        <TableCell>Date</TableCell>
                                        <TableCell>Feedback</TableCell>
                                        <TableCell>Rating</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {(dashboardData?.ratings || []).map((order, index) => (
                                        <TableRow key={index}>
                                            <TableCell
                                                style={{fontWeight: "bold"}}>#{order.orderId.slice(-5)}</TableCell>
                                            <TableCell>{moment(order?.timestamp).format('MMMM D, YYYY')}</TableCell>
                                            <TableCell>{order.feedback}</TableCell>
                                            <TableCell>{order.rating}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Paper>
                    </Grid>

                </Grid>:
                <Grid container spacing={4}>
                    <Grid item xs={12} align={"center"}>
                        {/*<RemoveShoppingCartIcon style={{color: "#c5c5c5", fontSize: "300px"}}/>*/}
                        <Typography variant="body1" style={{fontWeight: "bold", color: "#c5c5c5"}}>
                            Order not  Found<br/>
                        </Typography>
                    </Grid>
                </Grid>
            }
        </Box>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        fetchOrderItemsDashboard: (data, onSuccess, onFail) => dispatch(fetchOrderItemsForDashboard({
            data,
            onSuccess,
            onFail
        })),
    };
};

export default connect(null, mapDispatchToProps)(DataDashboard);