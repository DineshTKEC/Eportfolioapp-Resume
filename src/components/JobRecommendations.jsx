import React, { useState, useEffect } from 'react';
import { Container, Typography, Button, Card } from '@mui/material';
import axios from 'axios';

const JobRecommendations = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get('/api/jobs') // Backend API call
      .then((response) => setJobs(response.data))
      .catch((error) => console.error('Error fetching job recommendations:', error));
  }, []);

  return (
    <Container>
      <Typography variant="h3" align="center" gutterBottom>Job Recommendations</Typography>
      {jobs.map((job, index) => (
        <Card key={index} style={{ marginBottom: '20px', padding: '20px' }}>
          <Typography variant="h5">{job.title}</Typography>
          <Typography>{job.company}</Typography>
          <Button variant="contained" href={job.link} target="_blank">Apply</Button>
        </Card>
      ))}
    </Container>
  );
};

export default JobRecommendations;
