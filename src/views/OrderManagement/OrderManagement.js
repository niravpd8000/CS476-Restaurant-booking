import React from 'react';
import { Button, Paper, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

function OrderManagement() {
  return (
    <div style={{ padding: 20 }}>
      <Paper elevation={3} style={{ padding: 20, marginBottom: 20 }}>
        <h3>Order Management</h3>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Order Number</TableCell>
              <TableCell>Customer Name</TableCell>
              <TableCell>Estimate time to pick up</TableCell>
              <TableCell style={{ width: 120 }}></TableCell>
              <TableCell style={{ width: 120 }}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Array(3)
              .fill(null)
              .map((_, index) => (
                <TableRow key={index}>
                  <TableCell>#abcd123</TableCell>
                  <TableCell>ABCD XYZ</TableCell>
                  <TableCell>10:15pm</TableCell>
                  <TableCell>
                    <Button variant="contained" color="success">
                      Accept
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button variant="outlined" color="primary">
                      Decline
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </Paper>

      <Paper elevation={3} style={{ padding: 20, marginBottom: 20 }}>
        <Table>
        <TableHead>
            <TableRow>
              <TableCell>Order Number</TableCell>
              <TableCell>Customer Name</TableCell>
              <TableCell>Estimate time to pick up</TableCell>
              <TableCell style={{ width: 120 }}></TableCell> {/* Set width */}
              <TableCell style={{ width: 120 }}></TableCell> {/* Set width */}
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


    </div>
  );
}

export default OrderManagement;