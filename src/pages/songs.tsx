import type { NextPage } from "next";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Card from "../components/Card";

import { Container, ListsSection, InfoSection } from "../styles/songs";
import { StyledButton } from "../components/SaveSongs/styles";

const Songs: NextPage = () => {
  const [storage, setStorage] = useState<any>();
  
  async function loadStorage() {
    const jsonStorage = localStorage.getItem("@mesha-songs/data-saved");

    jsonStorage && setStorage(JSON.parse(jsonStorage));
  }

  const handleDeleteStorage = (data: any) => {
    const index = storage.indexOf(data);
    console.log(index);

    if(index > -1){
      setStorage(storage.splice(index, 1));

      console.log(storage);
      
      localStorage.setItem("@mesha-songs/data-saved", JSON.stringify(storage));
    }

    // setStorage(localStorage.getItem("@mesha-songs/data-saved"));
    loadStorage();
  };

  useEffect(() => {
    loadStorage();
    // console.log(storage);
  }, []);

  return (
    <Container>
      <ListsSection>
        {storage &&
          storage.map((data: any) => (
            <ul key={data.length}>
              <InfoSection>
                <p>
                  Salva em: <span>{data.date}</span>
                </p>
                <p>
                  Você estava em: <span>{data.city}</span>!! ulala hein
                </p>
                <p>
                  Procurou por: <span>{data.songType}</span>
                </p>

                <StyledButton color='#e52e56' onClick={(e: any) => handleDeleteStorage(data)} >
                  Excluir
                </StyledButton>
              </InfoSection>

              {data.songs.map((song: any) => (
                <Card
                  title={song.track.title}
                  key={song.track.key}
                  src={song.track.images.coverart}
                  subtitle={song.track.subtitle}
                />
              ))}
            </ul>
          ))}
      </ListsSection>
    </Container>
  );
};

export default Songs;
