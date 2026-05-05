// thoda zada ts ho gya idhar
export enum SkillNames {
  JS = "js",
  HTML = "html",
  CSS = "css",
  REACT = "react",
  VITE = "vite",
  TAILWIND = "tailwind",
  NODEJS = "nodejs",
  EXPRESS = "express",
  MONGODB = "mongodb",
  MONGODB_ATLAS = "mongodb_atlas",
  CLOUDINARY = "cloudinary",
  REST_API = "rest_api",
  SOCKET_IO = "socket_io",
  GIT = "git",
  VERCEL = "vercel",
  RENDER = "render",
  VSCODE = "vscode",
}
export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
};
export const SKILLS: Record<SkillNames, Skill> = {
  [SkillNames.JS]: {
    id: 1,
    name: "js",
    label: "JavaScript (ES6+)",
    shortDescription: "Modern scripting",
    color: "#f0db4f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  [SkillNames.HTML]: {
    id: 3,
    name: "html",
    label: "HTML5",
    shortDescription: "Semantic structure",
    color: "#e34c26",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  [SkillNames.CSS]: {
    id: 4,
    name: "css",
    label: "CSS3",
    shortDescription: "Visual styling",
    color: "#264de4",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  [SkillNames.REACT]: {
    id: 5,
    name: "react",
    label: "React.js",
    shortDescription: "Dynamic UI development",
    color: "#61dafb",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  [SkillNames.VITE]: {
    id: 6,
    name: "vite",
    label: "Vite",
    shortDescription: "Fast frontend tooling",
    color: "#646cff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",
  },
  [SkillNames.TAILWIND]: {
    id: 8,
    name: "tailwind",
    label: "Tailwind CSS",
    shortDescription: "Responsive UI styling",
    color: "#38bdf8",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  },
  [SkillNames.NODEJS]: {
    id: 9,
    name: "nodejs",
    label: "Node.js",
    shortDescription: "Backend development",
    color: "#6cc24a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  [SkillNames.EXPRESS]: {
    id: 10,
    name: "express",
    label: "Express.js",
    shortDescription: "API building",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  [SkillNames.MONGODB]: {
    id: 12,
    name: "mongodb",
    label: "MongoDB",
    shortDescription: "NoSQL database",
    color: "#47a248",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  [SkillNames.MONGODB_ATLAS]: {
    id: 13,
    name: "mongodb_atlas",
    label: "MongoDB Atlas",
    shortDescription: "Cloud database",
    color: "#47a248",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  [SkillNames.CLOUDINARY]: {
    id: 14,
    name: "cloudinary",
    label: "Cloudinary",
    shortDescription: "Media handling",
    color: "#3448c5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cloudinary/cloudinary-original.svg",
  },
  [SkillNames.REST_API]: {
    id: 15,
    name: "rest_api",
    label: "REST APIs",
    shortDescription: "Client-server communication",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
  },
  [SkillNames.SOCKET_IO]: {
    id: 16,
    name: "socket_io",
    label: "Socket.IO",
    shortDescription: "Real-time features",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg",
  },
  [SkillNames.GIT]: {
    id: 17,
    name: "git",
    label: "Git & GitHub",
    shortDescription: "Version control",
    color: "#f1502f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  [SkillNames.VERCEL]: {
    id: 18,
    name: "vercel",
    label: "Vercel",
    shortDescription: "Frontend deployment",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
  },
  [SkillNames.RENDER]: {
    id: 19,
    name: "render",
    label: "Render",
    shortDescription: "Backend hosting",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/render/render-original.svg",
  },
  [SkillNames.VSCODE]: {
    id: 20,
    name: "vscode",
    label: "VS Code",
    shortDescription: "Development environment",
    color: "#007acc",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  },
};

export type Experience = {
  id: number;
  startDate: string;
  endDate: string;
  title: string;
  company: string;
  description: string[];
  skills: SkillNames[];
};

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    startDate: "Jan 2026",
    endDate: "Present",
    title: "Full-Stack Developer (MERN)",
    company: "Self / Personal Project",
    description: [
      "Developed 'Around-You', a local service finder platform connecting users with nearby service providers",
      "Built responsive frontend using React, Vite, and Tailwind CSS for seamless user experience",
      "Designed RESTful APIs and backend logic using Node.js and Express.js",
      "Implemented real-time chat functionality using Socket.IO and integrated Cloudinary for media uploads",
    ],
    skills: [
      SkillNames.REACT,
      SkillNames.NODEJS,
      SkillNames.EXPRESS,
      SkillNames.MONGODB,
      SkillNames.TAILWIND,
      SkillNames.SOCKET_IO,
      SkillNames.CLOUDINARY,
      SkillNames.VERCEL,
      SkillNames.RENDER,
    ],
  },
  {
    id: 2,
    startDate: "May 2025",
    endDate: "July 2025",
    title: "MERN Stack Intern",
    company: "Indori Coders",
    description: [
      "Worked on frontend components using React and improved UI responsiveness",
      "Collaborated with team members to develop and debug web features",
      "Gained hands-on experience with API integration and version control using Git",
      "Optimized application performance and fixed bugs in existing modules",
    ],
    skills: [
      SkillNames.REACT,
      SkillNames.JS,
      SkillNames.GIT,
      SkillNames.HTML,
      SkillNames.CSS,
    ],
  },
];

export const themeDisclaimers = {
  light: [
    "Warning: Light mode emits a gazillion lumens of pure radiance!",
    "Caution: Light mode ahead! Please don't try this at home.",
    "Only trained professionals can handle this much brightness. Proceed with sunglasses!",
    "Brace yourself! Light mode is about to make everything shine brighter than your future.",
    "Flipping the switch to light mode... Are you sure your eyes are ready for this?",
  ],
  dark: [
    "Light mode? I thought you went insane... but welcome back to the dark side!",
    "Switching to dark mode... How was life on the bright side?",
    "Dark mode activated! Thanks you from the bottom of my heart, and my eyes too.",
    "Welcome back to the shadows. How was life out there in the light?",
    "Dark mode on! Finally, someone who understands true sophistication.",
  ],
};

