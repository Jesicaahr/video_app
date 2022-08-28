import {
  AddTaskOutlined,
  ReplyOutlined,
  ThumbDown,
  ThumbDownOutlined,
  ThumbUp,
  ThumbUpOutlined,
} from '@mui/icons-material';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Comments from '../components/Comments';
import Card from '../components/Card';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { hostingUrl } from '../host';
import {
  dislike,
  fetchFailure,
  fetchStart,
  fetchSuccess,
  like,
} from '../redux/videoSlice';
import { format } from 'timeago.js';
import Cookies from 'universal-cookie';
import { subscription } from '../redux/userSlice';
const cookies = new Cookies();
const token = cookies.get('token');

const Container = styled.div`
  display: flex;
  gap: 24px;
`;

const Content = styled.div`
  flex: 4.5;
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
`;

const Channel = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ChannelInfo = styled.div`
  display: flex;
  gap: 0.8rem;
`;

const Image = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
`;

const ChannelDetail = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.span`
  font-weight: 500;
`;

const ChannelCounter = styled.span`
  margin-top: 0.5rem;
  margin-bottom: 0.85rem;
  color: ${({ theme }) => theme.textSoft};
  font-size: 0.85rem;
`;

const Description = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.text};
`;

const Subscribe = styled.button`
  background: #cc1a00;
  font-weight: 500;
  color: white;
  border: none;
  border-radius: 3px;
  height: max-content;
  padding: 5px 0.6rem;
  cursor: pointer;
`;

const VideoFrame = styled.video`
  max-height: 720px;
  width: 100%;
  object-fit: cover;
`;

function Video() {
  const { currentUser } = useSelector((state) => state.user);
  const { currentVideo, loading } = useSelector((state) => state.video);
  const dispatch = useDispatch();

  const path = useLocation().pathname.split('/')[2];

  const [channel, setChannel] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      dispatch(fetchStart());
      try {
        const videoRes = await axios.get(`${hostingUrl}/video/find/${path}`);
        const channelRes = await axios.get(
          `${hostingUrl}/user/find/${videoRes.data.userId}`
        );

        setChannel(channelRes.data);
        dispatch(fetchSuccess(videoRes.data));
      } catch (error) {
        dispatch(fetchFailure());
      }
    };
    fetchData();
  }, [path, dispatch]);

  const handleLike = async () => {
    await axios({
      method: 'put',
      url: `${hostingUrl}/user/like/${currentVideo._id}`,
      headers: {
        access_token: token,
      },
    });
    dispatch(like(currentUser.id));
  };
  const handleDislike = async () => {
    await axios({
      method: 'put',
      url: `${hostingUrl}/user/dislike/${currentVideo._id}`,
      headers: {
        access_token: token,
      },
    });
    dispatch(dislike(currentUser.id));
  };
  const handleSub = async () => {
    currentUser.subscribedUsers.includes(channel._id)
      ? await axios({
          method: 'put',
          url: `${hostingUrl}/user/unsub/${channel._id}`,
          headers: {
            access_token: token,
          },
        })
      : await axios({
          method: 'put',
          url: `${hostingUrl}/user/sub/${channel._id}`,
          headers: {
            access_token: token,
          },
        });
    dispatch(subscription(channel._id));
  };

  return (
    <Container>
      {!loading && currentVideo ? (
        <Content>
          <VideoWrapper>
            <VideoFrame src={currentVideo.videoUrl}></VideoFrame>
            {/* <iframe
              width="100%"
              height="430rem"
              src="https://www.youtube.com/embed/k3Vfj-e1Ma4"
              title="Youtube Video Player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe> */}
          </VideoWrapper>
          <Title>{currentVideo.title}</Title>
          <Details>
            <Info>
              {currentVideo.views} views • {format(currentVideo.createdAt)}
            </Info>
            <Buttons>
              <Button onClick={handleLike}>
                {currentVideo.likes?.includes(currentUser.id) ? (
                  <ThumbUp />
                ) : (
                  <ThumbUpOutlined />
                )}{' '}
                {currentVideo.likes?.length}
              </Button>
              <Button onClick={handleDislike}>
                {currentVideo.dislikes?.includes(currentUser.id) ? (
                  <ThumbDown />
                ) : (
                  <ThumbDownOutlined />
                )}{' '}
                Dislike
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
          <Channel>
            <ChannelInfo>
              <Image src={channel.img} />
              <ChannelDetail>
                <ChannelName>{channel.name}</ChannelName>
                <ChannelCounter>
                  {channel.subscribers} Subscriber
                </ChannelCounter>
                <Description>{currentVideo.desc}</Description>
              </ChannelDetail>
            </ChannelInfo>
            <Subscribe onClick={handleSub}>
              {currentUser.subscribedUsers?.includes(channel._id)
                ? 'SUBSCRIBED'
                : 'SUBSCRIBE'}
            </Subscribe>
          </Channel>
          <Hr />
          <Comments videoId={currentVideo._id} />
        </Content>
      ) : null}
      <Recommendation>
        {/* <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" /> */}
      </Recommendation>
    </Container>
  );
}

export default Video;
