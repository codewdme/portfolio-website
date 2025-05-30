import Link from "next/link";
import React from "react";
import { SiCodepen, SiGithub, SiLinkedin, SiX } from "react-icons/si";
import { OutlineButton } from "../buttons/OutlineButton";

export const Header = () => {
  return (
    <header className="h-[72px] px-4 flex items-center justify-between sticky top-0 z-20 bg-zinc-900/50 backdrop-blur-md">
      <MyLinks />
      <OutlineButton
        onClick={() =>
          window.open(
            "https://drive.google.com/file/d/1W-e-KNR7MzsKocsQajKKqFVJmpKV8D36/view"
          )
        }
      >
        My Resume
      </OutlineButton>
    </header>
  );
};

export const MyLinks = () => (
  <div className="flex items-center text-lg gap-4">
    <Link
      className="text-zinc-300 hover:text-indigo-300 transition-colors"
      href="https://www.linkedin.com/in/vraj-bhingradiya-286314246/"
      target="_blank"
      rel="nofollow"
    >
      <SiLinkedin />
    </Link>
    <Link
      className="text-zinc-300 hover:text-indigo-300 transition-colors"
      href="https://www.github.com/codewdme"
      target="_blank"
      rel="nofollow"
    >
      <SiGithub />
    </Link>
    {/* <Link
      className="text-zinc-300 hover:text-indigo-300 transition-colors"
      href="https://www.x.com"
      target="_blank"
      rel="nofollow"
    >
      <SiX />
    </Link> */}
    {/* <Link
      className="text-zinc-300 hover:text-indigo-300 transition-colors"
      href="https://www.codepen.io"
      target="_blank"
      rel="nofollow"
    >
      <SiCodepen />
    </Link> */}
  </div>
);
