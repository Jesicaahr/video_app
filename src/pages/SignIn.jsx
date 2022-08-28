import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { loginFailure, loginStart, loginSuccess } from '../redux/userSlice';
import { hostingUrl } from '../host';
import Cookies from 'universal-cookie';
import { auth, provider } from '../firebase';
import { signInWithPopup } from 'firebase/auth';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 56px);
  color: ${({ theme }) => theme.text};
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.bgLighter};
  padding: 20px 50px;
  border: 1px solid ${({ theme }) => theme.soft};
  gap: 10px;
`;

const Title = styled.h1`
  font-size: 21px;
`;

const SubTitle = styled.h2`
  font-size: 18px;
  font-weight: 300;
`;

const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.soft};
  border-radius: 3px;
  padding: 10px;
  background-color: transparent;
  width: 100%;
  color: ${({ theme }) => theme.text};
`;

const Button = styled.button`
  border-radius: 3px;
  border: none;
  padding: 5px 0.6rem;
  font-weight: 500;
  cursor: pointer;
  background-color: ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.textSoft};
`;

const More = styled.div`
  display: flex;
  margin-top: 5px;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.textSoft};
`;

const Links = styled.div`
  margin-left: 50px;
  color: ${({ theme }) => theme.textSoft};
`;

const Link = styled.span`
  margin-left: 1rem;
`;

function SignIn() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    try {
      const res = await axios.post(`${hostingUrl}/auth/signin`, {
        email,
        password,
      });
      const access_token = res.data.access_token;
      const cookies = new Cookies();

      cookies.set('token', access_token, { path: '/' });
      dispatch(loginSuccess(res.data));
    } catch (error) {
      dispatch(loginFailure());
    }
  };

  const signInWithGoogle = async () => {
    dispatch(loginStart());

    signInWithPopup(auth, provider)
      .then((result) => {
        axios
          .post(`${hostingUrl}/auth/google`, {
            name: result.user.displayName,
            email: result.user.email,
            img: result.user.photoURL,
          })
          .then((res) => {
            dispatch(loginSuccess(res.data));
          });
      })
      .catch((err) => {
        dispatch(loginFailure());
      });
  };

  return (
    <Container>
      <Wrapper>
        <Title>Sign in</Title>
        <SubTitle>to continue to Traveltube</SubTitle>
        <Input placeholder="email" onChange={(e) => setEmail(e.target.value)} />
        <Input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={handleLogin}>Sign in</Button>
        <Title>Or</Title>
        <Button onClick={signInWithGoogle}>Signin with Google</Button>
        <Input
          placeholder="username"
          onChange={(e) => setName(e.target.value)}
        />
        <Input placeholder="email" onChange={(e) => setEmail(e.target.value)} />
        <Input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button>Sign up</Button>
      </Wrapper>
      <More>
        English(USA)
        <Links>
          <Link>Help</Link>
          <Link>Privacy</Link>
          <Link>Terms</Link>
        </Links>
      </More>
    </Container>
  );
}

export default SignIn;
