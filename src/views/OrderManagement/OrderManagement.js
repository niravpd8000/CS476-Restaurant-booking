import React, { useState } from 'react';
import { Button, Paper, Table, TableBody, TableCell, TableHead, TableRow, Tab, TabContext, TabList, TabPanel, Box } from '@mui/material';

function OrderManagement() {
  const [value, setValue] = useState('1');  // Default value set to '1'

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div style={{ padding: 20 }}>
      <h3>Order Management</h3>

      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Item One" value="1" />
            <Tab label="Item Two" value="2" />
          </TabList>
        </Box>
        
        <TabPanel value="1">
          <Paper elevation={3} style={{ padding: 20, marginBottom: 20 }}>
            <Table>
              {/* ... First Table content ... */}
            </Table>
          </Paper>
        </TabPanel>

        <TabPanel value="2">
          <Paper elevation={3} style={{ padding: 20, marginBottom: 20 }}>
            <Table>
              {/* ... Second Table content ... */}
            </Table>
          </Paper>
        </TabPanel>
      </TabContext>
    </div>
  );
}

export default OrderManagement;
