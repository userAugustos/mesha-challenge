import Image from "next/image";
import { useRouter } from "next/router";

import { Container, Save, StyledButton } from "./styles";

import songImage from "../../assets/song.svg";
import saveIcon from "../../assets/save.svg";
import { useSelector } from "react-redux";
import getDate from "../../utils/getDate";
import getSongType from "../../utils/getSongType";
import { useEffect, useState } from "react";

export default function SaveSongs() {
  const router = useRouter();

  const [storage, setStorage] = useState<any>();

  const data = useSelector((state: any) => state);
  const date = getDate();

  useEffect(() => {
    setStorage(localStorage.getItem("@mesha-songs/data-saved"));
    // storage && console.log(JSON.parse(storage));
  }, []);

  const handleSaveData = async () => {
    const songType = getSongType(data.weather.main.temp);

    if (storage == []) {
      alert("Ouve um problema, tente de novo");
      localStorage.clear();
      return;
    }

    if (storage) {
      let lastArrayObject = JSON.parse(storage).pop();
      console.log(lastArrayObject);

      const newObject = {
        id: storage ? lastArrayObject.id + 1 : 0,
        songs: data.songs.tracks.hits,
        date,
        temp: data.weather.main.temp,
        city: data.weather.name,
        songType,
      };

      var newInfo = await JSON.parse(storage);

      newInfo.push(newObject);

      localStorage.setItem("@mesha-songs/data-saved", JSON.stringify(newInfo));
      setStorage(localStorage.getItem("@mesha-songs/data-saved"));

      return;
    }

    const info = [
      {
        id: storage ? storage.id + 1 : 0,
        songs: data.songs.tracks.hits,
        date,
        temp: data.weather.main.temp,
        city: data.weather.name,
        songType,
      },
    ];

    localStorage.setItem("@mesha-songs/data-saved", JSON.stringify(info));
    setStorage(localStorage.getItem("@mesha-songs/data-saved"));
  };

  const handleSeeStorage = () => {
    router.push("/songs");
  };

  return (
    <Container>
      <section>
        <h3>slk, aumenta o volume dessas aqui pae!</h3>
        <Image src={songImage} alt='' />
      </section>
      <Save>
        <h4>Quer Salvar essa coleção de perólas?</h4>
        <section>
          <Image src={saveIcon} alt='' />
          <StyledButton onClick={handleSaveData} color='#2ee59d'>
            Salvar
          </StyledButton>
          {storage && (
            <StyledButton onClick={handleSeeStorage} color='#e52e56'>
              Ver Salvos
            </StyledButton>
          )}
        </section>
      </Save>
    </Container>
  );
}
