import React from 'react';
import styled from 'styled-components';

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1000px;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  overflow-y: scroll;
  max-height: 600px;
`;

const ProjectCard = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
  text-decoration: none;
  color: #000;
  cursor: pointer;
`;

const ProjectImage = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  margin-right: 10px;
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
    {
      title: 'Flying Cat Game',
      description: 'The project introduced game development concepts, including collision detection, game loops, and managing game entities (player and enemies).',
      image: "/assets/CatGame.jpg", // Adjust path and filename as needed
      url: '/project1',
    },
    // Add more project data as needed
  ];

  return (
    <ProjectsContainer>
      {projectsData.map((project, index) => (
        <ProjectCard key={index} href={project.url}>
          <ProjectImage src={project.image} alt={`${project.title} Image`} />
          <div>
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
          </div>
        </ProjectCard>
      ))}
    </ProjectsContainer>
  );
}

export default Projects;
