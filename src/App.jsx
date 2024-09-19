import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { TextField } from '@mui/material';
import jsonData from './data.json'; 
import './App.css'; 
const App = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'customer', headerName: 'Customer', width: 150, sortable: true },
    { field: 'lastSeen', headerName: 'Last Seen', width: 150, sortable: true },
    { field: 'orders', headerName: 'Orders', width: 120, sortable: true },
    { field: 'totalSpent', headerName: 'Total Spent', width: 150, sortable: true },
    { field: 'latestPurchase', headerName: 'Latest Purchase', width: 200 },
    { field: 'news', headerName: 'Subscribed to News', width: 180 },
    { field: 'segments', headerName: 'Segments', width: 130 }
  ];

  const filteredRows = jsonData.filter(
    (row) =>
      row.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      row.totalSpent.toLowerCase().includes(searchQuery.toLowerCase()) ||
      row.segments.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="app-container">
      <h1>DataGrid with Search, Sort, and Filter</h1>

      {/* Search Input */}
      <div className="search-box">
        <TextField
          label="Search"
          variant="outlined"
          fullWidth
          style={{ marginBottom: '20px' }}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* DataGrid Component */}
      <div className="data-grid-container">
        <DataGrid
          rows={filteredRows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5, 10, 15]}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
    </div>
  );
};

export default App;