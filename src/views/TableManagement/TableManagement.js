import React, {useEffect, useState} from 'react';
import {Button, Paper, Table, Box, TableBody, TableCell, TableHead, TableRow, Typography} from '@mui/material';
import {Tab} from '@mui/base/Tab';
import {TabsList} from '@mui/base/TabsList';
import {TabPanel} from '@mui/base/TabPanel';
import {Tabs} from '@mui/base/Tabs';
import {confirmDelete, errorMessage} from "../../utils/common";
import {fetchOrderByRest, updateOrder} from "../../redux/modules/order/orderActions";
import {cartUpdate} from "../../redux/modules/organization/organizationActions";
import {connect} from "react-redux";
import moment from "moment/moment";
import {useNavigate} from "react-router-dom";

function TableManagement({getOrderByRest, updateOrderStatus}) {

    const [orderData, setOrderList] = useState([]);
    const [currentTab, setCurrentTab] = useState(0);
    const navigate = useNavigate();
    useEffect(() => {
        getOrderData();
    }, []);
    const getOrderData = () => {
        const onSuccess = response => {
            setOrderList(response.filter(item => !item?.isPickUp));
        };
        const onFail = err => {
            errorMessage(err.data?.title || err.data?.message);
        };
        getOrderByRest({}, onSuccess, onFail);
    };

    const declineOrder = (id) => {
        const onSuccess = response => {
            getOrderData();
        };
        const onFail = err => {
            errorMessage(err.data?.title || err.data?.message);
        };
        updateOrderStatus({order_id: id, status: "Declined"}, onSuccess, onFail);
    };

    const handleTab = (event, newValue) => {
        setCurrentTab(newValue);
    };
    return (
        <div style={{padding: 20}}>
            <h3>Order Management</h3>
            <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                <Paper>
                    <Table align={"center"}>
                        <TableHead>
                            <TableRow>
                                <TableCell>Order Number</TableCell>
                                <TableCell>Customer Name</TableCell>
                                <TableCell style={{width: 186}}>Reservation Time</TableCell>
                                <TableCell style={{width: 186}}>Number Of people</TableCell>
                                <TableCell style={{width: 200}} align={"center"}>Status</TableCell>
                                <TableCell style={{width: 350}} align={"center"}>Action</TableCell>
                                {/*<TableCell style={{width: 150}}></TableCell>*/}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {orderData.map((order, index) => (
                                <TableRow key={index}>
                                    <TableCell style={{fontWeight: "bold"}}>#{order?._id.slice(-5)}</TableCell>
                                    <TableCell>{order?.customerFullName}</TableCell>
                                    <TableCell align={"center"}>
                                        {moment(order?.pickup_time).format('h:mm A')}
                                    </TableCell>
                                    <TableCell>{order?.tableDetails ? order?.tableDetails?.number_of_people : 0}</TableCell>
                                    <TableCell align={"center"}>
                                        <Typography variant="body1" style={{
                                            fontWeight: "bold",
                                            color: order?.status === "Pending" ? "blue" : order?.status === "Accepted" ? "#ff9e00" : order?.status === "Completed" ? "green" : "red"
                                        }}>{order?.status}</Typography>
                                    </TableCell>
                                    <TableCell align={"center"}
                                               style={{
                                                   display: "flex",
                                                   justifyContent: order?.status !== "Pending" ? "center" : "space-between"
                                               }}>
                                        {order?.status === "Pending" &&
                                            <Button onClick={() => navigate(`/order-summary/${order?._id}`)}
                                                    variant="contained"
                                                    color="success">
                                                View & Accept
                                            </Button>
                                        }
                                        {order?.status === "Pending" ?
                                            <Button style={{width: "100px"}}
                                                    variant="contained"
                                                    onClick={
                                                        () => confirmDelete("Are you sure you want to decline this order?",
                                                            () => declineOrder(order?._id)
                                                        )}
                                                    color="primary">
                                                Decline
                                            </Button> :
                                            <Button onClick={() => navigate(`/order-summary/${order?._id}`)}
                                                    style={{width: "100px"}} variant="contained" color="warning">
                                                View
                                            </Button>
                                        }
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Paper>
            </Box>
        </div>);
}

const mapDispatchToProps = dispatch => {
    return {
        getOrderByRest: (data, onSuccess, onFail) => dispatch(fetchOrderByRest({data, onSuccess, onFail})),
        updateOrderStatus: (data, onSuccess, onFail) => dispatch(updateOrder({data, onSuccess, onFail})),
    };
};

const mapStateToProps = state => {
    return {
        order: state.order,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableManagement);




