import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { format } from 'timeago.js';
import axios from 'axios';

const Container = styled.div`
  width: ${(props) => props.type !== 'sm' && '16rem'};
  margin-bottom: ${(props) => (props.type === 'sm' ? '1.5rem' : '2rem')};
  cursor: pointer;
  display: ${(props) => props.type === 'sm' && 'flex'};
`;

const Image = styled.img`
  width: 100%;
  height: ${(props) => (props.type === 'sm' ? '7rem' : '9rem')};
  background-color: #999;
  flex: 1;
`;

const Details = styled.div`
  display: flex;
  margin-top: ${(props) => props.type !== 'sm' && '0.4rem'};
  gap: 0.8rem;
  flex: 1;
`;

const ChannelImage = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  display: ${(props) => props.type === 'sm' && 'none'};
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

function Card({ type, video }) {
  const [channel, setChannel] = useState({});

  useEffect(() => {
    const fetchChannel = async () => {
      const res = await axios.get(
        `http://localhost:5000/api/v1/user/find/${video.userId}`
      );
      setChannel(res.data);
    };
    fetchChannel();
  }, [video.userId]);
  return (
    <Link to="/video/test" style={{ textDecoration: 'none', color: 'inherit' }}>
      <Container type={type}>
        <Image type={type} src={video.imgUrl} />
        <Details type={type}>
          <ChannelImage type={type} src={channel.img} />
          <Texts>
            <Title>{video.title}</Title>
            <ChannelName>{channel.name}</ChannelName>
            <Info>
              {video.views} views • {format(video.createdAt)}
            </Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  );
}

export default Card;
