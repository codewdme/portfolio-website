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
    time: "2023 - Present",
    location: "India",
    description:
      "Developed an end to end Business website for Digital Fry and its Clients using React framework. Created a backend Integrated MERN stack website ( https://digital-fry-website.vercel.app/ ) for their business requirements. Used Framer Motion library to create eye catching animations, NodeJS and Express for Backend Configuration and Vercel for website Deployment.",
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
    time: "June 2024 - July 2024",
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
