import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from 'next/router';

import { useEffect } from "react";
import { useSelector } from "react-redux";

import Songs from "../components/Songs";
import Weather from "../components/Weather";
import SaveSongs from "../components/SaveSongs";

import { Container, ImageContainer } from "../styles";
import weatherImage from "../assets/Weather.svg";

const Home: NextPage = () => {
  const router = useRouter();
  const data = useSelector((state: any) => state);

  useEffect(() => {
    // const storage = localStorage.getItem('@mesha-songs/data-saved'); just playing, if i wanted to redirect when access home
    // storage && router.push('/songs');
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Container>
      <ImageContainer>
        {Array.isArray(data) ? (
          <>
            <Image src={weatherImage} alt='' />
            <h2>Descubra a playlist perfeita pro seu clima :)</h2>
          </>
        ) : (
          <SaveSongs />
        )}
      </ImageContainer>
      {Array.isArray(data) ? <Weather /> : <Songs />}{" "}
      {/* the initial state is am empty array, so data it's gonna be too */}
    </Container>
  );
};

export default Home;
