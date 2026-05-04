import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaDocker,
  FaGithub,
  FaLinkedin,
  FaExternalLinkAlt,
} from 'react-icons/fa';
import {
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiFirebase,
  SiVite,
  SiFigma,
} from 'react-icons/si';

export const personalInfo = {
  name: 'Kashyap Sri Rama Chandra Addepalli',
  title: 'Technical Architect',
  greeting: 'Hi there, I\'m',
  tagline:
    'I build thoughtful, high-quality Mobile experiences with clean code and modern tools.',
  bio: [
    'I\'m a passionate developer who loves turning ideas into polished digital products. With experience across the full stack, I focus on writing clean, maintainable code and crafting intuitive user interfaces.',
    'When I\'m not coding, you\'ll find me exploring new technologies, contributing to open source, or learning something new.',
  ],
  avatar: null,
  socials: {
    github: 'https://github.com/kashyapasrc/',
    linkedin: 'https://linkedin.com/in/',
    email: 'kashyap.asrc@gmail.com',
  },
};

export const skills = [
  {
    category: 'Frontend',
    items: [
      { name: 'React', icon: FaReact },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'HTML5', icon: SiHtml5 },
      { name: 'CSS3', icon: SiCss },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', icon: FaNodeJs },
      { name: 'Python', icon: FaPython },
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'Firebase', icon: SiFirebase },
    ],
  },
  {
    category: 'Tools',
    items: [
      { name: 'Git', icon: FaGitAlt },
      { name: 'Docker', icon: FaDocker },
      { name: 'Vite', icon: SiVite },
      { name: 'Figma', icon: SiFigma },
    ],
  },
];

export const projects = [
  {
    title: 'E-Commerce Platform',
    description:
      'A full-stack e-commerce application with product management, cart functionality, and payment integration.',
    image: null,
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    github: 'https://github.com/',
    live: 'https://example.com/',
  },
  {
    title: 'Task Management App',
    description:
      'A collaborative task management tool with real-time updates, drag-and-drop boards, and team workspaces.',
    image: null,
    tags: ['React', 'Firebase', 'Tailwind CSS'],
    github: 'https://github.com/',
    live: 'https://example.com/',
  },
  {
    title: 'Weather Dashboard',
    description:
      'An interactive weather dashboard with location search, 7-day forecasts, and beautiful data visualizations.',
    image: null,
    tags: ['JavaScript', 'REST API', 'Chart.js'],
    github: 'https://github.com/',
    live: null,
  },
];

export const experience = [
  {
    role: 'Technical Architect',
    company: 'Hexaware Technolgies',
    period: 'April 2021 – Present',
    bullets: [
      'Led the redesign of the core product dashboard, improving user engagement by 35%.',
      'Built reusable component library used across 4 product teams.',
      'Mentored developers and conducted code reviews.',
    ],
  },
  
  {
    role: 'Full Stack Engineer',
    company: 'Nukkadshop Technologies Pvt Ltd',
    period: 'June 2018 – April 2021',
    bullets: [
      'Developed and shipped 3 client-facing web applications from concept to production.',
      'Implemented RESTful APIs and integrated third-party services.',
      'Optimized database queries, reducing page load times by 40%.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'Xportsoft Technologies',
    period: 'March 2016 – May 2018',
    bullets: [
      'Built responsive landing pages and marketing sites for various clients.',
      'Collaborated with designers to translate Figma mockups into pixel-perfect code.',
    ],
  },
];

export const education = [
  {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'University of Technology',
    period: '2018 – 2022',
  },
  {
    degree: 'Full-Stack Web Development Certification',
    institution: 'Online Academy',
    period: '2021',
  },
  
];

export const navLinks = [
  { label: 'About', to: 'about' },
  { label: 'Skills', to: 'skills' },
  { label: 'Projects', to: 'projects' },
  { label: 'Experience', to: 'experience' },
  { label: 'Education', to: 'education' },
  { label: 'Contact', to: 'contact' },
];

export { FaGithub, FaLinkedin, FaExternalLinkAlt };
