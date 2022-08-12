import {
  AddTaskOutlined,
  ReplyOutlined,
  ThumbDownOutlined,
  ThumbUpOutlined,
} from '@mui/icons-material';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  gap: 24px;
`;
const Content = styled.div`
  flex: 5;
  /* background-color: blue; */
`;

const VideoWrapper = styled.div``;

const Title = styled.h1`
  font-size: 1.3rem;
  font-weight: 400;
  margin-top: 1.1rem;
  margin-bottom: 0.8rem;
  color: ${({ theme }) => theme.text};
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Info = styled.span`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.textSoft};
`;

const Buttons = styled.div`
  display: flex;
  gap: 20px;
  color: ${({ theme }) => theme.text};
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  font-size: 0.9rem;
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Recommendation = styled.div`
  flex: 2;
  background-color: green;
`;

function Video() {
  return (
    <Container>
      <Content>
        <VideoWrapper>
          <iframe
            width="100%"
            height="430rem"
            src="https://www.youtube.com/embed/k3Vfj-e1Ma4"
            title="Youtube Video Player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </VideoWrapper>
        <Title>Test Video</Title>
        <Details>
          <Info>7,894,332 views • August 12, 2022</Info>
          <Buttons>
            <Button>
              <ThumbUpOutlined /> 237
            </Button>
            <Button>
              <ThumbDownOutlined /> Dislike
            </Button>
            <Button>
              <ReplyOutlined /> Share
            </Button>
            <Button>
              <AddTaskOutlined /> Save
            </Button>
          </Buttons>
        </Details>
        <Hr />
      </Content>
      <Recommendation>Recomendation</Recommendation>
    </Container>
  );
}

export default Video;
