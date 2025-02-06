import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  threejs,
  koralbyte, 
  fire,
  portfolio,
  online,
  finance
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "AWS Solution Architect",
    icon: mobile,
  },
  {
    title: "Full Stack Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Koralbyte",
    icon: koralbyte,
    iconBg: "#383E56",
    date: "Jan 2025 - Present",
    points: [
      "Redesigned the Cocoa App's architecture and user interface to scale seamlessly for 1,000+ users.",
      "Implemented a real-time chat feature using WebSocket technology, ensuring reliability during peak usage.",
      "Built TypeScript-based integrations, increasing customer reach by 15% through optimized web frameworks.",
      "Enhanced backend efficiency by transitioning from monolithic services to microservices, cutting downtime by 70%.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Flare Web Designs",
    icon: fire,
    iconBg: "#383E56",
    date: "April 2024 - Dec 2024",
    points: [
      "Delivered fully customized website solutions, including flarewebdesigns.com, ensuring smooth end-to-end project execution.",
      "Integrated interactive animations and 3D elements to enhance user experience and visual appeal.",
      "Developed modern, client-centric websites focused on unique UI/UX designs that increased engagement.",
      "Ensured client satisfaction by managing all aspects of website development, from concept to deployment.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Prarthan proved me wrong.",
    name: "Elle Yazwin Yip",
    designation: "Socaial Media Manager",
    company: "The Lavin Agency",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Prarthan does.",
    name: "Chris Christian",
    designation: "Owner",
    company: "Notion Hill",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Prarthan optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Anna",
    designation: "Small Business Owner",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Next Gen Shop",
    description:
      "Built a dynamic e-commerce platform using React, Node.js, and MongoDB with responsive design, real-time updates, seamless navigation, and a streamlined checkout for enhanced user experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: online,
    source_code_link: "https://github.com/pyPrarthan/Next-Gen-Shop",
  },
  {
    name: "Personal Finance Tracker",
    description:
      "Developed a finance tracking app using Matplotlib and Pandas for interactive data visualization. Integrated a Chatbot (FinBot) for personalized financial insights and recommendations.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: finance,
    source_code_link: "https://github.com/pyPrarthan/Personal-Finance-Tracker",
  },
  {
    name: "3-D Portfolio",
    description:
      "Created an immersive 3D portfolio using Three.js and React, featuring dynamic animations,  and smooth navigation. Hosted on Netlify, it offers a visually engaging and unique way to showcase skills and projects.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "3js",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/pyPrarthan/3D-Portfolio",
  },
];

export { services, technologies, experiences, testimonials, projects };
