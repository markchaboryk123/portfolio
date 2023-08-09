    import React from 'react';
    import styled from 'styled-components';

    const MeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 800px;
    padding: 20px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    `;

    const MyPhoto = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 20px;
    `;

    const MyDescription = styled.p`
    font-size: 18px;
    text-align: center;
    `;



const Text = styled.p`
  font-size: 18px;
`;

const Image = styled.img`
  max-width: 150px; /* Adjust the value to make the image smaller */
  margin-top: 10px;
`;
    function Me() {
    return (
        <MeContainer>
        <MyPhoto src="/assets/MARK.jpg" alt="Me" />
        <MyDescription>Hello, my name is Mark. I'm an engineer with a passion for software, technology, and investing. I love learning and creating new things!  Please feel free to connect with me.        </MyDescription>
        <Text>I am on a mission of continuous personal improvement.</Text>
        <Image src="assets\infinity.ico" alt="Continuous Improvement" />
        </MeContainer>
    );
    }

    export default Me;
