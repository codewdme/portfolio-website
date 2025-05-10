import { SectionHeader } from "../util/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experience" dir="l" />
      {experience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const experience = [
  {
    title: "Digital Fry",
    position: "Web Developer",
    time: "July 2024 - May 2025",
    location: "Jaipur, Rajasthan",
    description:
      "Developed an end-to-end business website for Digital Fry and its clients using the React framework and MERN stack, meeting business requirements. Implemented eye-catching animations using the Framer Motion library. Learned to configure the backend with Node.js and Express, deployed the website using Vercel, and gained knowledge in configuring domains.",
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
  },
  {
    title: "SK Digital Marketing",
    position: "Web Developer",
    time: "June 2022 - July 2024",
    location: "Jaipur, Rajasthan",
    description:
      "Web Developer for Quality Cars. I Developed and maintained the website to keep it up to date and running smoothly. Used Framer Motion for animations, Redux for state management, and MongoDB for data storage. Also, enjoyed a few car meet ups with the team. It was a great time.",
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
  },
  // {
  //   title: "Amazon",
  //   position: "Software Engineer",
  //   time: "2016 - 2020",
  //   location: "Seattle",
  //   description:
  //     "Data Engineer for store front. Built data pipelines with Spark and Airflow. Saw Bezos one time. He said he liked my paintings. I said I liked his hair.",
  //   tech: [
  //     "Java",
  //     "Python",
  //     "S3",
  //     "RDS",
  //     "Redshift",
  //     "PySpark",
  //     "HDFS",
  //     "Apache Airflow",
  //   ],
  // },
];
