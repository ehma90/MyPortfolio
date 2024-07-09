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
      "I collaborated with the design and marketing teams when building the website, placing the right content on the website significantly contributed to the swift purchase of about 525+ NFTs on launch day and more later",
      "I enhanced my soft skills by volunteering to support the community manager, effectively and courteously responding to more than 5600+ community members' inquiries.",
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
      "Executed the development of the front-end interface for the company's website and web application; precisely adhered to design templates, accurately replicated UI components, and ensured integration, resulting in a 35% increase in user satisfaction",
      "Collaborated with fellow developers to achieve shared goals by fostering teamwork, actively seeking clarification through questions, and sharing ideas to address challenges efficiently",
    ],
  },
  {
    id: 3,
    year: {
      start: "August 2023",
      end: "Jun 2024",
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
      "Collaborated with a team of designers and engineers to develop and launch a web application showcasing the company's MVP, roadmap, and features; increased user engagement by 40%, and improved data retrieval efficiency by 25%",
      "roposed innovative features for product development and integrated Firebase SDK to secure application features, ensuring only authorised access; contributed ideas that led to the development of three new user-centric features.",
      "I executed tasks timely and accurately, significantly contributing to a 23% faster onboarding process for new cases and law firms, enhancing overall organisational efficiency",
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
