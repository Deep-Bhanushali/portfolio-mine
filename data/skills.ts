import { IconType } from "react-icons";
import { FaAws } from "react-icons/fa";
import { SiFramer, SiVercel, SiPostman, SiGooglecloud } from "react-icons/si";

export interface Skill {
  name: string;
  icon: string | IconType;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Programming Languages",
    skills: [
      { name: "Java", icon: "devicon-java-plain" },
      { name: "Python", icon: "devicon-python-plain" },
      { name: "JavaScript", icon: "devicon-javascript-plain" },
      { name: "TypeScript", icon: "devicon-typescript-plain" },
      { name: "HTML5", icon: "devicon-html5-plain" },
      { name: "CSS3", icon: "devicon-css3-plain" },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "React.js", icon: "devicon-react-original" },
      { name: "Next.js", icon: "devicon-nextjs-plain" },
      { name: "Three.js", icon: "devicon-threejs-original" },
      { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain" },
      { name: "Framer Motion", icon: SiFramer },
    ],
  },
  {
    category: "Backend & Databases",
    skills: [
      { name: "Node.js", icon: "devicon-nodejs-plain" },
      { name: "Express.js", icon: "devicon-express-original" },
      { name: "MongoDB", icon: "devicon-mongodb-plain" },
      { name: "MySQL", icon: "devicon-mysql-plain" },
      { name: "PostgreSQL", icon: "devicon-postgresql-plain" },
      { name: "Prisma", icon: "devicon-prisma-original" },
    ],
  },
  {
    category: "AI/ML Frameworks",
    skills: [
      { name: "TensorFlow", icon: "devicon-tensorflow-original" },
      { name: "Keras", icon: "devicon-keras-plain" },
      { name: "PyTorch", icon: "devicon-pytorch-original" },
      { name: "OpenCV", icon: "devicon-opencv-plain" },
    ],
  },
  {
    category: "Tools & Platforms",
    skills: [
      { name: "Git", icon: "devicon-git-plain" },
      { name: "GitHub", icon: "devicon-github-original" },
      { name: "Docker", icon: "devicon-docker-plain" },
      { name: "Postman", icon: SiPostman },
      { name: "VS Code", icon: "devicon-vscode-plain" },
      { name: "Vercel", icon: SiVercel },
      { name: "AWS", icon: FaAws },
      { name: "GCP", icon: SiGooglecloud },
    ],
  },
];
