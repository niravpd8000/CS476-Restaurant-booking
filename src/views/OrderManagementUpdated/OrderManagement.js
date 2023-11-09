import React, {useEffect, useState} from 'react';
import {Button, Paper, Table, Box, TableBody, TableCell, TableHead, TableRow} from '@mui/material';
import {Tab} from '@mui/base/Tab';
import {TabsList} from '@mui/base/TabsList';
import {TabPanel} from '@mui/base/TabPanel';
import {Tabs} from '@mui/base/Tabs';
import {errorMessage} from "../../utils/common";
import {fetchOrderByRest} from "../../redux/modules/order/orderActions";
import {cartUpdate} from "../../redux/modules/organization/organizationActions";
import {connect} from "react-redux";
import moment from "moment/moment";

function OrderManagement({getOrderByRest}) {

    const [orderData, setOrderList] = useState([]);
    const [currentTab, setCurrentTab] = useState(0);

    useEffect(() => {
        getOrderData();
    }, []);
    const getOrderData = () => {
        const onSuccess = response => {
            setOrderList(response);
        };
        const onFail = err => {
            errorMessage(err.data?.title || err.data?.message);
        };
        getOrderByRest({}, onSuccess, onFail);
    };

    const handleTab = (event, newValue) => {
        setCurrentTab(newValue);
    };
    return (<div style={{padding: 20}}>
        <h3>Order Management</h3>

        <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
            {/*<Box sx={{bgcolor: 'background.paper'}}>*/}
            {/*    <Tabs value={currentTab} onChange={handleTab} centered>*/}
            {/*        <Tab label="Overview"/>*/}
            {/*        <Tab label="Edit Template"/>*/}
            {/*    </Tabs>*/}
            {/*</Box>*/}
            <Tabs defaultValue={0}>
                <TabsList>
                    <Tab value={0}>
                        <button variant="outlined" size="large" color=''>New Order</button>
                    </Tab>
                    <Tab value={1}>
                        <button variant="outlined" size="large" color=''>Order List</button>
                    </Tab>

                </TabsList>
                <TabPanel value={0}>
                    <Paper>

                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Order Number</TableCell>
                                    <TableCell>Customer Name</TableCell>
                                    <TableCell>Estimate time to pick up</TableCell>
                                    <TableCell style={{width: 120}}></TableCell>
                                    <TableCell style={{width: 120}}></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {orderData.map((order, index) => (
                                    <TableRow key={index}>
                                        <TableCell style={{fontWeight: "bold"}}>#{order?._id.slice(-5)}</TableCell>
                                        <TableCell>{order?.customerFullName}</TableCell>
                                        <TableCell>
                                            {moment(order?.pickup_time).format('h:mm A')}
                                        </TableCell>
                                        <TableCell>
                                            {order?.status === "Pending" ? <Button variant="contained" color="success">
                                                    Accept
                                                </Button> :
                                                    <Button variant="contained" color="warning">
                                                        View
                                                    </Button>
                                            }
                                        </TableCell>
                                        <TableCell>
                                            {order?.status === "Pending" && <Button variant="outlined" color="primary">
                                                Decline
                                            </Button>}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Paper>
                </TabPanel>
                <TabPanel value={1}>
                    <Paper elevation={3} style={{padding: 20, marginBottom: 20}}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Order Number</TableCell>
                                    <TableCell>Customer Name</TableCell>
                                    <TableCell>Estimate time to pick up</TableCell>
                                    <TableCell style={{width: 120}}></TableCell> {/* Set width */}
                                    <TableCell style={{width: 120}}></TableCell> {/* Set width */}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {Array(2)
                                    .fill(null)
                                    .map((_, index) => (
                                        <TableRow key={index}>
                                            <TableCell>#abcd123</TableCell>
                                            <TableCell>1000000000 </TableCell>
                                            <TableCell>10:15pm</TableCell>
                                            <TableCell>
                                                <Button variant="contained" color="warning">
                                                    View
                                                </Button>
                                            </TableCell>
                                            <TableCell></TableCell> {/* Empty TableCell for alignment */}
                                        </TableRow>
                                    ))}
                            </TableBody>
                        </Table>
                    </Paper>

                </TabPanel>

            </Tabs>
        </Box>


    </div>);
}

const mapDispatchToProps = dispatch => {
    return {
        getOrderByRest: (data, onSuccess, onFail) => dispatch(fetchOrderByRest({data, onSuccess, onFail})),
        updateCart: (data, onSuccess, onFail) => dispatch(cartUpdate({data, onSuccess, onFail})),
    };
};

const mapStateToProps = state => {
    return {
        order: state.order,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderManagement);




