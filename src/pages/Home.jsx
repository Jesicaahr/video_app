import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Card from '../components/Card';
import axios from 'axios';
import { hostingUrl } from '../host';
import Cookies from 'universal-cookie';
const cookies = new Cookies();
const token = cookies.get('token');

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  /* background-color: green; */
`;

function Home({ type }) {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const res = await axios({
        method: 'get',
        url: `${hostingUrl}/video/${type}`,
        headers: {
          // access_token: localStorage.token,
          access_token: token,
        },
      });

      setVideos(res.data);
    };
    fetchVideos();
  }, [type]);
  return (
    <Container>
      {videos.map((video) => (
        <Card key={video._id} video={video} />
      ))}
    </Container>
  );
}
export default Home;
