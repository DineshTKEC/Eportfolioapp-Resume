import React, { useState } from 'react';
import { Button, TextField, Grid } from '@mui/material';
import { jsPDF } from 'jspdf';

const ResumeBuilder = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    education: '',
    skills: '',
    experience: '',
    certifications: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const generateResume = () => {
    const doc = new jsPDF();
    doc.text('Resume', 20, 10);
    doc.text(`Name: ${formData.name}`, 20, 30);
    doc.text(`Email: ${formData.email}`, 20, 40);
    doc.text(`Phone: ${formData.phone}`, 20, 50);
    doc.text(`Education: ${formData.education}`, 20, 60);
    doc.text(`Skills: ${formData.skills}`, 20, 70);
    doc.text(`Experience: ${formData.experience}`, 20, 80);
    doc.text(`Certifications: ${formData.certifications}`, 20, 90);
    doc.save('resume.pdf');
  };

  return (
    <div>
      <h2>Build Your Resume</h2>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField label="Full Name" fullWidth name="name" value={formData.name} onChange={handleChange} />
        </Grid>
        <Grid item xs={12}>
          <TextField label="Email" fullWidth name="email" value={formData.email} onChange={handleChange} />
        </Grid>
        <Grid item xs={12}>
          <TextField label="Phone" fullWidth name="phone" value={formData.phone} onChange={handleChange} />
        </Grid>
        <Grid item xs={12}>
          <TextField label="Education" fullWidth name="education" value={formData.education} onChange={handleChange} />
        </Grid>
        <Grid item xs={12}>
          <TextField label="Skills" fullWidth name="skills" value={formData.skills} onChange={handleChange} />
        </Grid>
        <Grid item xs={12}>
          <TextField label="Experience" fullWidth name="experience" value={formData.experience} onChange={handleChange} />
        </Grid>
        <Grid item xs={12}>
          <TextField label="Certifications" fullWidth name="certifications" value={formData.certifications} onChange={handleChange} />
        </Grid>
      </Grid>
      <Button variant="contained" color="primary" onClick={generateResume}>Generate Resume</Button>
    </div>
  );
}

export default ResumeBuilder;
