import React from 'react';
import styled from 'styled-components';
import LogoTube from '../img/logo.png';
import {
  Home,
  ExploreOutlined,
  SubscriptionsOutlined,
  VideoLibraryOutlined,
  HistoryOutlined,
  LibraryMusicOutlined,
  SportsBasketballOutlined,
  SportsEsportsOutlined,
  MovieCreationOutlined,
  ArticleOutlined,
  LiveTvOutlined,
  SettingsOutlined,
  FlagOutlined,
  HelpOutlineOutlined,
  SettingsBrightnessOutlined,
  AccountCircleOutlined,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Container = styled.div`
  flex: 1.3;
  background-color: ${({ theme }) => theme.bgLighter};
  color: ${({ theme }) => theme.text};
  height: 100vh;
  font-size: 0.9rem;
  position: sticky;
  top: 0;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

const Wrapper = styled.div`
  padding: 0.7rem 1.7rem;
  margin-right: 0rem;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
  margin-bottom: 1.2rem;
`;

const Img = styled.img`
  height: 1.7rem;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  padding: 0.5rem 0rem;

  &:hover {
    background-color: ${({ theme }) => theme.soft};
  }
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Login = styled.div``;
const Button = styled.button`
  padding: 5px 0.6rem;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  margin-top: 0.6rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Title = styled.h2`
  font-size: 14px;
  font-weight: 500;
  color: #aaaaaa;
  margin-bottom: 20px;
`;

const Menu = ({ darkMode, setDarkMode }) => {
  return (
    <Container>
      <Wrapper>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Logo>
            <Img src={LogoTube} />
            Traveltube
          </Logo>
        </Link>
        <Item>
          <Home />
          Home
        </Item>
        <Link to="/trends" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Item>
            <ExploreOutlined />
            Explore
          </Item>
        </Link>
        <Link
          to="/subscriptions"
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <Item>
            <SubscriptionsOutlined />
            Subscriptions
          </Item>
        </Link>
        <Hr />
        <Item>
          <VideoLibraryOutlined />
          Library
        </Item>
        <Item>
          <HistoryOutlined />
          History
        </Item>
        <Hr />
        <Login>
          Sign in to like videos, comment, and subscribe.
          <Link to="/signin" style={{ textDecoration: 'none' }}>
            <Button>
              <AccountCircleOutlined /> SIGN IN
            </Button>
          </Link>
        </Login>
        <Hr />
        <Title>BEST OF YOUYOUTUBE</Title>
        <Item>
          <LibraryMusicOutlined />
          Music
        </Item>
        <Item>
          <SportsBasketballOutlined />
          Sports
        </Item>
        <Item>
          <SportsEsportsOutlined />
          Gaming
        </Item>
        <Item>
          <MovieCreationOutlined />
          Movies
        </Item>
        <Item>
          <ArticleOutlined />
          News
        </Item>
        <Item>
          <LiveTvOutlined />
          Live
        </Item>
        <Hr />
        <Item>
          <SettingsOutlined />
          Settings
        </Item>
        <Item>
          <FlagOutlined />
          Report
        </Item>
        <Item>
          <HelpOutlineOutlined />
          Help
        </Item>
        <Item onClick={() => setDarkMode(!darkMode)}>
          <SettingsBrightnessOutlined />
          {darkMode ? 'Light' : 'Dark'} Mode
        </Item>
      </Wrapper>
    </Container>
  );
};

export default Menu;
