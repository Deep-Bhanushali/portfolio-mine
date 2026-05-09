export interface TimelineItem {
  type: "experience" | "education";
  title: string;
  organization: string;
  location?: string;
  duration: string;
  description: string[];
  grade?: string;
}

export const timelineData: TimelineItem[] = [
  {
    type: "experience",
    title: "MERN Stack Developer Intern",
    organization: "EnactOn Technologies Pvt Ltd",
    location: "Internship",
    duration: "June 2025 – Present",
    description: [
      "Built full-stack apps with MongoDB, Express.js, React.js, Node.js",
      "Developed responsive UIs with Tailwind CSS and custom React hooks",
      "Secure API implementation with JWT and bcrypt authentication",
      "Collaborated in Agile sprints; deployed on Vercel, AWS, and internal servers",
      "Integrated third-party APIs and conducted code reviews",
    ],
  },
  {
    type: "education",
    title: "B.Tech in Computer Science (AI Specialization)",
    organization: "Parul University, Vadodara",
    location: "Vadodara, Gujarat",
    duration: "2022 – Present",
    grade: "CGPA: 8.63",
    description: [
      "Specializing in Artificial Intelligence and Machine Learning.",
    ],
  },
  {
    type: "education",
    title: "Intermediate (PCM)",
    organization: "M.K.Mehta School, Umergaon",
    location: "Umergaon, Gujarat",
    duration: "2020 – 2022",
    grade: "Percentage: 66.2%",
    description: [
      "Focused on Physics, Chemistry, and Mathematics.",
    ],
  },
  {
    type: "education",
    title: "Matriculation",
    organization: "St. Xavier's High School, Virar",
    location: "Virar, Maharashtra",
    duration: "2019 – 2020",
    grade: "Percentage: 83.0%",
    description: [
      "Completed secondary education with high honors.",
    ],
  },
];
