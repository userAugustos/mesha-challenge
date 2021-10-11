import Image from "next/image";
import { useEffect } from "react";

import { Container, Info } from "./styles";


function Card({ src,title, subtitle } :any) {

  useEffect(() => {
    // console.log(song);
  }, [])

  return(
    <Container>
      <Image src={src} alt={title} width="300px" height="400px"/>
      <Info>
        <p>{title}</p>
        <span>{subtitle}</span>
      </Info>
    </Container>
  );
}

export default Card;