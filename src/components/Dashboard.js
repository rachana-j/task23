// src/components/Dashboard.js
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
  background: #f5f5f5;
  min-height: calc(100vh - 60px); /* Adjust for the navbar height */
  padding-top: 60px;
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

const PersonalInfo = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 40px;
`;

const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin-bottom: 20px;
`;

const InfoText = styled.p`
  font-size: 18px;
  color: #333;
  text-align: center;
  max-width: 400px;
`;

const SavedPosts = styled.section`
  margin-top: 40px;
`;

const PostCard = styled.div`
  background: #fff;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const PostTitle = styled.h3`
  font-size: 20px;
  color: #007bff;
  margin-bottom: 10px;
`;

const PostContent = styled.p`
  font-size: 16px;
  color: #555;
`;

const Dashboard = () => {
  return (
    <Container>
      <Header>
        <Title>Welcome on My Page</Title>
      </Header>
      <PersonalInfo>
        <ProfileImage src='./images/admin.png' alt="Profile" />
        <InfoText>
          Hi, I'm Rachana. I love traveling and exploring new places. Here you can find my latest
          adventures and saved posts.
        </InfoText>
      </PersonalInfo>
      <SavedPosts>
        <PostCard>
          <PostTitle>Exploring the Grand Canyon</PostTitle>
          <PostContent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero et
            lorem vehicula, at commodo odio volutpat.
          </PostContent>
        </PostCard>
        <PostCard>
          <PostTitle>A Weekend in Paris</PostTitle>
          <PostContent>
            Duis ac lacus vitae quam convallis vestibulum. Nullam euismod efficitur risus, eget
            dictum libero vestibulum non.
          </PostContent>
        </PostCard>
        <PostCard>
          <PostTitle>Hiking in the Swiss Alps</PostTitle>
          <PostContent>
            Curabitur dignissim venenatis lectus, nec malesuada sem efficitur sit amet. Suspendisse
            potenti.
          </PostContent>
        </PostCard>
      </SavedPosts>
    </Container>
  );
};

export default Dashboard;
