// src/components/Admin.jsx
import React, { useState, useEffect } from 'react';
import { Container, Card, Typography, Button, CircularProgress, Snackbar } from '@mui/material';
import axios from 'axios';

const Admin = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('/api/admin/users')  // API to fetch users data
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError('Error fetching users data');
        setLoading(false);
      });
  }, []);

  const handleApproveUser = (userId) => {
    // API call to approve user
    axios.post(`/api/admin/approve/${userId}`)
      .then(() => alert('User approved successfully'))
      .catch((err) => alert('Error approving user'));
  };

  return (
    <Container>
      {loading ? (
        <CircularProgress />
      ) : (
        <div>
          <Typography variant="h3" gutterBottom align="center">Admin Panel</Typography>
          {users.length ? (
            users.map((user) => (
              <Card key={user.id} style={{ marginBottom: '20px', padding: '20px' }}>
                <Typography variant="h5">{user.name}</Typography>
                <Typography variant="body1">{user.email}</Typography>
                <Button variant="contained" color="primary" onClick={() => handleApproveUser(user.id)}>
                  Approve User
                </Button>
              </Card>
            ))
          ) : (
            <Typography>No users available.</Typography>
          )}
        </div>
      )}

      {/* Error Snackbar */}
      <Snackbar
        open={!!error}
        message={error}
        autoHideDuration={6000}
        onClose={() => setError(null)}
      />
    </Container>
  );
};

export default Admin;
