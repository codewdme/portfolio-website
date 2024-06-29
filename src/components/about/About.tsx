import { AiOutlineArrowRight } from "react-icons/ai";
import { SectionHeader } from "../util/SectionHeader";
import Reveal from "../util/Reveal";
import { MyLinks } from "../nav/Header";
import { Stats } from "./Stats";

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />
      <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-8">
        <div className="space-y-4">
          <Reveal>
            <p className="leading-relaxed text-zinc-300">
              <span className="bg-indigo-500 text-white py-2 px-3 rounded font-bold mr-1 float-left text-2xl">
                H
              </span>
              ey! I&apos;m Vraj, if you haven&apos;t already gathered that by
              now. I'm a passionate web developer with a knack for crafting
              captivating digital experiences. I specialize in both dynamic and
              static website development, using frameworks like ReactJS and
              NextJS to bring ideas to life. My expertise lies in creating
              seamless user interfaces that engage and delight visitors.
            </p>
          </Reveal>
          <Reveal>
            <p className="leading-relaxed text-zinc-300">
              I currently work for DigitalFry as a freelance Developer.My
              proficiency extends to crafting elegant designs using tools like
              Tailwind CSS and Framer Motion, ensuring that each project is not
              only functional but also visually impressive.
            </p>
          </Reveal>
          {/* <Reveal>
            <p className="leading-relaxed text-zinc-300">
              Outside of work, I still love to trade. Any given weekday
              you&apos;ll find me digging some happy clouds with my son ☁️ I
              even teach courses online if you&apos;re looking to learn!
            </p>
          </Reveal> */}
          <Reveal>
            <p className="leading-relaxed text-zinc-300">
              I&apos;m passively looking for new positions where I can merge my
              love for code and design. If you think you&apos;ve got an opening
              that I might like, let&apos;s connect 🔗
            </p>
          </Reveal>
          <Reveal>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-4 text-sm text-indigo-300">
                <span>My links</span>
                <AiOutlineArrowRight />
              </div>
              <MyLinks />
            </div>
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  );
};
