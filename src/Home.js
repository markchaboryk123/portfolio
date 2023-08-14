import React from 'react';
import styled from 'styled-components';
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

// Styled component for the main container
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

// Styled component for the main heading
const Heading = styled.h1`
  font-size: 32px;
  margin-bottom: 20px;
`;

// Styled component for the subheading
const SubHeading = styled.h1`
  font-size: 24px;
  margin-top: 20px;
`;


const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
  {
    original: "https://picsum.photos/id/36/4179/2790",
    thumbnail: "https://picsum.photos/id/36/4179/2790",
  },
  {
    original: "https://picsum.photos/id/47/4272/2848",
    thumbnail: "https://picsum.photos/id/47/4272/2848",
  }, {
    original: "https://picsum.photos/id/36/4179/2790",
    thumbnail: "https://picsum.photos/id/36/4179/2790",
  }, {
    original: "https://picsum.photos/id/74/4288/2848",
    thumbnail: "https://picsum.photos/id/74/4288/2848",
  }, {
    original: "https://picsum.photos/id/69/4912/3264",
    thumbnail: "https://picsum.photos/id/69/4912/3264",
  },
  
];


// React component for the Home page
function Home() {
  return (
    <Container>
      <Heading>Welcome to My Portfolio</Heading>
      <SubHeading>Things I have seen recently:</SubHeading>
      {/* Note image gallery is a component i got of npm database to show my photos and have a "wow factor" */}
      <ImageGallery items={images} />
    </Container>
  );
}

export default Home;
