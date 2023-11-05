import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Button, Typography } from '@mui/material';
import './PreviousOrder.css';

function PreviousOrder() {
    return (
        <Box p={2} className="previous-order">
            <Paper elevation={2}>
                <Box display="flex" justifyContent="space-between" alignItems="center" p={2}>
                    <Box flexShrink={1}>
                        <Typography variant="subtitle1" gutterBottom>Hale & Hearty</Typography>
                        <Box display="flex" alignItems="center">
                            <img src="https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Ordered Item" className="previous-order-image" />
                            <Box>
                                <Typography variant="body2">Delivered yesterday - 1003 Broadway Ave</Typography>
                                <Typography variant="body2">1 Tomato Soup, 1 Side Salad...</Typography>
                                <Typography variant="body2">See receipt</Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Button variant="contained" color="primary" className="reorder-button">Reorder</Button>
                </Box>
            </Paper>
        </Box>
    );
}

export default PreviousOrder;
