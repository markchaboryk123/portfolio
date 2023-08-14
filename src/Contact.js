import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

// Styled component for the main container
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-width: 800px; // This sets the maximum width of the container
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

// Styled component for the heading
const Heading = styled.h1`
  font-size: 32px;
  margin-bottom: 20px;
`;

// Styled component for text content
const Text = styled.p`
  font-size: 18px;
`;

// Styled component for the contact form
const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

// Styled component for input fields
const TextArea = styled.textarea`
  width: 100%;
  height: 150px;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

// Styled component for textarea
const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
`;

function Contact() {
  return (
    <Container>
      <Heading>Let's Get In Touch</Heading>
      <Text>I would love to connect on LinkedIn or via a direct message below.</Text>
      <div>
               {/* LinkedIn link with FontAwesome icon */}
          <a
            href="https://www.linkedin.com/in/mchaboryk/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </a>
        </div>
              {/* Contact form */}
      <ContactForm>
        <Input type="text" placeholder="Name" />
        <Input type="email" placeholder="Email" />
        <TextArea placeholder="Message" />
        <SubmitButton>Send Message</SubmitButton>
      </ContactForm>
    </Container>
  );
}


export default Contact;
