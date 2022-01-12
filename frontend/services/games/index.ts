import axios from "axios";

export async function getGames(): Promise<Game[]> {
  const url = "http://127.0.0.1:4000/games";
  const { data } = await axios.get(url);

  return data;
}
