import React  from 'react';
import Grid from '@mui/material/Grid';
import { Typography,} from '@mui/material';
// import './orderManagement.css';



function OrderManagement() {
    return ( <>
    
    <grid container>

<grid item xs={12}>
        <div className='div1'>
            <span>Order Number</span>
            <span>Customer Name</span>
            <span>Estimate time to pick up </span>
        </div>
</grid>

    <grid item xs={8}  md={8} >
        <div className='div2'>
            <span>#someId</span>
            <span>Name</span>
            <span>20:00pm</span>
            <span>
                <button className='button1'>Accept</button>
                <button className='button2'>decline</button>
            </span>
        </div>
    
     </grid>


    <grid item xs={8}  md={8}> 
    <div className='div2'>
    <span>#someId</span>
            <span>Name</span>
            <span> Picked up</span>
            <span>
                <button  className='button3' >view</button>
            </span>

    </div>
    </grid>
    </grid>
    
    
    
    
    
    </> );
}

export default OrderManagement;