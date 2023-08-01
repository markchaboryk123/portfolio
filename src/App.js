import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import styled from 'styled-components';
import logo from './logo.svg';
import './App.css';

import Home from './Home';
import Contactus from './Contactus'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
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
          <Route path="/contact" element={<Contactus />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
