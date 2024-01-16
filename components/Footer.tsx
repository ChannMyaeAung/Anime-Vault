import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex items-center justify-between w-full px-8 py-4 bg-slate-800">
      <span>2024©All rights reserved.</span>

      <Image src={"/logo.svg"} width={50} height={50} alt="logo" />

      <div className="flex items-center gap-6">
        <Image src={"/instagram.svg"} width={19} height={19} alt="logo" />
        <Image src={"/tiktok.svg"} width={19} height={19} alt="logo" />
        <Image src={"/twitter.svg"} width={19} height={19} alt="logo" />
      </div>
    </footer>
  );
};

export default Footer;
