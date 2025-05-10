import React from "react";
import { SectionHeader } from "../util/SectionHeader";
import { Project } from "./Project";

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="r" />

      <div className="grid gap-12 grid-cols-1 md:grid-cols-2">
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

const projects = [
  {
    title: "Quiz Web App",
    imgSrc: "project-imgs/quiz-app.png",
    code: `https://github.com/codewdme/quiz-web-app.git`,
    projectLink: `https://quiz-web-app-theta.vercel.app/`,
    tech: ["NextJS", "React", "Vercel", "Git", "GitHub", "Resend API"],
    description:
      "A Quiz Web App. This website is my most recent work, designed and built on my own.",
    modalContent: (
      <>
        {/* <p>
          Pain.app is a real-time coaching app for students learning to paint.
          This app is my baby, designed and built on my own.
        </p>
        <p>
          The tech stack is based on top of MERN stack,
          connected to a NextJS backend, with data stored in MongoDB,
          deployed on Vercel.
        </p>
      */}
      </>
    ),
  },
  {
    title: "Culina | Modern Dining Experience",
    imgSrc: "project-imgs/restaurant-app.png",
    code: `https://github.com/codewdme/restaurant-web-app.git`,
    projectLink: `https://restaurant-web-app-pied.vercel.app/`,
    tech: ["NextJS", "React", "Vercel", "Git", "GitHub", "Resend API"],
    description:
      "A Modern Dining Experience. A complete restaurant management system. This website is my most recent work, designed and built on my own.",
    modalContent: (
      <>
        {/* <p>
          Pain.app is a real-time coaching app for students learning to paint.
          This app is my baby, designed and built on my own.
        </p>
        <p>
          The tech stack is based on top of MERN stack,
          connected to a NextJS backend, with data stored in MongoDB,
          deployed on Vercel.
        </p>
      */}
      </>
    ),
  },
  {
    title: "Hosting Management System",
    imgSrc: "project-imgs/hosting-management-app.png",
    code: `https://github.com/codewdme/hosting-management.git`,
    projectLink: `https://hosting-management-nine.vercel.app`,
    tech: [
      "NextJS",
      "React",
      "TypeScript",
      "Vercel",
      "Git",
      "GitHub",
      "Resend API",
    ],
    description:
      "A Hosting Management System. This website is my most recent work, designed and built on my own.",
    modalContent: (
      <>
        {/* <p>
          Pain.app is a real-time coaching app for students learning to paint.
          This app is my baby, designed and built on my own.
        </p>
        <p>
          The tech stack is based on top of MERN stack,
          connected to a NextJS backend, with data stored in MongoDB,
          deployed on Vercel.
        </p>
      */}
      </>
    ),
  },
  {
    title: "Digital Fry",
    imgSrc: "project-imgs/digital-fry-2025.png",
    code: `https://github.com/codewdme/digital-fry-website.git`,
    projectLink: `https://www.digitalfry.in/`,
    tech: [
      "NextJS",
      "React",
      "Vercel",
      "Git",
      "GitHub",
      "Framer Motion",
      "Resend API",
    ],
    description:
      "A Agency Website. This website is my most recent work, designed and built on my own.",
    modalContent: (
      <>
        {/* <p>
          Pain.app is a real-time coaching app for students learning to paint.
          This app is my baby, designed and built on my own.
        </p>
        <p>
          The tech stack is based on top of Flutter for the mobile app,
          connected to a Python & FastAPI backend, with data stored in Postgres,
          deployed on Heroku.
        </p>
        <p>
          Because this isn&apos;t real, here&apos;s some gibberish to fill space{" "}
          {":)"}
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          quia officia odio nulla consectetur aperiam ad tempora magni magnam
          nesciunt.
        </p>
        <p>
          Fuga id sapiente facere ipsa eius exercitationem officiis deleniti,
          rerum dolorum. Deserunt soluta modi culpa animi.
        </p> */}
      </>
    ),
  },
  {
    title: "Aroro Hyundai Website",
    imgSrc: "project-imgs/arora-hyundai.png",
    code: `https://github.com/codewdme/arora-hyundai-website.git`,
    projectLink: `https://www.arorahyundai.com/`,
    tech: [
      "NextJS",
      "React",
      "Vercel",
      "Git",
      "GitHub",
      "Framer Motion",
      "Resend API",
    ],
    description:
      "A Crypto Wallet Website. This website is my most recent work, designed and built on my own.",
    modalContent: (
      <>
        {/* <p>
          Pain.app is a real-time coaching app for students learning to paint.
          This app is my baby, designed and built on my own.
        </p>
        <p>
          The tech stack is based on top of Flutter for the mobile app,
          connected to a Python & FastAPI backend, with data stored in Postgres,
          deployed on Heroku.
        </p>
        <p>
          Because this isn&apos;t real, here&apos;s some gibberish to fill space{" "}
          {":)"}
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          quia officia odio nulla consectetur aperiam ad tempora magni magnam
          nesciunt.
        </p>
        <p>
          Fuga id sapiente facere ipsa eius exercitationem officiis deleniti,
          rerum dolorum. Deserunt soluta modi culpa animi.
        </p> */}
      </>
    ),
  },
  {
    title: "NexPay",
    imgSrc: "project-imgs/nexpay.png",
    code: `https://github.com/codewdme/nexpay.git`,
    projectLink: `https://nexpay.vercel.app/`,
    tech: [
      "NextJS",
      "React",
      "Vercel",
      "Git",
      "GitHub",
      "Framer Motion",
      "Resend API",
    ],
    description:
      "A Crypto Wallet Website. This website is my most recent work, designed and built on my own.",
    modalContent: (
      <>
        {/* <p>
          Pain.app is a real-time coaching app for students learning to paint.
          This app is my baby, designed and built on my own.
        </p>
        <p>
          The tech stack is based on top of Flutter for the mobile app,
          connected to a Python & FastAPI backend, with data stored in Postgres,
          deployed on Heroku.
        </p>
        <p>
          Because this isn&apos;t real, here&apos;s some gibberish to fill space{" "}
          {":)"}
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          quia officia odio nulla consectetur aperiam ad tempora magni magnam
          nesciunt.
        </p>
        <p>
          Fuga id sapiente facere ipsa eius exercitationem officiis deleniti,
          rerum dolorum. Deserunt soluta modi culpa animi.
        </p> */}
      </>
    ),
  },
  {
    title: "O2 Gym India",
    imgSrc: "project-imgs/o2gym.png",
    code: `https://github.com/codewdme/o2-gym-website.git`,
    projectLink: `https://www.o2gymindia.com/`,
    tech: [
      "NextJS",
      "React",
      "Vercel",
      "Git",
      "GitHub",
      "Framer Motion",
      "Resend API",
    ],
    description:
      "A Gym Website Landing Page. This website is my most recent work, designed and built on my own.",
    modalContent: (
      <>
        {/* <p>
          Pain.app is a real-time coaching app for students learning to paint.
          This app is my baby, designed and built on my own.
        </p>
        <p>
          The tech stack is based on top of Flutter for the mobile app,
          connected to a Python & FastAPI backend, with data stored in Postgres,
          deployed on Heroku.
        </p>
        <p>
          Because this isn&apos;t real, here&apos;s some gibberish to fill space{" "}
          {":)"}
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          quia officia odio nulla consectetur aperiam ad tempora magni magnam
          nesciunt.
        </p>
        <p>
          Fuga id sapiente facere ipsa eius exercitationem officiis deleniti,
          rerum dolorum. Deserunt soluta modi culpa animi.
        </p> */}
      </>
    ),
  },

  // {
  //   title: "Osito",
  //   imgSrc: "project-imgs/osito.png",
  //   code: `https://github.com/codewdme`,
  //   projectLink: `https://ositojaipur.com/`,
  //   tech: [
  //     "NextJS",
  //     "React",
  //     "Vercel",
  //     "Git",
  //     "GitHub",
  //     "Framer Motion",
  //     "Resend API",
  //   ],
  //   description:
  //     "A Cafe Website. This website is my most recent work, designed and built on my own.",
  //   modalContent: (
  //     <>
  //       {/* <p>
  //         Pain.app is a real-time coaching app for students learning to paint.
  //         This app is my baby, designed and built on my own.
  //       </p>
  //       <p>
  //         The tech stack is based on top of Flutter for the mobile app,
  //         connected to a Python & FastAPI backend, with data stored in Postgres,
  //         deployed on Heroku.
  //       </p>
  //       <p>
  //         Because this isn&apos;t real, here&apos;s some gibberish to fill space{" "}
  //         {":)"}
  //       </p>
  //       <p>
  //         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
  //         quia officia odio nulla consectetur aperiam ad tempora magni magnam
  //         nesciunt.
  //       </p>
  //       <p>
  //         Fuga id sapiente facere ipsa eius exercitationem officiis deleniti,
  //         rerum dolorum. Deserunt soluta modi culpa animi.
  //       </p> */}
  //     </>
  //   ),
  // },
  {
    title: "Bombay Engineering Company",
    imgSrc: "project-imgs/beamw-website.png",
    code: `https://github.com/vrajbhingradiya-work/bsmw-website.git`,
    projectLink: `https://www.bombayengg.co.in`,
    tech: [
      "NextJS",
      "React",
      "Vercel",
      "Git",
      "GitHub",
      "Framer Motion",
      "Resend API",
    ],
    description:
      "A Engineering Company website. This website is my most recent work, designed and built on my own.",
    modalContent: (
      <>
        {/* <p>
          Pain.app is a real-time coaching app for students learning to paint.
          This app is my baby, designed and built on my own.
        </p>
        <p>
          The tech stack is based on top of Flutter for the mobile app,
          connected to a Python & FastAPI backend, with data stored in Postgres,
          deployed on Heroku.
        </p>
        <p>
          Because this isn&apos;t real, here&apos;s some gibberish to fill space{" "}
          {":)"}
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          quia officia odio nulla consectetur aperiam ad tempora magni magnam
          nesciunt.
        </p>
        <p>
          Fuga id sapiente facere ipsa eius exercitationem officiis deleniti,
          rerum dolorum. Deserunt soluta modi culpa animi.
        </p> */}
      </>
    ),
  },
  {
    title: "Wheels Of World",
    imgSrc: "project-imgs/wheels-of-world.png",
    code: `https://github.com/vrajbhingradiya-work/wheels-of-world-website.git`,
    projectLink: "https://www.wheelsofworld.in/",
    tech: [
      "NextJS",
      "React",
      "Vercel",
      "Git",
      "GitHub",
      "Framer Motion",
      "Resend API",
    ],
    description:
      "A  car dealership website. This website is my most recent work, designed and built on my own.",
    modalContent: (
      <>
        {/* <p>
          Pain.app is a real-time coaching app for students learning to paint.
          This app is my baby, designed and built on my own.
        </p>
        <p>
          The tech stack is based on top of Flutter for the mobile app,
          connected to a Python & FastAPI backend, with data stored in Postgres,
          deployed on Heroku.
        </p>
        <p>
          Because this isn&apos;t real, here&apos;s some gibberish to fill space{" "}
          {":)"}
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          quia officia odio nulla consectetur aperiam ad tempora magni magnam
          nesciunt.
        </p>
        <p>
          Fuga id sapiente facere ipsa eius exercitationem officiis deleniti,
          rerum dolorum. Deserunt soluta modi culpa animi.
        </p> */}
      </>
    ),
  },
  {
    title: "ARGT",
    imgSrc: "project-imgs/argt.png",
    code: `https://github.com/codewdme/argt-website.git`,
    projectLink: "https://www.alroshangroups.com/",
    tech: [
      "NextJS",
      "React",
      "Vercel",
      "Git",
      "GitHub",
      "Framer Motion",
      "Resend API",
    ],
    description:
      "A  business landing page. This website is my most recent work, designed and built on my own.",
    modalContent: (
      <>
        {/* <p>
          Pain.app is a real-time coaching app for students learning to paint.
          This app is my baby, designed and built on my own.
        </p>
        <p>
          The tech stack is based on top of Flutter for the mobile app,
          connected to a Python & FastAPI backend, with data stored in Postgres,
          deployed on Heroku.
        </p>
        <p>
          Because this isn&apos;t real, here&apos;s some gibberish to fill space{" "}
          {":)"}
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          quia officia odio nulla consectetur aperiam ad tempora magni magnam
          nesciunt.
        </p>
        <p>
          Fuga id sapiente facere ipsa eius exercitationem officiis deleniti,
          rerum dolorum. Deserunt soluta modi culpa animi.
        </p> */}
      </>
    ),
  },
  {
    title: "Dorothea",
    imgSrc: "project-imgs/dorothea.png",
    code: `https://github.com/codewdme/dorothea-website.git`,
    projectLink: "https://www.dorotheajaipur.in/",
    tech: [
      "NextJS",
      "React",
      "Vercel",
      "Git",
      "GitHub",
      "Framer Motion",
      "Resend API",
    ],
    description:
      "A cafe - restaurant landing page. This website is my most recent work, designed and built on my own.",
    modalContent: (
      <>
        {/* <p>
          Pain.app is a real-time coaching app for students learning to paint.
          This app is my baby, designed and built on my own.
        </p>
        <p>
          The tech stack is based on top of Flutter for the mobile app,
          connected to a Python & FastAPI backend, with data stored in Postgres,
          deployed on Heroku.
        </p>
        <p>
          Because this isn&apos;t real, here&apos;s some gibberish to fill space{" "}
          {":)"}
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          quia officia odio nulla consectetur aperiam ad tempora magni magnam
          nesciunt.
        </p>
        <p>
          Fuga id sapiente facere ipsa eius exercitationem officiis deleniti,
          rerum dolorum. Deserunt soluta modi culpa animi.
        </p> */}
      </>
    ),
  },
  {
    title: "Havana Cafe",
    imgSrc: "project-imgs/havana-mockup.png",
    code: "https://github.com/vrajbhingradiya-work/havana-cafe-website",
    projectLink: "https://havana-cafe-website.vercel.app/",
    tech: [
      "NextJS",
      "React",
      "Vercel",
      "Git",
      "GitHub",
      "Framer Motion",
      "Resend API",
    ],
    description:
      "A cafe - restaurant landing page. This website is my most recent work, designed and built on my own.",
    modalContent: (
      <>
        {/* <p>
          Pain.app is a real-time coaching app for students learning to paint.
          This app is my baby, designed and built on my own.
        </p>
        <p>
          The tech stack is based on top of Flutter for the mobile app,
          connected to a Python & FastAPI backend, with data stored in Postgres,
          deployed on Heroku.
        </p>
        <p>
          Because this isn&apos;t real, here&apos;s some gibberish to fill space{" "}
          {":)"}
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          quia officia odio nulla consectetur aperiam ad tempora magni magnam
          nesciunt.
        </p>
        <p>
          Fuga id sapiente facere ipsa eius exercitationem officiis deleniti,
          rerum dolorum. Deserunt soluta modi culpa animi.
        </p> */}
      </>
    ),
  },
  {
    title: "Quality Cars",
    imgSrc: "project-imgs/quality-cars-mockup.png",
    code: "https://github.com/vrajbhingradiya-work/quality-cars-website",
    projectLink: "https://www.qualitycars.in/",
    tech: [
      "NextJS",
      "React",
      "MongoDB",
      "Vercel",
      "Git",
      "GitHub",
      "Framer Motion",
      "Resend API",
    ],
    description:
      "A real-time pre-owned car dealership website for buying and selling cars. This website is my most recent work, designed and built on my own.",
    modalContent: (
      <>
        {/* <p>
          Pain.app is a real-time coaching app for students learning to paint.
          This app is my baby, designed and built on my own.
        </p>
        <p>
          The tech stack is based on top of Flutter for the mobile app,
          connected to a Python & FastAPI backend, with data stored in Postgres,
          deployed on Heroku.
        </p>
        <p>
          Because this isn&apos;t real, here&apos;s some gibberish to fill space{" "}
          {":)"}
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          quia officia odio nulla consectetur aperiam ad tempora magni magnam
          nesciunt.
        </p>
        <p>
          Fuga id sapiente facere ipsa eius exercitationem officiis deleniti,
          rerum dolorum. Deserunt soluta modi culpa animi.
        </p> */}
      </>
    ),
  },
  {
    title: "Digital Fry",
    imgSrc: "project-imgs/digital-fry-mockup.png",
    code: "https://github.com/vrajbhingradiya-work/digital-fry-website",
    projectLink: "https://www.digitalfry.in",
    tech: [
      "NextJS",
      "React",
      "MongoDB",
      "Vercel",
      "Git",
      "GitHub",
      "Framer Motion",
      "Resend API",
    ],
    description:
      "A business website to connect with client looking to grow their business . I handle everything backend and frontend (1K monthly visits).",
    modalContent: (
      <>
        {/* <p>
          The Canvas Club is a social community for painters to connect with
          others in their community.
        </p>
        <p>
          I work primarily on the backend, a collection of Node & Express
          microservices. Data is stored primarily in Postgres & cached in Redis.
        </p>
        <p>
          The team in total consists of 5 developers. This is a passion project
          for all of us.
        </p>
        <p>
          Because this isn&apos;t real, here&apos;s some gibberish to fill space{" "}
          {":)"}
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          quia officia odio nulla consectetur aperiam ad tempora magni magnam
          nesciunt.
        </p>
        <p>
          Fuga id sapiente facere ipsa eius exercitationem officiis deleniti,
          rerum dolorum. Deserunt soluta modi culpa animi.
        </p> */}
      </>
    ),
  },
  {
    title: "JU NEXUS",
    imgSrc: "project-imgs/ju-nexus-mockup.png",
    code: "https://github.com/codewdme/JU-Nexus.git",
    projectLink: "https://ju-nexus.web.app/",
    tech: [
      "React JS",
      "Tailwind CSS",
      "MongoDB",
      "FireBase",
      "Git",
      "GitHub",
      "Framer Motion",
      // "Resend API",
    ],
    description:
      "JU Nexus is a comprehensive platform catering to the needs of JU students, offering seamless access to a repository of previous year question papers, notes, assignments, syllabus, and more.",
    modalContent: (
      <>
        {/* <p>
          Brush wire is essentially Zapier but for paint. Built with a team of
          four college friends and scaled to {">"} 1 billion requests per day.
          This was a fun one.
        </p>
        <p>
          Since &quot;Zapier for paint&quot; doesn&apos;t mean anything, be
          creative {":)"}
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          quia officia odio nulla consectetur aperiam ad tempora magni magnam
          nesciunt.
        </p>
        <p>
          Fuga id sapiente facere ipsa eius exercitationem officiis deleniti,
          rerum dolorum. Deserunt soluta modi culpa animi.
        </p> */}
      </>
    ),
  },
  // {
  //   title: "Paint Reference 4",
  //   imgSrc: "project-imgs/example-project.jpg",
  //   code: "https://www.github.com",
  //   projectLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  //   tech: ["Python", "FastAPI", "SQLAlchemy"],
  //   description:
  //     "I couldn't think of another paint reference app, so here we are. I think you get the idea, right? Use your imagination 🌈",
  //   modalContent: (
  //     <>
  //       <p>Alright, you got me. I&apos;m all out of paint references.</p>
  //       <p>
  //         Point is, use this space to explain a bit further WHAT this project
  //         is, as well as what YOU contributed to it.
  //       </p>
  //       <p>You get the idea. Now more lorem {":)"}</p>
  //       <p>
  //         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
  //         quia officia odio nulla consectetur aperiam ad tempora magni magnam
  //         nesciunt.
  //       </p>
  //       <p>
  //         Fuga id sapiente facere ipsa eius exercitationem officiis deleniti,
  //         rerum dolorum. Deserunt soluta modi culpa animi.
  //       </p>
  //     </>
  //   ),
  // },
];
