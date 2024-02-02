import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { AccountCircle, CalendarToday, SupervisorAccount, FiberManualRecord } from '@mui/icons-material';

const UserList = () => {
  const userList = [
    { name: 'John Doe', dateCreated: '2024-02-02', role: 'Admin', status: 'Active' },
    { name: 'Jane Doe', dateCreated: '2024-01-15', role: 'User', status: 'Inactive' },
    { name: 'Jane Doe', dateCreated: '2024-01-15', role: 'User', status: 'Inactive' },
    { name: 'Jane Doe', dateCreated: '2024-01-15', role: 'User', status: 'Inactive' },
    { name: 'Jane Doe', dateCreated: '2024-01-15', role: 'User', status: 'Inactive' },
    { name: 'Jane Doe', dateCreated: '2024-01-15', role: 'User', status: 'Inactive' },
    { name: 'Jane Doe', dateCreated: '2024-01-15', role: 'User', status: 'Inactive' },
    { name: 'Jane Doe', dateCreated: '2024-01-15', role: 'User', status: 'Inactive' },
    { name: 'Jane Doe', dateCreated: '2024-01-15', role: 'User', status: 'Inactive' },
    { name: 'Jane Doe', dateCreated: '2024-01-15', role: 'User', status: 'Inactive' },
    { name: 'Jane Doe', dateCreated: '2024-01-15', role: 'User', status: 'Inactive' },
  ];

  return (
    <div style={{ 
      background: 'linear-gradient(120deg, #2980b9, #6dd5fa)',
      padding: '20px',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <TableContainer component={Paper} sx={{ maxWidth: '800px', borderRadius: '5px', boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.3)' }}>
        <Table sx={{ minWidth: 650 }} aria-label="user table">
          <TableHead>
            <TableRow style={{ background: '#2196f3', color: '#fff' }}>
              <TableCell align="center"><AccountCircle /> Name</TableCell>
              <TableCell align="center"><CalendarToday /> Date Created</TableCell>
              <TableCell align="center"><SupervisorAccount /> Role</TableCell>
              <TableCell align="center"><FiberManualRecord /> Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userList.map((user, index) => (
              <TableRow key={index} style={{ background: index % 2 === 0 ? '#fff' : '#f0f0f0' }}>
                <TableCell align="center">{user.name}</TableCell>
                <TableCell align="center">{user.dateCreated}</TableCell>
                <TableCell align="center">{user.role}</TableCell>
                <TableCell align="center">{user.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default UserList;
