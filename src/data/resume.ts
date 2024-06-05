type YearProps = {
  start: string;
  end: string;
};

export type ResumeProps = {
  id: number;
  year: YearProps;
  position: string;
  role: string;
  company_name: string;
  company_description: string;
  company_location: string;
  description: string;
  objective: string[];
};

export const resumeData = [
  {
    id: 1,
    year: {
      start: "Dec 2021",
      end: "Oct 2021",
    },
    position: "Full-time",
    role: "Frontend Engineer",
    company_name: "Redux Protocol",
    company_description: "Web3 accelerator and launchpad.",
    company_location: "Canada",
    description:
      "Assigned to build a website to launch an NFTs feature in the application.",
    objective: [
      "Methodically placing and cross-checking the content as directed by the marketing teams on the website, played a pivotal role in facilitating the rapid purchase of NFTs on launch day and beyond.",
      "Strengthen my communication skills by volunteering to support the community manager, where I responded politely and respectfully to inquiries from community members.",
    ],
  },
  {
    id: 2,
    year: {
      start: "Oct 2022",
      end: "Jan 2022",
    },
    position: "Full-time",
    role: "Frontend Engineer",
    company_name: " Rareket Technology Solution",
    company_description:
      "Rareket makes it easy to buy and sell NFTs with high royalties.",
    company_location: "South Africa",
    description:
      "Task with collaborating alongside other developers to construct the front-end interface for the second version of the company’s website and web application. I meticulously executed the project according to setout design templates, demonstrating my proficiency in replicating UI components and integrating APIs that render data dynamically.",
    objective: [
      "Collaborating with fellow developers to achieve shared goals. Diligently working together, actively seeking clarification through questions, and sharing ideas to address challenges efficiently.",
    ],
  },
  {
    id: 3,
    year: {
      start: "August 2023",
      end: "Present",
    },
    position: "Contractor",
    role: "Fullstack Engineer",
    company_name: "NoImpunity",
    company_description:
      "NoImpunity delivers the digital infrastructure required to systematically address and fund climate and human rights litigation.",
    company_location: "N1C4PF, London",
    description:
      "Collaborate to build a front-end application and website that showcases the company’s first MVP, roadmap, and other relevant features. Oversee maintenance and implementation of features that follow the predesigned roadmap. The application was indeed accessible, interactive, and responsive, having a seamless user interface that retrieved data from the database.",
    objective: [
      "My consistent ability to complete assigned tasks precisely on time has distinguished me and contributed to the company’s swift progress.",
      "Contribute ideas that have aided in the development of the product, and integrating Firebase SDK, so that authorized users only have access to some other useful features of the application.",
    ],
  },
];

export const tools: string[] = [
  "Version Control Systems ",
  "Node Package Managers",
  "Yarn",
  "Firebase",
  "Stripe sdk",
  "Github",
  "Jira",
  "Postman",
  "Apollo client",
  "Vercel",
  "Heroku",
  "Figma.",
];

export const frameworks: string[] = [
  "Express.js",
  "Next.js",
  "React.js",
  "Redux",
  "TailwindCSS",
  "Bootstrap",
  "DaisyUI.",
];

export const languages: string[] = ["Node.js", "GraphQL", "JavaScript", "TypeScript", "CSS3", "HTML5"];
