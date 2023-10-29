import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { LineChart } from '@mui/x-charts';
import { Table, TableBody, TableCell, TableHead, TableRow, Paper } from '@mui/material';

function DataDashboard() {
  const xLabels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
  const orderData = [5, 7, 3, 5, 8];
  const reservationData = [4, 6, 2, 6, 7];

  return (
    <Box p={4}>
      <Grid container spacing={4}>

        <Grid item xs={12} md={6}>
          <LineChart
            width={500}
            height={300}
            series={[
              { data: orderData, label: 'Number of Orders per Day' },
            ]}
            xAxis={[{ scaleType: 'point', data: xLabels }]}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <LineChart
            width={500}
            height={300}
            series={[
              { data: reservationData, label: 'Number of Table Reservations per Day' },
            ]}
            xAxis={[{ scaleType: 'point', data: xLabels }]}
          />
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
                {[...Array(5)].map((_, index) => (
                  <TableRow key={index}>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
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
                {[...Array(5)].map((_, index) => (
                  <TableRow key={index}>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        </Grid>

      </Grid>
    </Box>
  );
}

export default DataDashboard;