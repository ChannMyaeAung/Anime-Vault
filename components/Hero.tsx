import Image from "next/image";
import React from "react";
import Form from "./Form";

const Hero = () => {
  return (
    <div className="container flex flex-col h-full min-h-screen gap-12 px-2 py-8 mx-auto md:gap-16 md:px-8 md:py-16 bg-slate-800">
      <div className="flex flex-col gap-6 md:flex-row">
        <Image
          src="./logo.svg"
          alt="logo"
          width={101}
          height={96}
          className="flex-shrink-0 object-contain"
        />
        <h1 className="text-5xl font-semibold text-neutral-200 page-title">
          The best site to watch anime online for Free!
        </h1>
      </div>

      <div className="relative flex flex-col gap-12">
        <Form />
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
