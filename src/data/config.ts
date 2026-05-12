const config = {
  title: "Sachin Singh Akhawat | Full-Stack Developer",
  description: {
    long: "I am a Full-Stack Developer specializing in the MERN stack, with experience building scalable and user-centric web applications. I enjoy solving real-world problems through clean architecture, efficient APIs. Currently, I am focused on developing impactful products like service platforms that connect users with local providers seamlessly.",
    short:
      "Creating real-world impact through scalable web apps that connect people with services.",
  },
  keywords: [
    "Sachin Singh Akhawat",
    "portfolio",
    "full-stack developer",
    "MERN stack",
    "web development",
    "3D animations",
    "interactive websites",
    "React",
    "Next.js",
    "Node.js",
    "MongoDB",
    "Express.js",
    "web design",
    "GSAP",
    "Framer Motion",
  ],
  author: "Sachin Singh Akhawat",
  email: "sachinsinghakhawat123@gmail.com",
  site: "https://sachinsinghakhawat.com",

  // for github stars button
  githubUsername: "Sachin9952",
  githubRepo: "portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://x.com/sachin_akhawat",
    linkedin: "https://www.linkedin.com/in/sachin-singh-akhawat-a806a9382?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    instagram: "https://instagram.com/Sachin_singh_akhawat",
    facebook: "https://www.facebook.com/sachinsinghakhawat",
    github: "https://github.com/Sachin9952",
  },
};
export { config };
