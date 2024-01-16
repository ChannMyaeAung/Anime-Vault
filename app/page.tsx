import Image from "next/image";
import { fetchAnime } from "./action";

export default async function Home() {
  const data = await fetchAnime(1);
  console.log(data);
  return (
    <main>
      <h1>Explore Anime</h1>
    </main>
  );
}
