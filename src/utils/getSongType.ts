export default function getSongType(temp: string) {
  let songType: string;
  const numberTemp = parseFloat(temp);

  switch (true) {
    case numberTemp >= 32:
      return songType = "Rock";
    case numberTemp <= 32 && numberTemp > 24:
      return songType = "Pop";
    case numberTemp <= 24 && numberTemp > 16:
      return songType = "Classica";
    case numberTemp <= 16:
      return songType = "Lofi";
    default:
      break;
  }
}