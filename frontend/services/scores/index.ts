import axios from "axios";

export async function getScores(ids: string[]): Promise<Game[]> {
  console.log(ids);
  const url = "http://127.0.0.1:4000/scores";
  const { data } = await axios.post(url, { ids });

  return data;
}
