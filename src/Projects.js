    import React from 'react';
    import styled from 'styled-components';

    const ProjectsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 800px;
    padding: 20px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    overflow-y: scroll;
    max-height: 400px;
    `;

    const ProjectCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
    `;

    const ProjectTitle = styled.h2`
    font-size: 24px;
    margin-bottom: 10px;
    `;

    const ProjectDescription = styled.p`
    font-size: 16px;
    `;

    function Projects() {
    const projectsData = [
        { title: 'Project 1', description: 'Description for Project 1' },
        { title: 'Project 2', description: 'Description for Project 2' },
        { title: 'Project 3', description: 'Description for Project 3' },
        // Add more project data as needed
    ];

    return (
        <ProjectsContainer>
        {projectsData.map((project, index) => (
            <ProjectCard key={index}>
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
            </ProjectCard>
        ))}
        </ProjectsContainer>
    );
    }

    export default Projects; // Ensure this line is present at the end of the file
