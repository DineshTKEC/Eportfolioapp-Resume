// src/components/Portfolio.jsx
import React, { useState, useEffect } from 'react';
import { Container, Card, Grid, Typography, CircularProgress, Snackbar } from '@mui/material';
import axios from 'axios';

const Portfolio = () => {
  const [portfolioData, setPortfolioData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('/api/portfolio')  // API endpoint to fetch portfolio data
      .then((response) => {
        setPortfolioData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError('Error fetching portfolio data');
        setLoading(false);
      });
  }, []);

  return (
    <Container>
      {loading ? (
        <CircularProgress />
      ) : (
        <div>
          <Typography variant="h3" gutterBottom align="center">My Portfolio</Typography>
          <Grid container spacing={3}>
            {/* Education */}
            <Grid item xs={12} md={6}>
              <Card>
                <Typography variant="h5" align="center" style={{ padding: '20px' }}>Education</Typography>
                <Typography variant="body1" style={{ padding: '0 20px' }}>
                  {portfolioData?.education || 'No data available'}
                </Typography>
              </Card>
            </Grid>

            {/* Skills */}
            <Grid item xs={12} md={6}>
              <Card>
                <Typography variant="h5" align="center" style={{ padding: '20px' }}>Skills</Typography>
                <Typography variant="body1" style={{ padding: '0 20px' }}>
                  {portfolioData?.skills || 'No data available'}
                </Typography>
              </Card>
            </Grid>

            {/* Projects */}
            <Grid item xs={12} md={6}>
              <Card>
                <Typography variant="h5" align="center" style={{ padding: '20px' }}>Projects</Typography>
                <Typography variant="body1" style={{ padding: '0 20px' }}>
                  {portfolioData?.projects || 'No data available'}
                </Typography>
              </Card>
            </Grid>

            {/* Certifications */}
            <Grid item xs={12} md={6}>
              <Card>
                <Typography variant="h5" align="center" style={{ padding: '20px' }}>Certifications</Typography>
                <Typography variant="body1" style={{ padding: '0 20px' }}>
                  {portfolioData?.certifications || 'No data available'}
                </Typography>
              </Card>
            </Grid>
          </Grid>
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

export default Portfolio;
