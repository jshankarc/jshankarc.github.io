import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Jayashankar Chaluvaraj',
  subtitle: 'I\'m an Aspiring Data Science Engineer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'Jayashankar Chaluvaraj is a passionate problem-solver with more than 5 years of experience working on highly-scalable and distributed applications. I focused on integrating Telecom and Banking products, my contributions have received awards and frequent appreciations. My notable work was creating a dashboard using kibana from large unstructured log files. This provided real-time customer analytics, which helped monitoring transaction flow instantaneously. Inspired by the possibilities of Data Science, I completed a Master\'s program in Data Analytics with expertise in machine learning algorithms and strong programming skills in python.  ',
  paragraphTwo: 'Jayashankar is an open-source tech enthusiast who is willing to use technology and algorithms to solve the problem. The interest and intention to learn from the foundation has made to acquire smart debugging skills and build robust applications. The key ability is to quickly analyze a problem and develop a tailored solution to an organization.',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Project 1',
    info: 'info',
    info2: 'info',
    url: 'link',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'project 2',
    info: 'info',
    info2: 'info',
    url: 'link',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'project 3',
    info: 'info',
    info2: 'info',
    url: 'link',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

 
// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
