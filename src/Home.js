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



function Home() {
  return (
    <Container>
      <Heading>Welcome to My Portfolio</Heading>
      <Text>
        Put something special below.
      </Text>
    </Container>
  );
}


export default Home;
