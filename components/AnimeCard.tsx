import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MotionDiv } from "./MotionDiv";

export interface AnimeProps {
  id: string;
  name: string;
  image: {
    original: string;
  };
  kind: string;
  episodes: number;
  episodes_aired: number;
  score: string;
  url: string;
}

interface Props {
  anime: AnimeProps;
  index: number;
}

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const AnimeCard = ({ anime, index }: Props) => {
  return (
    <MotionDiv
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{ delay: 0.25 * index, ease: "easeInOut", duration: 0.5 }}
      viewport={{ amount: 0 }}
      className="relative w-full max-w-sm rounded"
    >
      <div className="relative w-full h-[37vh]">
        <Image
          src={`https://shikimori.one${anime.image.original}`}
          alt={anime.name}
          fill
          className=" rounded-xl"
        />
      </div>

      <article className="flex flex-col gap-3 py-4">
        <div className="flex items-center justify-between gap-1">
          <h3 className="text-xl font-medium text-neutral-100 line-clamp-1">
            {anime.name}
          </h3>
          <h4 className="text-sm font-bold uppercase">{anime.kind}</h4>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <Image
              src={"/episodes.svg"}
              alt="episodes"
              width={20}
              height={20}
              className="object-contain"
            />
            <span className="text-base font-bold text-white">
              {anime.episodes || anime.episodes_aired}
            </span>
          </div>

          <div className="flex items-center gap-1">
            <Image
              src={"/star.svg"}
              alt="episodes"
              width={20}
              height={20}
              className="object-contain"
            />
            <span className="text-[#FFAD49] text-base font-bold">
              {anime.score}
            </span>
          </div>
        </div>
        <button className="w-full p-3 text-base font-medium text-white transition-all rounded-lg hover:bg-sky-600 focus:bg-sky-600 bg-sky-500">
          <Link target="_blank" href={`https://shikimori.one${anime.url}`}>
            Watch
          </Link>
        </button>
      </article>
    </MotionDiv>
  );
};

export default AnimeCard;
