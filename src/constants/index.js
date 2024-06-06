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
  tripguide,
  threejs,
} from "../assets";


import brain from '../assets/brain.png';
import gear from '../assets/gear.png';
import tube from '../assets/tube.png';
import stack from '../assets/stack.png';
import tf from '../assets/tf.png';
import python from '../assets/python.png';
import C from '../assets/C++.png';
import malaria from '../assets/malaria.png';
import conway from '../assets/conway.png';
import url from '../assets/url.png';
import fsm from '../assets/fsm.png';
import maze from '../assets/maze.png';
import molecule from '../assets/molecule.png';
import gel from '../assets/gel.png';
import pcr from '../assets/PCR.png';
import spectrophotometry from '../assets/spectrophotometry.png';
import progress from '../assets/progress.png';


export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Development",
    icon: stack,
  },
  {
    title: "Machine Learning",
    icon: brain,
    iconStyle: { width: '70px', height: '70px' }
  },
  {
    title: "OOP",
    icon: gear,
    iconStyle: { width: '60px', height: '60px' }
  },
  {
    title: "Laboratory Experience",
    icon: tube,
    iconStyle: { width: '86px', height: '86px' }
  },
];

const technologies = [

  {
    name: "JavaScript",
    icon: javascript,
  },

  {
    name: "TensorFlow",
    icon:tf,
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

  {
    name: "python",
    icon: python,
  },

  {
    name: "C++",
    icon: C,
  },
];

const experiences = [
  {
    title: "Software Developer Intern",
    company_name: "Monarch Mart",
    date: "May 2024 - present",
    points: [
      "Audited the UI across all digital platforms, and streamlined corresponding front-end code which is projected to speed up customer checkout times by 20 percent",
      "Collaborated with cross-functional teams to contribute to the development and integration of an AI-powered live customer service chatbot"
    ],
  },
  {
    title: "Algorithms Designer",
    company_name: "Battery Workforce Challenge",

    date: "October 2023 - present",
    points: [
      "Led the development of several algorithms for precise estimation of battery feature statuses, that are now used in production by over 10 different systems",
      "Modeled and simulated equivalent circuit models in MATLAB Simulink",
      "Utilized SQL to visualize and model extensive datasets, integrating these insights into algorithms to predict future values of quantifiable battery characteristics, such as State of Charge",
    ],
  },
  {
    title: "Connected and Automated Vehicles Simulator",
    company_name: "McMaster ECOCAR",
    date: "September 2022 - April 2023",
    points: [
      "Acquired sensor data from simulated vehicle test cases in MATLAB, which was then modelled and visualized to create comprehensive reports",
      "Implemented new features based on reports to improve responsiveness and optimize the existing model's design",
      "Collaborated with cross-functional teams, including designers, product managers, and developers, to ensure the high quality and timely delivery of project deliverables",
      "Participated in design reviews and providing constructive feedback to other developers",
    ],
  },
  {
    title: "Research Team Member",
    company_name: "MacChangers",
    icon: shopify,
    iconBg: "#383E56",
    date: "September 2022 - Jan 2023",
    points: [
      "Authored an extensive paper on rapid testing and peer support surrounding HIV and syphilis, collaborating with a multidisciplinary team",
      "Proposed solutions to promote STBBI testing among higher-risk populations given clinic closures and potential limitations in lab capacity",
      "Assessed the feasibility of the solution using a human-centered design approach, evaluating the target populations, desired outcomes, and potential barriers",
    ],
  },

  {
    title: "Staff Member",
    company_name: "Awareness 360",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "September 2021 - July 2022",
    points: [
      "Assisted with the onboarding process of the internship program, mentoring a team of 15 interns and preparing performance reports",
      "Audited the organization's social reach and implemented strategic improvements that enhanced audience engagement and interaction by 7%",
      "Led weekly meetings and hosted virtual events featuring speakers and global figures discussing social and international issues",
    ],
  },



 



];

const testimonials = [
  {
    testimonial:
      "Cloning of a copper-detecting gene system, incorporating the pCusC promoter sequence into an asPink-promoterless plasmid for E. coli, enabling colorimetric copper ion detection.",
    name: "Molecular Cloning",
    designation: "",
    company: "",
    image: molecule,
  },
  {
    testimonial:
      "Use of gel electrophoresis for the separation of DNA fragments by size, confirming successful cloning through distinctive band patterns of pCusAsPink and asPink-promoterless plasmids. ",
    name: "Gel Electrophoresis",
    image: gel,
  },
  {
    testimonial:
      "Amplification of DNA insert containing gene of interest and promoter sequences followed by insertion of amplified sequences into vector plasmid.",
    name: "PCR",
    image: pcr,
  },

  {
    testimonial:
    "Use of Spectrophotometry to measure absorbance at 572 nm to quantify protein concentration, and analyze light absorption for assessing asPink protein expression in copper ion detection.",
    name: "Spectro- photometry",
    image: spectrophotometry,
  }
];

const projects = [
  {
    name: "Malaria Detection",
    description:
      "A Convolutional Neural Network that can classify blood cells as either uninfected or parasitized by plasmodium, succesfully detecting the presence of malaria.",
    tags: [
      {
        name: "tensorflow",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "matplotlib",
        color: "pink-text-gradient",
      },
    ],
    image: malaria,
    source_code_link: "https://github.com/tasnint/Malaria-Diagnosis",
  },
  {
    name: "Conway's Game of Life",
    description:
      "A real-time interactive simulation of Conways Game of Life using C++ and the raylib graphics library. Implements state toggling and simulation speed adjustments.",
    tags: [
      {
        name: "c++",
        color: "blue-text-gradient",
      },
      {
        name: "raylib",
        color: "green-text-gradient",
      },
      {
        name: "oop",
        color: "pink-text-gradient",
      },
    ],
    image: conway,
    source_code_link: "https://github.com/tasnint/Game-Of-Life",
  },
  {
    name: "URL Content Processor",
    description:
      "A web application that uses LangChain and OpenAI API to process text from URLs for dynamic question answering, improving efficiency of information retrieval tasks.",
    tags: [
      {
        name: "langchain",
        color: "blue-text-gradient",
      },
      {
        name: "nlp",
        color: "green-text-gradient",
      },
      {
        name: "openai api",
        color: "pink-text-gradient",
      },
    ],
    image: url,
    source_code_link: "https://github.com/tasnint/URL-Content-Processor",
  },

  {
    name: "Combination Lock",
    description:
      "A Moore FSM programmed in Verilog that functions as a digital combination lock and uses a hex display and altera board to demonstrate functionality.",
    tags: [
      {
        name: "verilog",
        color: "blue-text-gradient",
      },
      {
        name: "alteraboard",
        color: "green-text-gradient",
      },
      {
        name: "hexdisplay",
        color: "pink-text-gradient",
      },
    ],
    image: fsm,
    source_code_link: "https://github.com/tasnint/combination-lock-verilog",
  },


  {
    name: "Maze Runner",
    description:
      "A Java program implementing Dijkstra's and A* algorithm that generates or verifies a path from the entry to exit of a maze in the form of a text file. ",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "maze",
        color: "green-text-gradient",
      },
      {
        name: "algorithm",
        color: "pink-text-gradient",
      },
    ],
    image: maze,
    source_code_link: "https://github.com/tasnint/maze_runner",
  },

  {
    name: "MyHealth App",
    description:
      "A cross platform full-stack menstrual and sexual health application to track cycles, with extensive educational and locally accessible resources for contraceptives and pregnancy.",
    tags: [
      {
        name: "reactnative",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: progress,
    source_code_link: "https://github.com/tasnint/health",
  },


];

export { services, technologies, experiences, testimonials, projects };
