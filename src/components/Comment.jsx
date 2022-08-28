import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { format } from 'timeago.js';
import { hostingUrl } from '../host';

const Container = styled.div`
  display: flex;
  gap: 0.8rem;
  margin: 1.5rem 0rem;
`;

const Avatar = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Name = styled.span`
  font-size: 1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;
const Date = styled.span`
  font-size: 0.85rem;
  font-weight: 400;
  color: ${({ theme }) => theme.textSoft};
  margin-left: 5px;
`;
const Text = styled.span`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.text};
`;

function Comment({ comment }) {
  const [channel, setChannel] = useState({});
  useEffect(() => {
    const fetchComment = async () => {
      const channelRes = await axios.get(
        `${hostingUrl}/user/find/${comment.userId}`
      );
      setChannel(channelRes.data);
    };
    fetchComment();
  }, [comment.userId]);

  return (
    <Container>
      <Avatar src={channel.img} />
      <Details>
        <Name>
          {channel.name} <Date>{format(comment.createdAt)}</Date>
        </Name>
        <Text>{comment.desc}</Text>
      </Details>
    </Container>
  );
}

export default Comment;
