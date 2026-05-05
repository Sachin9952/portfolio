import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiCloudinary,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiRender,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVite,
  SiVuedotjs,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
  vite: {
    title: "Vite",
    bg: "black",
    fg: "white",
    icon: <SiVite />,
  },
  cloudinary: {
    title: "Cloudinary",
    bg: "black",
    fg: "white",
    icon: <SiCloudinary />,
  },
  render: {
    title: "Render",
    bg: "black",
    fg: "white",
    icon: <SiRender />,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
  thumbnailPosition?: string;
};
const projects: Project[] = [
  {
    id: "around-you",
    category: "Local Service Finder Platform",
    title: "Around-You",
    src: "/assets/projects-screenshots/around-you/around-you-landing.png",
    screenshots: [
      "around-you-landing.png",
      "around-you-services.png",
      "around-you-provider.png",
      "around-you-chat.png",
    ],
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.vite,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.mongo,
        PROJECT_SKILLS.sockerio,
        PROJECT_SKILLS.cloudinary,
        PROJECT_SKILLS.render,
      ],
    },
    live: "https://around-you-ten.vercel.app",
    github: "https://github.com/Sachin9952/around-you",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            A real-world service discovery platform that connects users with
            trusted local service providers.
          </TypographyP>
          <TypographyP className="font-mono ">
            Around-You is a full-stack MERN application built to help users
            find, explore, and connect with nearby service providers. It
            supports user and provider roles, service listings, category-based
            filtering, location-based search, booking flow, and real-time chat
            between users and providers. The project also includes media
            handling with Cloudinary and is deployed using Vercel for the
            frontend and Render for the backend.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Homepage</TypographyH3>
          <p className="font-mono mb-2">
            Clean landing page with service booking CTA
          </p>
          <SlideShow images={[`${BASE_PATH}/around-you/around-you-landing.png`]} />

          <TypographyH3 className="my-4 mt-8">Services</TypographyH3>
          <p className="font-mono mb-2">
            Service discovery with filters and categories
          </p>
          <SlideShow
            images={[`${BASE_PATH}/around-you/around-you-services.png`]}
          />

          <TypographyH3 className="my-4 mt-8">Provider</TypographyH3>
          <p className="font-mono mb-2">
            Provider onboarding and service listing flow
          </p>
          <SlideShow
            images={[`${BASE_PATH}/around-you/around-you-provider.png`]}
          />

          <TypographyH3 className="my-4 mt-8">Chat</TypographyH3>
          <p className="font-mono mb-2">
            Real-time chat system between users and providers
          </p>
          <SlideShow images={[`${BASE_PATH}/around-you/around-you-chat.png`]} />
        </div>
      );
    },
  },
  {
    id: "velvet-pour",
    category: "Animated Frontend Landing Page",
    title: "Velvet Pour",
    src: "/assets/projects-screenshots/velvet-pour/velvet-pour-landing.png",
    screenshots: ["velvet-pour-landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.vite,
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.gsap,
      ],
      backend: [],
    },
    live: "https://gsap-cocktails-sand.vercel.app",
    github: "https://github.com/Sachin9952/gsap-cocktails",
    thumbnailPosition: "top",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            A visually stunning cocktail bar landing page featuring smooth
            GSAP-powered animations.
          </TypographyP>
          <TypographyP className="font-mono ">
            Velvet Pour is a premium frontend landing page built for a cocktail
            bar concept. It showcases advanced GSAP animations including scroll-
            triggered transitions, text reveals, and interactive UI elements.
            The site features a curated menu of cocktails and mocktails, elegant
            typography, and a dark luxurious aesthetic — all designed to deliver
            a memorable first impression.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Landing Page</TypographyH3>
          <p className="font-mono mb-2">
            Immersive hero section with GSAP-animated cocktail visuals
          </p>
          <SlideShow
            images={[`${BASE_PATH}/velvet-pour/velvet-pour-landing.png`]}
          />
        </div>
      );
    },
  },
];
export default projects;
