import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import {Button, Rating, Typography} from '@mui/material';
import './PreviousOrder.css';
import {fetchOrder, fetchOrderByUser} from "../../redux/modules/order/orderActions";
import {cartUpdate} from "../../redux/modules/organization/organizationActions";
import {connect} from "react-redux";
import {useNavigate} from "react-router-dom";
import {errorMessage} from "../../utils/common";
import CircleIcon from '@mui/icons-material/Circle';

function PreviousOrder({getUserAllOrder, order}) {

    const navigate = useNavigate();
    const [orderList, setOrderList] = useState([]);
    const [rating, setRating] = React.useState(0);

    useEffect(() => {
        getOrderList();
    }, []);
    const getOrderList = () => {
        const onSuccess = response => {
            setOrderList(response);
        };
        const onFail = err => {
            errorMessage(err.data?.title || err.data?.message);
        };
        getUserAllOrder(
            {},
            onSuccess,
            onFail
        );
    };
    console.log(orderList)
    return (
        <Box p={2} className="previous-order">
            {orderList.map((order, key) => <Paper key={key} elevation={2}>
                <Box display="flex" justifyContent="space-between" alignItems="center" p={2}>
                    <Box flexShrink={1}>
                        <Box style={{display: "flex", justifyContent: "space-between"}}>
                            <Typography variant="h5" style={{fontWeight: "bold"}}
                                        gutterBottom>{order?.restaurantName}</Typography>
                            <Typography variant="h5"
                                        style={{color: order?.status === "Pending" ? "blue" : order?.status === "Accepted" ? "#ff9e00" : "red"}}
                                        gutterBottom>{order?.status}</Typography>
                        </Box>
                        <Box display="flex" alignItems="center">
                            <img
                                src={order?.image_url}
                                alt="Ordered Item" className="previous-order-image"/>
                            <Box>
                                <Typography variant="body2">Delivered yesterday - 1003 Broadway Ave</Typography>
                                <Typography variant="body2">1 Tomato Soup, 1 Side Salad...</Typography>
                                <Typography variant="body2">See receipt</Typography>
                            </Box>
                        </Box>
                    </Box>
                    {order?.status === "Completed" ? <Box>
                        <Typography variant="body2">Please rate your experience</Typography>
                        <Rating
                            name="simple-controlled"
                            value={rating}
                            onChange={(event, newValue) => {
                                setRating(newValue);
                            }}
                        />
                    </Box> : <></>}
                    <Button variant="contained" onClick={() => navigate(`/order-summary/${order?._id}`)} color="primary"
                            className="reorder-button">View</Button>
                </Box>
            </Paper>)}
        </Box>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        getUserAllOrder: (data, onSuccess, onFail) => dispatch(fetchOrderByUser({data, onSuccess, onFail})),
        updateCart: (data, onSuccess, onFail) => dispatch(cartUpdate({data, onSuccess, onFail})),
    };
};

const mapStateToProps = state => {
    return {
        order: state.order,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PreviousOrder);
