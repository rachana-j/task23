// src/components/Home.js
import React, { useState } from 'react';
import styled, { css } from 'styled-components';

const Container = styled.div`
  padding: 20px;
  background: #f0f8ff;
`;

const Header = styled.header`
  padding: 20px;
  background: #007bff;
  color: #fff;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 36px;
  margin: 0;
`;

const Subtitle = styled.h2`
  font-size: 24px;
  color: #333;
  margin: 20px 0;
  text-align: center;
`;

const InfoSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin: 40px 0;
`;

const InfoCard = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 20px;
  width: 30%;
  transition: transform 0.3s, width 0.3s;

  ${({ isBig }) =>
    isBig
      ? css`
          transform: scale(1.1);
          z-index: 1;
        `
      : css`
          transform: scale(1);
          opacity: 0.8;
        `}
  cursor: pointer;
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const CardTitle = styled.h3`
  font-size: 20px;
  color: #007bff;
  margin-bottom: 10px;
`;

const CardContent = styled.p`
  font-size: 16px;
  color: #555;
`;

const Home = () => {
  const [bigImageIndex, setBigImageIndex] = useState(0);

  const handleImageClick = (index) => {
    setBigImageIndex(index);
  };

  const travelInfo = [
    {
      title: 'Explore Exotic Destinations',
      content:
        'Discover the most beautiful places in the world. Experience new cultures, cuisines, and adventures.',
      imageUrl: './images/i1.png',
    },
    {
      title: 'Comfortable Accommodations',
      content:
        'Stay in the best hotels, resorts, and lodges. Enjoy top-notch amenities and services.',
      imageUrl: './images/i2.jpeg',
    },
    {
      title: 'Exciting Activities',
      content:
        'Engage in thrilling activities like hiking, diving, and sightseeing. Make unforgettable memories.',
      imageUrl: './images/i3.jpeg',
    },
  ];

  return (
    <Container>
      <Header>
        <Title>Welcome to Travel Explore</Title>
      </Header>
      <Subtitle>Your Gateway to Amazing Travel Experiences</Subtitle>
      <InfoSection>
        {travelInfo.map((info, index) => (
          <InfoCard
            key={index}
            isBig={index === bigImageIndex}
            onClick={() => handleImageClick(index)}
          >
            <CardImage src={info.imageUrl} alt={info.title} />
            <CardTitle>{info.title}</CardTitle>
            <CardContent>{info.content}</CardContent>
          </InfoCard>
        ))}
      </InfoSection>
    </Container>
  );
};

export default Home;
