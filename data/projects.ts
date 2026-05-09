export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  tags: string[];
  liveDemo: string;
  github: string;
  image?: string;
}

export const projects: Project[] = [
  {
    id: "archaeolearn",
    title: "ArchaeoLearn",
    description: "An interactive archaeology and history learning platform with AI-powered artifact recognition, gamified quizzes, visual timelines, and an immersive exploration interface.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "TensorFlow.js", "Socket.IO", "Tailwind CSS", "AWS", "Docker"],
    tags: ["MERN Stack", "AI/ML"],
    liveDemo: "https://archeao-learn.vercel.app/",
    github: "https://github.com/Deep-Bhanushali/ArchaeoLearn",
    image: "/images/archaeolearn.png",
  },
  {
    id: "farmmart",
    title: "FarmMart",
    description: "A full-featured e-commerce marketplace connecting local farmers directly with customers. Supports dual user roles, real-time inventory, Stripe payments, and complete order lifecycle management.",
    tech: ["Next.js 14", "TypeScript", "MongoDB", "Mongoose", "Node.js", "JWT", "Stripe", "Tailwind CSS", "Liveblocks"],
    tags: ["MERN Stack", "Next.js"],
    liveDemo: "https://farm-mart-seven.vercel.app/",
    github: "https://github.com/Deep-Bhanushali/FarmMart",
    image: "/images/farmmart.png",
  },
  {
    id: "rentify",
    title: "Rentify",
    description: "A comprehensive rental marketplace with product listings, rental request management, Stripe-powered transactions, automated invoice generation, and real-time email + in-app notifications.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma ORM", "Stripe", "JWT", "Tailwind CSS", "Nodemailer"],
    tags: ["Next.js"],
    liveDemo: "https://rental-management-ten.vercel.app/",
    github: "https://github.com/Deep-Bhanushali/Rentify",
    image: "/images/rentify.png",
  },
  {
    id: "oliv-booking",
    title: "Oliv Booking System",
    description: "A modern booking management system with real-time availability, user-facing reservation flows, and admin controls.",
    tech: ["Next.js", "Tailwind CSS", "Node.js", "MongoDB"],
    tags: ["MERN Stack", "Next.js"],
    liveDemo: "https://dev-oliv-booking-system.vercel.app",
    github: "https://github.com/Deep-Bhanushali",
    image: "/images/oliv.png",
  },
  {
    id: "taxlay",
    title: "Taxlay",
    description: "A tax and financial services platform built for simplicity and ease of use.",
    tech: ["React", "Next.js", "Tailwind CSS"],
    tags: ["Next.js"],
    liveDemo: "https://taxlay.com",
    github: "https://github.com/Deep-Bhanushali",
    image: "/images/taxlay.png",
  },
  {
    id: "mangoadmi",
    title: "MaangoAdmi",
    description: "A community or marketplace platform focused on local connections and services.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    tags: ["MERN Stack"],
    liveDemo: "https://mango-admi.vercel.app/",
    github: "https://github.com/Deep-Bhanushali",
    image: "/images/mangoadmi.png",
  },
];
