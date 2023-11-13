import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import {Button, Rating, Typography} from '@mui/material';
import './PreviousOrder.css';
import {fetchOrder, fetchOrderByUser} from "../../redux/modules/order/orderActions";
import {cartUpdate} from "../../redux/modules/organization/organizationActions";
import {connect} from "react-redux";
import {useLocation, useNavigate} from "react-router-dom";
import {errorMessage} from "../../utils/common";
import CircleIcon from '@mui/icons-material/Circle';
import moment from "moment/moment";

function PreviousOrder({getUserAllOrder, order}) {

    const navigate = useNavigate();
    const [orderList, setOrderList] = useState([]);
    const location = useLocation();
    const isMyReservationPath = "/my-reservation" === location.pathname;
    useEffect(() => {
        getOrderList();
    }, [isMyReservationPath]);
    const getOrderList = () => {
        const onSuccess = response => {
            setOrderList(response.filter(item=>item.isPickUp!==isMyReservationPath));
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
    return (
        <Box p={2} className="previous-order" style={{maxWidth: "800px"}}>
            <Typography variant="h5" style={{fontWeight: "bold"}}
                        gutterBottom>{!isMyReservationPath?"My Pickup Orders": "My Reservations"}</Typography>
            {orderList.map((order, key) => <Paper key={key} style={{marginTop: 10}} elevation={2}>
                <Box display="flex" position={"relative"} justifyContent="space-between" alignItems="center" p={2}>
                    <Box flexShrink={1} style={{width: "100%", maxWidth: "300px"}}>
                        <Box style={{display: "flex", justifyContent: "space-between"}}>
                            <Typography variant="h5" style={{fontWeight: "bold"}}
                                        gutterBottom>{order?.restaurantName}</Typography>
                            <Typography variant="h5"
                                        style={{color: order?.status === "Pending" ? "blue" : order?.status === "Accepted" ? "#ff9e00" : order?.status === "Completed" ? "green" : "red"}}
                                        gutterBottom>{order?.status}</Typography>
                        </Box>
                        <Box display="flex" alignItems="center">
                            <img
                                src={order?.image_url}
                                alt="Ordered Item" className="previous-order-image"/>
                            {/*<Box>*/}
                            {/*    <Typography noWrap={true}*/}
                            {/*                variant="body2">{order?.items?.reduce((sum, product) => sum + product?.item?.name + ", ", "")}</Typography>*/}
                            {/*</Box>*/}
                        </Box>
                    </Box>
                    {order?.status === "Completed" && order?.rating ? <Box>
                        <Typography variant="body2">Your Rating</Typography>
                        <Rating
                            name="simple-controlled"
                            readOnly
                            value={order?.rating}
                        />
                    </Box> : <></>}
                    <Button variant="contained" onClick={() => navigate(`/order-summary/${order?._id}`)} color="primary"
                            className="reorder-button">View</Button>
                    <div style={{
                        position: "absolute",
                        right: "17px",
                        top: "22px",
                    }}>
                        <Typography
                            variant="body2">{moment(order?.timestamp).format('dddd, MMMM D, h:mm A')}</Typography>
                    </div>
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
