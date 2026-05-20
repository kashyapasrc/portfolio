import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaDocker,
  FaGithub,
  FaLinkedin,
  FaExternalLinkAlt,
  FaJava,
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
  SiKotlin,
  SiKubernetes,
} from 'react-icons/si';

export const personalInfo = {
  name: 'Kashyap Sri Rama Chandra Addepalli',
  title: 'Technical Architect',
  greeting: 'Hi there, I\'m',
  tagline:
    'I build thoughtful, high-quality Mobile applications with clean code and modern tools.',
  bio: [
    'I\'m a passionate developer who loves turning ideas into polished digital products. With experience across the full stack, I focus on writing clean, maintainable code and crafting intuitive user interfaces.',
    'When I\'m not coding, you\'ll find me exploring new technologies, contributing to open source, or learning something new.',
  ],
  avatar: null,
  socials: {
    github: 'https://github.com/kashyapasrc/',
    linkedin: 'https://www.linkedin.com/in/addepalli-sri-rama-chandra-kashyap-299b5186/',
    email: 'kashyap.asrc@gmail.com',
  },
};

export const skills = [
  {
    category: 'Frontend',
    items: [
      { name: 'React', icon: FaReact },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'Kotlin', icon:SiKotlin},
      {name :'Java', icon: FaJava},
    
      
    
      
    ],
  },
  {
    category: 'Backend',
    items: [
      
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
      {name:'Kubernetes', icon: SiKubernetes},
    ],
  },
];

export const projects = [
  {
    title: 'Telugu Calendar APP',
    description:
      'A telugu calendar app of panchangam, paksham, tithis, nakshatram, yoga, dosham, etc.',
    image: null,
    tags: ['Android', 'kotlin'],
    github: 'https://github.com/',
    live: 'https://play.google.com/store/apps/details?id=com.vedica.dharmaprachara.sangam.calendar',
  },
  {
    title: 'East West Bank Retail APP',
    description:
      'A complete banking application for onboarding and transcations, credit cards, debit cards, etc.',
    image: null,
    tags: ['Android', 'kotlin' ],
    github: 'https://github.com/',
    live: 'https://play.google.com/store/apps/details?id=com.eastwest.mobile.dxp',
  },
  // {
  //   title: 'Weather Dashboard',
  //   description:
  //     'An interactive weather dashboard with location search, 7-day forecasts, and beautiful data visualizations.',
  //   image: null,
  //   tags: ['JavaScript', 'REST API', 'Chart.js'],
  //   github: 'https://github.com/',
  //   live: null,
  // },
];

export const experience = [
  {
    role: 'Technical Architect',
    company: 'Hexaware Technolgies',
    period: 'Sept 2024 – Present',
    bullets: [
      'Capture functional and non-functional requirements',
      'Design high-level architecture',
      'Evaluate trade-offs (cost, scale, latency)',
      'Document decisions clearly',
      'Define service boundaries',

    ],
  },
  {
    role: 'Senior Software Engineer',
    company: 'Hexaware Technolgies',
    period: 'April 2021 – Aug 2024',
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
