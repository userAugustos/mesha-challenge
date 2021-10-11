import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Container } from "./styles";
import Card from "../Card";

const Songs = (data: any) => {

  const [hits, setHits] = useState<Array<any>>();

  const songs = useSelector((state: any) => state.songs);

  useEffect(() => {
    songs && setHits(songs.tracks.hits);
    // console.log(hits);
  }, [songs])

  return (
    <Container>
      {hits ? (
        <ul>
          {hits.map((hit: any) => (<Card
                  title={hit.track.title}
                  key={hit.track.key}
                  src={hit.track.images.coverart}
                  subtitle={hit.track.subtitle}
                />))}
        </ul>
      ) : ( <p>Loading...</p> )}
    </Container>
  );
};

export default Songs;