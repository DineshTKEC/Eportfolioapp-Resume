import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import { Container, Navbar, Nav } from 'react-bootstrap';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import ResumeBuilder from './components/ResumeBuilder';
import JobRecommendations from './components/JobRecommendations';
import Admin from './components/Admin';

function App() {
  return (
    <Router>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">ePortfolio</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/portfolio">Portfolio</Nav.Link>
            <Nav.Link href="/resume">Resume Builder</Nav.Link>
            <Nav.Link href="/jobs">Job Recommendations</Nav.Link>
            <Nav.Link href="/admin">Admin</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/resume" element={<ResumeBuilder />} />
        <Route path="/jobs" element={<JobRecommendations />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;
