import { Chip } from "../util/Chip";
import Reveal from "../util/Reveal";
import { AiFillCode, AiFillSmile } from "react-icons/ai";

export const Stats = () => {
  return (
    <div className="relative">
      <Reveal>
        <div>
          <h4 className="flex items-center mb-6">
            <AiFillCode className="text-indigo-500 text-2xl" />
            <span className="font-bold ml-2">Use at work</span>
          </h4>
          <div className="flex flex-wrap gap-2 mb-12">
            <Chip>JavaScript</Chip>
            <Chip>TypeScript</Chip>
            <Chip>HTML</Chip>
            <Chip>CSS</Chip>
            <Chip>Tailwind CSS</Chip>
            <Chip>React</Chip>
            <Chip>Next JS</Chip>
            <Chip>Redux</Chip>
            <Chip>NodeJS</Chip>
            <Chip>Express</Chip>
            <Chip>Framer Motion</Chip>

            {/* <Chip>Postgres</Chip> */}
            <Chip>MongoDB</Chip>
            <Chip>GitHub</Chip>
            {/* <Chip>Jira</Chip> */}
            <Chip>Vercel</Chip>
            <Chip>AWS</Chip>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div>
          <h4 className="flex items-center mb-6">
            <AiFillSmile className="text-indigo-500 text-2xl" />
            <span className="font-bold ml-2">Use for fun</span>
          </h4>
          <div className="flex flex-wrap gap-2 mb-12">
            {/* <Chip>Rust</Chip> */}
            <Chip>Tailwind</Chip>
            {/* <Chip>Java</Chip> */}
            {/* <Chip>Spring</Chip> */}
            <Chip>Figma</Chip>
            {/* <Chip>Whimsical</Chip> */}
            <Chip>Resend</Chip>
            <Chip>Framer Motion</Chip>
            <Chip>MongoDB</Chip>
            {/* <Chip>FastAPI</Chip> */}
          </div>
        </div>
      </Reveal>
    </div>
  );
};
