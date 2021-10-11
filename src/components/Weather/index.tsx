import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ReqWeather } from "../../store/modules/weather/actions";

import { Container } from "./styles";

const Weather = () => {
  const dispatch = useDispatch();
  const [city, setCity] = useState<string>("");

  const weather = useSelector((state: any) => state.weather);

  const handleRequest = (e: any) => {
    dispatch(ReqWeather(city));
  };

  // useEffect(() => {
  //   // console.log(weather);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [weather]);
  
  return(
    <Container>
      <section>

      </section>
      <section>
        <input type="text" value={city} onChange={ (e) => setCity(e.target.value)} placeholder="cidade"/>
        <button onClick={handleRequest}>
          Procurar
        </button>
      </section>
    </Container>
  )
}

export default Weather;