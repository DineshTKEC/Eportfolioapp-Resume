
import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div
      style={{
        backgroundImage: `url('/premium_bg.jpeg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        color: 'white',
      }}
    >
      <Container>
        <Typography variant="h3" align="center" gutterBottom>
          Welcome to My Professional ePortfolio
        </Typography>
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <Link to="/portfolio">
            <Button variant="contained" color="primary" style={{ margin: '10px' }}>
              View My Portfolio
            </Button>
          </Link>
          <Link to="/resume">
            <Button variant="outlined" color="secondary" style={{ margin: '10px' }}>
              Build My Resume
            </Button>
          </Link>
          <Link to="/jobs">
            <Button variant="contained" color="success" style={{ margin: '10px' }}>
              Job Recommendations
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Home;
