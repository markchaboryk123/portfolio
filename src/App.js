import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Home from './Home';


import Contact from './Contact';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh; /* Ensure the container takes the full viewport height */
  padding: 0; /* Remove any padding */
  background-color: #f0f0f0;
`;


const Navbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #333;
  width: 100%;
  height: 60px;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  margin: 0 20px;
`;

function App() {
  return (
    <Router>
      <Container>
        <Navbar>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </Navbar>
        <Routes>
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
