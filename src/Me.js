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

    function Me() {
    return (
        <MeContainer>
        <MyPhoto src="/Photos/Mark.jpg" alt="Me" />
        <MyDescription>
            Hello, my name is Mark. I'm an engineer with a passion for software, technlogy, and investing. I love learning and creating new things!
        </MyDescription>
        </MeContainer>
    );
    }

    export default Me;
