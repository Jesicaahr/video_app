import React from 'react';
import styled from 'styled-components';

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

function Comment() {
  return (
    <Container>
      <Avatar src="https://cdn.icon-icons.com/icons2/2643/PNG/512/female_woman_person_people_avatar_icon_159366.png" />
      <Details>
        <Name>
          John Doe <Date>1 hour ago</Date>
        </Name>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste eligendi
          nulla placeat ratione animi, assumenda suscipit, necessitatibus in
          iure, et repellendus? Pariatur eius quidem corrupti tenetur beatae
          voluptatum cupiditate nulla?
        </Text>
      </Details>
    </Container>
  );
}

export default Comment;
