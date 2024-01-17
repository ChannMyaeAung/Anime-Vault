import Image from "next/image";
import { fetchAnime } from "./action";

export default async function Home() {
  const data = await fetchAnime(1);

  return (
    <main className="container flex flex-col gap-12 px-8 py-16 mx-auto ">
      <h1 className="text-3xl font-semibold text-white ">Explore Anime</h1>
      <section className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data}
      </section>
    </main>
  );
}
