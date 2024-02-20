import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="container flex flex-col justify-between h-full min-h-screen gap-12 px-2 py-8 mx-auto md:gap-16 md:px-8 md:py-16 bg-[radial-gradient(145.05%_100%_at_50%_0,#1d2b41_0,#020509_57.38%,#0f1a29_88.16%)] ">
      <div className="flex flex-col items-center justify-center h-full gap-6 p-3 md:flex-row">
        <Image
          src="./logo.svg"
          alt="logo"
          width={101}
          height={96}
          className="flex-shrink-0 object-contain "
        />
        <h1 className="text-4xl font-bold text-center sm:text-5xl lg:text-6xl md:text-start  text-transparent bg-clip-text overflow-hidden bg-[radial-gradient(138.06%_1036.51%_at_95.25%_-2.54%,#7ed4fd_14.06%,#709df7_51.02%,#4d78ef_79.09%)] p-3">
          Browse Popular Anime
        </h1>
      </div>

      <div className="relative flex flex-col gap-12">
        <div className="self-center">
          <Image
            src={"/hero.webp"}
            alt="Hero"
            width={600}
            height={600}
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
