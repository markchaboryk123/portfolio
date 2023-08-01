import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 800px;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const Heading = styled.h1`
  font-size: 32px;
  margin-bottom: 20px;
`;

const Text = styled.p`
  font-size: 18px;
`;

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

const TextArea = styled.textarea`
  width: 100%;
  height: 150px;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
`;

function Contactus() {
  return (
    <Container>
      <Heading>Contact Us</Heading>
      <Text>
        This is a placeholder for your contact information and a form where visitors can get in
        touch with you.
      </Text>
      <ContactForm>
        <Input type="text" placeholder="Name" />
        <Input type="email" placeholder="Email" />
        <TextArea placeholder="Message" />
        <SubmitButton>Send Message</SubmitButton>
      </ContactForm>
    </Container>
  );
}

export default Contactus;
