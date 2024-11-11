import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
  bell,
  opentext,
  ised,
  huffman,
  landscape,
  straights,
  udp,
  stubhub,
  dataScience,
  dataAnalysis,
  dataEngineering,
  cplus,
  matlab,
  rlogo,
  python,
  java,
  sql,
  bash,
  fullstack,
  github,
  linkedin,
  githubs,
  email,
  phone,
} from '../assets';

export const navLinks = [
 
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Experience',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  // {
  //   id: 'contact',
  //   title: 'Contact',
  // },
  {
    id: 'ContactDetails',
    title: 'Contact',
  }
];

const services = [
  // {
  //   title: 'Frontend Developer',
  //   icon: frontend,
  // },
  {
    title: 'Full Stack Developer',
    icon: fullstack,
  },
  // {
  //   title: 'UI/UX Design',
  //   icon: ux,
  // },
  // {
  //   title: 'Software Prototyping',
  //   icon: prototyping,
  // },
  {
    title: 'Data Analytics',
    icon: dataAnalysis,
  },
  {
    title: 'Data Science',
    icon: dataScience,
  },
  {
    title: 'Data Engineering',
    icon: dataEngineering,
  }
];

const socials = [
  {title: 'LinkedIn', 
    icon: linkedin, 
    link: 'https://www.linkedin.com/in/eric-voong/'

  },
  {title: 'GitHub', 
    icon: github, 
    link: 'httpes://github.com/evoong'
  },
  {title: 'Email', 
    icon: email, 
    link: 'mailto:ericxoong@gmail.com'
  },
  {title: 'Phone', 
    icon: phone, 
    link: 'tel:+1-647-687-2386'
  },
]

const technologies = [
  {
    name: 'Python',
    icon: python,
  },
  {
    name: 'Java',
    icon: java,
  },
  {
    name: 'SQL',
    icon: sql,
  },
  {
    name: 'R',
    icon: rlogo,
  },
  {
    name: 'MATLAB',
    icon: matlab,
  },
  {
    name: 'C++',
    icon: cplus,
  },
  
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  // {
  //   name: 'Redux Toolkit',
  //   icon: redux,
  // },
  // {
  //   name: 'Tailwind CSS',
  //   icon: tailwind,
  // },
  // {
  //   name: 'Node JS',
  //   icon: nodejs,
  // },
  // {
  //   name: 'Rails',
  //   icon: rubyrails,
  // },
  // {
  //   name: 'graphql',
  //   icon: graphql,
  // },
  // {
  //   name: 'postgresql',
  //   icon: postgresql,
  // },
  {
    name: 'git',
    icon: git,
  },
  // {
  //   name: 'figma',
  //   icon: figma,
  // },
  {
    name: 'docker',
    icon: docker,
  },
  {
    name: 'bash',
    icon: bash,
  }
];


const experiences = [
  {
    title: 'Data Scientist',
    company_name: 'Innovation Science and Economic Development Canada',
    icon: ised, // Add appropriate icon here
    iconBg: '#333333',
    date: 'May 2022 - April 2024',
    description: 'At ISED, I developed machine learning models that significantly improved data accuracy by 70%, automating the cleaning of large, unstructured datasets. This work laid the foundation for more reliable and data-driven policy reports.'
  },
  {
    title: 'Software Developer',
    company_name: 'OpenText',
    icon: opentext, // Add appropriate icon here
    iconBg: '#333333',
    date: 'May 2021 - August 2021',
    description: 'At OpenText, I optimized a high-performance remote desktop access solution for NVIDIA hardware, improving its performance by 25%, which enhanced user experience across multiple platforms. The improvements were critical in scaling the system’s usability and reducing bottlenecks during high-demand periods.',
  },
  {
    title: 'Data Analyst',
    company_name: 'Bell Media',
    icon: bell, // Add appropriate icon here
    iconBg: '#333333',
    date: 'January 2020 - August 2020',
    description: 'At Bell Media, I developed an automated ETL pipeline, streamlining data integration from 14 different sources and reducing operational time by 25%. This work played a key role in optimizing the data infrastructure, allowing the business to handle more traffic and process data faster.'
  },
];


// const experiences = [
//   {
//     title: 'Front-End Developer',
//     company_name: 'Cover Hunt',
//     icon: coverhunt,
//     iconBg: '#333333',
//     date: 'Aug 2021 - Feb 2022',
//   },
//   {
//     title: 'Mentor (Volunteer)',
//     company_name: 'Microverse',
//     icon: microverse,
//     iconBg: '#333333',
//     date: 'Mar 2022 - May 2022',
//   },
//   {
//     title: 'Junior Software Engineer',
//     company_name: 'Kelhel',
//     icon: kelhel,
//     iconBg: '#333333',
//     date: 'May 2022 - Oct 2022',
//   },
//   {
//     title: 'Full Stack Developer',
//     company_name: 'Diversity Cyber Council',
//     icon: dcc,
//     iconBg: '#333333',
//     date: 'Sep 2022 - Present',
//   },
// ];

const projects = [
  {
    id: 'project-1',
    name: 'LandScape Maps',
    description: 'Extract and analyze key trends from patent data using NLP techniques.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: landscape,
    repo: 'https://ised-isde.canada.ca/site/canadian-intellectual-property-office/sites/default/files/attachments/2022/CIPOCS-1912-CPLFPMT-eng.pdf#page=29',
    demo: 'https://shaqdeff.github.io/KomiKult/',
  },
  {
    id: 'project-2',
    name: 'Stubhub WebScaper',
    description:
      'Automate the extraction of ticket prices, event details, and artist social media statistics.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: stubhub,
    repo: 'https://github.com/evoong/Stubhub-Tracker',
    demo: 'https://shaqdeff.github.io/Leaderboard/',
  },
  {
    id: 'project-3',
    name: 'UDP Transfer Protocol',
    description: 'Designed a custom protocol for reliable file transfer over UDP.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: udp,
    repo: 'https://github.com/evoong/Reliable-File-Transfer-Protocol-over-UDP',
    demo: 'https://inspiring-medovik-37d3b3.netlify.app/',
  },
  {
    id: 'project-4',
    name: 'Huffman Compression',
    description: `Huffman coding algorithm in Java to optimize data storage and transmission.`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: huffman,
    repo: 'https://github.com/evoong/Huffman-Compression',
    demo: 'https://movie-metro.netlify.app/',
  },
  {
    id: 'project-5',
    name: 'Straights Card Game',
    description:
      'The Straights Card Game is a classic card game where players aim to play cards in a sequence',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: straights,
    repo: 'https://github.com/evoong/Straights-Card-Game-Implementation',
    demo: 'https://shaqdeff.github.io/Nyeusi-Fest-Site/',
  },
];

export { services, technologies, experiences, projects, socials };
