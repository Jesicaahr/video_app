import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  width: 16rem;
  margin-bottom: 2.5rem;
  cursor: pointer;
  /* background-color: blue; */
`;

const Image = styled.img`
  width: 100%;
  height: 9rem;
  background-color: #999;
`;

const Details = styled.div`
  display: flex;
  margin-top: 0.4rem;
  gap: 0.8rem;
  /* background-color: yellow; */
`;

const ChannelImage = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  /* background-color: black; */
  /* border-width: 0; */
`;

const Texts = styled.div``;
const Title = styled.h1`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.text};
`;
const ChannelName = styled.h2`
  font-size: 0.8rem;
  font-weight: 500;
  color: ${({ theme }) => theme.textSoft};
  margin: 0.6rem 0rem 0.3rem 0rem;
`;
const Info = styled.h2`
  font-size: 0.8rem;
  font-weight: 500;
  color: ${({ theme }) => theme.textSoft};
`;

function Card() {
  return (
    <Link to="/video/test" style={{ textDecoration: 'none', color: 'inherit' }}>
      <Container>
        <Image src="https://www.dochipo.com/wp-content/uploads/2021/09/YouTube-Thumbnail-_-Travel-6-1024x576.png" />
        <Details>
          <ChannelImage src="https://cdn.icon-icons.com/icons2/2643/PNG/512/female_woman_person_people_avatar_icon_159366.png" />
          <Texts>
            <Title>Top 10 Experiences in Sout-East Asia</Title>
            <ChannelName>Jalan Yuk</ChannelName>
            <Info>832,990 views • 5 days ago</Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  );
}

export default Card;
