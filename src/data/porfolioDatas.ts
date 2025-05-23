export type DataProps = {
  image: string | undefined;
  slug: string;
  header: string | undefined;
  text: string | undefined;
  link?: string;
  deploy?: string;
  stack?: string[];
};

const myDatas = [
  {
    image: "/assets/university-website.png",
    slug: "university-website",
    header: "Univesity website",
    text: "A university website(Demo), that shows courses offered by this ideal university. Built using HTML, Css3, Javascript and PHP.",
    link: "https://github.com/ehma90/project-tutorial",
    deploy: "https://ehma90.github.io/project-tutorial/",
    stack: ["HTML5", "CSS3", "Javascript", "PHP"],
  },
  {
    image: "/assets/tech-conference.png",
    slug: "tech-conference",
    header: "Tech AI conference",
    text: "Customized website for a Tech Conference(Demo), created to complete our weekly milestone at Microverse. This webpage is built with HTML5, CSS3, and JavaScript",
    link: "https://github.com/ehma90/Tech-AI-Conference",
    deploy: "https://ehma90.github.io/Tech-AI-Conference",
    stack: ["HTML5", "CSS3", "Javascript"],
  },
  {
    image: "/assets/tic-tac-toe.png",
    slug: "tic-tac-toe",
    header: "TIC-TAC-TOE",
    text: "Most people have engage in the battle of winning tic-tac-toe when playing with an opponent on a sheet of paper or other physical forms of display. I created this app to do the exact same thing.",
    link: "https://github.com/ehma90/tic-tac-toe",
    deploy: "https://ehma90.github.io/tic-tac-toe/",
    stack: ["HTML5", "CSS3", "Javascript"],
  },
  {
    image: "/assets/pebble.png",
    slug: "pebble",
    header: "Pebble Landing Page",
    text: "A landing page has been created for this demonstration website, featuring event programs and news updates. The CSS framework implemented in this landing page facilitates effortless styling of components.",
    link: "https://github.com/ehma90/Pebble",
    deploy: "https://pebble-beryl.vercel.app/",
    stack: ["React.JS", "TailwindCSS"],
  },
  {
    image: "/assets/protis.png",
    slug: "protis",
    header: "Protis HQ",
    text: "An innovative and creative agency for modern day businesses. At Protis, we develop eye-catching brands, build digital products, and deliver campaigns that stand out from the norm.",
    deploy: "https://protishq.vercel.app/",
    stack: ["React.JS", "TailwindCSS", "AOS animation"],
  },
  {
    image: "/assets/bfwc.png",
    slug: "bfwc",
    header: "Buy Food With Crypto",
    text: "BWFC is an idea my friends came up with, to create an online food service platform with blockchain used as payment. I quickly dive in to creating this website for it. Only desktop version available.",
    deploy: "https://buy-food-with-crypto.vercel.app",
    stack: ["React.JS", "TailwindCSS",],
  },
  {
    image: "/assets/4waymedia.png",
    slug: "fourwaymedia",
    header: "Fourway Media",
    text: "Fourway Media is a design & animation studio. We take joy in working together with amazing artists, creating meaningful pieces that feel, move, look and sound amazing.",
    deploy: "https://www.fourwaymedia.com/",
    stack: ["Next.JS", "TailwindCSS", "Vercel", "Formspree"],
  },
  {
    image: "/assets/noimpunity.png",
    slug: "noimpunity",
    header: "No Impunity",
    text: "No Impunity unlock the potential of litigation funding to support victims of corporate human rights abuse and environmental damage in their fight for justice. In achieving this, I was assigned built this website/web app frontend, using trending programming language like Typescript, Next framework, Firebase for authentication, and Vercel for hosting the frontend. This project has expand and widen my understanding of Typescript.",
    deploy: "https://www.noimpunity.org/",
    stack: [
      "Next.ts",
      "TailwindCSS",
      "Typescript",
      "Firebase",
      "Stripe",
      "Vercel",
      "Node",
    ],
  },
];

export default myDatas;
