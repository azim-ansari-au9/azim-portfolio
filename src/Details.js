// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logo.svg";
import logo from "./assets/logo2.svg";
// Profile Image
import profile from "./assets/profile.jpeg";
// import resume from "./assets/";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import sass from "./assets/techstack/sass.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
// Porject Images
import projectImage3 from "./assets/projects/project3.jpg";
import projectImage4 from "./assets/projects/project4.jpg";
import veunow from "./assets/projects/veunow.png";
import upsc from "./assets/projects/upsc.png";
import dlcc from "./assets/projects/dlcc.png";
import nfty from "./assets/projects/nfty.png";





// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Azim Ansari",
  tagline: "Software Development Engineer.",
  img: profile,
  about: `Node.js Developer with 4 years of experience at NativeByte Software LLP, specializing in backend development with Node.js, MongoDB,
Express, MySQL, and Socket.io. Developed and architected systems for UPSC and network marketing concepts, demonstrating proficiency in
core software engineering concepts and system design. Seeking the Node.js Developer (Backend) position to contribute to both product-based
and service-based IT industries.`,
  // resume: resume,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/azim-ansari-37aa421a6",
  github: "https://github.com/azim-ansari-au9",
  twitter: "https://x.com/azimpanjwar",
  instagram: "https://www.instagram.com/azimpanjwar",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "SDE 1",
    Company: `NativeByte Software LLP `,
    Location: "Noida",
    Type: "Hybrid",
    Duration: "September 2023 - Currently",
    Description: `
    Worked as SDE-I, contributing to the architecture for UPSC and network marketing concepts. Gained expertise in Node.js, MongoDB, Express, MySQL, and Socket.io, while acquiring strong knowledge of core software engineering and system design principles.
    `,
  },
  {
    Position: "Node Js Developer",
    Company: `EDevlop`,
    Location: "Bhuvneshwar",
    Type: "Client site - New Delhi",
    Duration: "June 2023 - August 2023",
    Description: `Worked as a Backend Developer specializing in Node.js, with hands-on experience in technologies including Node.js, MongoDB, Express, Web3, MySQL, and Socket.io.`,
  },
  {
    Position: "Node Js Developer",
    Company: `SoluLab`,
    Location: "Ahmadabad",
    Type: "Remote",
    Duration: "May 2021 - May 2023",
    Description: `Worked as a Backend Developer (Node.js) with experience in Node.js, MongoDB, Express, Web3, MySQL, and Socket.io. Acquired a strong foundation in core software engineering concepts and system design.`,
  },
  {
    Position: "MERN STACK MENTOR",
    Company: `AttainU`,
    Location: "Bengaluru",
    Type: "Remote",
    Duration: "January 2021 - April 2021",
    Description: `Led a batch in building scalable web applications using the MERN stack, Python, and DSA, aligned with industry standards for Full Stack Web Development. Acquired expertise in core software engineering concepts, system design, and data structures and algorithms using Python. Also led a project team in developing scalable web applications with the MERN stack.`,
  },
  {
    Position: "Software Trainee",
    Company: `AttainU`,
    Location: "Bengaluru",
    Type: "Remote",
    Duration: "January 2020 - January 2021",
  },
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "Bachelor of technology (B. Tech)",
    Company: `MIT Muzaffarpur, Aryabhatta knowledge University Patna Bihar • Muzaffarpur,BIhar • 2019`,
    Location: "Muzaffarpur",
    Type: "Full Time",
    Duration: "Aug 2015 - Jul 2019",
  },
  {
    Position: "Intermediate (I.Sc)",
    Company: "Rajendra college chapra",
    Location: "Saran, Bihar",
    Type: "Full Time",
    Duration: "2012-2014",
  },
  {
    Position: "10th",
    Company: "Kisan Mazdoor High School",
    Location: "Tari bazaar, Siwan, Bihar",
    Type: "Full Time",
    Duration: "2012",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  js: js,
  html: html,
  css: css,
  react: react,
  redux: redux,
  sass: sass,
  tailwind: tailwind,
  bootstrap: bootstrap,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
  figma: figma,
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "VUENOW - MY CLOUD PARTICLES",
    image: veunow,
    description: `MyCloudParticles and VueNow provide comprehensive marketing services, designing, building, and managing state-of-the-art cloud art centers. Leveraged technologies include Node.js, MongoDB, and Express, along with the integration of third-party APIs for payments, such as Razorpay.`,
    techstack: "NodeJs, MongoDB, Socket, Redis, Razorpay, Signzy, TypeScript",
    previewLink: "https://vuenow-dev.ntb.one/",
  },
  {
    title: "UPSC-SITES-RENEW",
    image: upsc,
    description: `Renewed and maintained UPSC websites, in addition to developing solutions for gate pass entry and exam hall ticket systems, handling large user data. Leveraged technologies such as Node.js, MongoDB, Express, and Bitbucket for efficient management and implementation.`,
    techstack: "NodeJs, JavaScript, TypeScript, MongoDB etc.",
    previewLink: "https://upsc.gov.in/e-admit-cards"
  },
  {
    title: "COIN-VAUALTION",
    image: projectImage3,
    description: `Developed a platform(Mobile Application) for buying and selling coins and notes with price verification based on price ranges. Gained expertise in technologies such as Node.js, MongoDB, Express, Web3, Python, and Machine Learning APIs. Acquired in-depth knowledge of machine learning.`,
    techstack: "Nodejs, JavaScript, TypeScript, MongoDB, Express, Python, Web3 and Machine Learning APIs",
    previewLink: "NA",
  },
  {
    title: "SLM(SUNNY-LENDING-MORTAGE)",
    image: projectImage4,
    description: `Sunny Lending LLC, a licensed mortgage lender in Maryland and broker in multiple states, generates mortgage loan leads, with technology built on Node.js, MongoDB, Express, Web3, and third-party APIs, and handles commercial loans across the continental U.S.`,
    techstack: "NodeJs, MongoDB, Express, Web3, Third party APIs, HTML/CSS, JavaScript",
    previewLink: "",
  },
  {
    title: "NFTY",
    image: nfty,
    description: `Powered by NFTY Token, the first De-Fi Reputation Protocol was developed using Node.js, MongoDB, Express, Web3, with third-party crypto price APIs integrated into the backend.`,
    techstack: "Node, MongoDB, Express, Web3, Socket, HTML/CSS, JavaScript",
    previewLink: "",
  },
  {
    title: "DLCC",
    image: dlcc,
    description: `Developed a crypto trading web application with buy/sell functionality using Node.js, MongoDB, Express, Web3, socket.io, integrating third-party crypto price APIs and Anchorage APIs for crypto transfers in the backend.`,
    techstack: "NodeJs, MongoDB, Express, Web3, socket.io, integrating third-party crypto price APIs and Anchorage APIs, HTML/CSS, JavaScript",
    previewLink: "https://digitalprimetechnologies.com/",
  },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "azimpanjwar@gmail.com",
  phone: "+91 77399 45298",
};
