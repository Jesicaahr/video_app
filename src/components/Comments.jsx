import React from 'react';
import styled from 'styled-components';
import Comment from './Comment';

const Container = styled.div``;
const NewComment = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

const Avatar = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
`;

const Input = styled.input`
  border: none;
  background-color: transparent;
  outline: none;
  padding: 5px;
  border-bottom: 1px solid ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.text};
  width: 100%;
`;

function Comments() {
  return (
    <Container>
      <NewComment>
        <Avatar src="https://cdn.icon-icons.com/icons2/2643/PNG/512/female_woman_person_people_avatar_icon_159366.png" />
        <Input placeholder="Add a comment..." />
      </NewComment>
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </Container>
  );
}

export default Comments;
