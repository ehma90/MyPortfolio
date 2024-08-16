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
    company_description:
      "Redux is a Web3 Accelerator with a focus on truly decentralized and democratized crowdfunding, built on Ethereum",
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

export const techStack = [
  {
    languages: [
      {
        language: "JavaScript ES6",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        language: "TypeScript",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
      {
        language: "GraphQL",
        image: "https://github.com/graphql.png",
      },
      {
        language: "SQL",
        image: "https://www.svgrepo.com/show/331760/sql-database-generic.svg",
      },
      {
        language: "HTML",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
      {
        language: "CSS3",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },
    ],
    framework: [
      {
        language: "React",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        language: "Next.js",
        image: "https://cdn.worldvectorlogo.com/logos/next-js.svg",
      },
      {
        language: "Express.js",
        image:
          "https://www.dailyupblog.com/wp-content/uploads/node_express.jpg",
      },
      {
        language: "Node.js",
        image:
          "https://cdn.prod.website-files.com/6377ac1a39ff1e65214224e5/63c1b9a98bb8e173ea7e0d9f_nodejs-new-pantone-black_blog.png",
      },
      {
        language: "Apollo Client/Server",
        image:
          "https://cdn.hashnode.com/res/hashnode/image/upload/v1635255536906/ZgWIk2ON6.jpeg",
      },
    ],
    tools: [
      {
        language: "Git",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      },
      {
        language: "GitHub",
        image:
          "https://user-images.githubusercontent.com/3369400/139447912-e0f43f33-6d9f-45f8-be46-2df5bbc91289.png",
      },
      {
        language: "Postman",
        image: "https://www.cdnlogo.com/logos/p/20/postman.svg",
      },
      {
        language: "Jira",
        image: "https://cdn-icons-png.flaticon.com/512/5968/5968875.png",
      },
      {
        language: "Vercel",
        image:
          "https://w7.pngwing.com/pngs/436/888/png-transparent-vercel-hd-logo-thumbnail.png",
      },
      {
        language: "Netlify",
        image: "https://flaviocopes.com/images/netlify/netlify-logo.png",
      },
      {
        language: "Yarn",
        image:
          "https://www.pikpng.com/pngl/m/84-844380_yarn-global-packages-not-working-yarn-package-manager.png",
      },
      {
        language: "NPM",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/540px-Npm-logo.svg.png",
      },
      {
        language: "Firebase",
        image:
          "https://firebase.google.com/static/images/brand-guidelines/logo-logomark.png",
      },
      {
        language: "MongoDB",
        image:
          "https://cdn.worldvectorlogo.com/logos/mongodb-icon-2.svg",
      },
      {
        language: "Docker",
        image:
          "https://c0.klipartz.com/pngpicture/219/411/gratis-png-logo-docker-kubernetes-microservices-cloud-computing-logo-dockers-thumbnail.png",
      },
    ],
  },
];
