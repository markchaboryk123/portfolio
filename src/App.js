import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Home from './Home';
import Contact from './Contact';
import Projects from './Projects';
import Me from './Me';
import Blog from './Blog'; // Import the Blog component

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee)


// Styled component for the main container
//Note that flex is esnetially making the code responsive
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh; /* Ensure the container takes the full viewport height */
  padding: 0; /* Remove any padding */
  background-color: #f0f0f0;
`;

// Styled component for the navigation bar
const Navbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #333;
  width: 100%;
  height: 60px;
`;

// Styled component for navigation links
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
          <NavLink to="/">Welcome</NavLink>
          <NavLink to="/me">About Me</NavLink>
          <NavLink to="/blog">Blog</NavLink> {/* Add the Blog link */}
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/contact">Connect</NavLink>
        </Navbar>
        {/* Note that rotes allows us to selectively render unique components below the NAV bar */}
        <Routes>
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/me" element={<Me />} />
          <Route path="/blog" element={<Blog />} /> {/* Add the Blog component route */}
          <Route path="/" element={<Home />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
