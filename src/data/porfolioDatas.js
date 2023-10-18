import brandWebsite from "../Component/assets/brand-website.png";
import techConference from "../Component/assets/tech-conference.png";
import darkMode from "../Component/assets/dark-mode.png";
import githubFinder from "../Component/assets/github-finder.png";
import universityWebsite from "../Component/assets/university-website.png";
import formValidation from "../Component/assets/form-validation.png";
import movieBookings from "../Component/assets/movie-bookings.png";
import infiniteScroll from "../Component/assets/infinite-scroll.png";
import menuSlide from "../Component/assets/menu-slide.png";
import relaxerApp from "../Component/assets/relaxer-app.png";
import shoppingCart from "../Component/assets/shoppingCart.png";
import pebble from "../Component/assets/pebble.png";
import tic_tic_toe from "../Component/assets/tic-tac-toe.png";
import protis from "../Component/assets/protis.png"
import raraket from "../Component/assets/Rareket.png"
import noimpunity from "../Component/assets/noimpunity.png"

const PorfolioData = [
  {
    id: 1,
    image: universityWebsite,
    slug: "university-website",
    header: "Univesity website",
    text: "A university website(Demo), that shows courses offered by this ideal university. Built using HTML, Css3, Javascript and PHP.",
    link: "https://github.com/ehma90/project-tutorial",
    deploy: "https://ehma90.github.io/project-tutorial/",
    stack: ["HTML5", "CSS3", "Javascript", "PHP"],
  },
  {
    id: 2,
    image: techConference,
    slug: "tech-conference",
    header: "Tech AI conference",
    text: "Customized website for a Tech Conference(Demo), created to complete our weekly milestone at Microverse. This webpage is built with HTML5, CSS3, and JavaScript",
    link: "https://github.com/ehma90/Tech-AI-Conference",
    deploy: "https://ehma90.github.io/Tech-AI-Conference",
    stack: ["HTML5", "CSS3", "Javascript"],
    
  },
  {
    id: 3,
    image: brandWebsite,
    slug: "brand-website",
    header: "Brand Website Demo",
    text: "This a regular website built fully with TailwindCSS as a devDependency. Built with React.JS",
    link: "https://github.com/ehma90/Brand-Website",
    deploy: "https://brand-website-demo.vercel.app/",
    stack: ["React.JS", "TailwindCSS"],
  },
  {
    id: 4,
    image: darkMode,
    slug: "dark-mode",
    header: "Theme Mode",
    text: "This application’s main function for switching from dark or light mode uses the use-local-storage package to store the current state in the browser’s local storage. Built with custom CSS and React.JS",
    link: "https://github.com/ehma90/Dark-Mode",
    deploy: "https://dark-mode-co5o2sjhp-ehma90.vercel.app/",
    stack: ["React.JS", "use-local-storage"],
  },
  {
    id: 5,
    image: movieBookings,
    slug: "movie-bookings",
    header: "Movie Seat Bookings",
    text: "The fascination that people hold for viewing movies or shows is not unexpected, as enthusiasts purchase tickets for such events to gain access. However, in instances where there are numerous participants, documenting the accounts and compiling a list of attendees manually can be tedious and complex. Fortunately, advancements in technology have simplified the process of obtaining such data. This particular application endeavors to do just that, enabling the user to select a list of movies manually and providing the functionality to calculate the total price for each seat selected as well as the movie rate",
    link: "https://github.com/ehma90/movie-seat-bookings",
    deploy: "https://ehma90.github.io/movie-seat-bookings/",
    stack: ["HTML5", "CSS3", "Javascript"],
  },
  {
    id: 6,
    image: formValidation,
    slug: "form-validation",
    header: "Form Validation",
    text: "This simple form validation authenticates a username, and email, and confirms two passwords typed in. On our modern website/web application, this is a basic way to get data from clients in other to validate their authenticity to access the app or view other premium packages, whatever the case may be.",
    link: "https://github.com/ehma90/form-validation",
    deploy: "https://ehma90.github.io/form-validation/",
    stack: ["HTML5", "CSS3", "Javascript"],
  },
  {
    id: 7,
    image: infiniteScroll,
    slug: "infinte-scroll",
    header: "Infinte Scroll Post",
    text: "In this application, having a basic UI, the functionality here is an API call from jsonplaceholder, where the data as an array is mapped into cards. Also there is a filter functionality that filters either the title or the body of the data.",
    link: "https://github.com/ehma90/inifinite-scroll-post",
    deploy: "https://ehma90.github.io/inifinite-scroll-post/",
    stack: ["HTML5", "CSS3", "Javascript"],
  },
  {
    id: 8,
    image: menuSlide,
    slug: "menu-slide",
    header: "Menu Slide",
    text: "This project has just two basic functions, to slide in the menu bar and pop up a modal when logging in. Basically, most of our modern website and web application has these functionalities as an interaction with clients.",
    link: "https://github.com/ehma90/menu-slider-modal",
    deploy: "https://ehma90.github.io/menu-slider-modal/",
    stack: ["HTML5", "CSS3", "Javascript"],
  },
  {
    id: 9,
    image: relaxerApp,
    slug: "relaxer-app",
    header: "Relaxer App",
    text: "This application aims at relaxing your breathing interval, some functionalities are breathing in, holding, and breathing out within a 7.5 seconds interval.",
    link: "https://github.com/ehma90/Relaxer-App",
    deploy: "https://ehma90.github.io/Relaxer-App/",
    stack: ["HTML5", "CSS3", "Javascript"],
  },
  {
    id: 10,
    image: githubFinder,
    slug: "github-finder",
    header: "Github Finder App",
    text: "This project was developed utilizing the GitHub API to enable the exploration of GitHub users and exhibit select information pertaining to individual users. The construction of this project employed React.js, TailwindCss, and DaisyUI",
    link: "https://github.com/ehma90/Github-Finder-App",
    deploy: "https://githubfinder-app-two.vercel.app/",
    stack: ["React.JS", "DaisyUI", "axios"],
  },
  {
    id: 11,
    image: shoppingCart,
    slug: "shopping-cart",
    header: "Advance Shopping Cart",
    text: "It appears that the contemporary e-commerce web application possesses capabilities for the retention, inclusion, exclusion, and elimination of items, thereby constituting the primary function of said application. This exemplary shopping cart exhibits an inventory of articles available for purchase, featuring options for addition, removal, preservation, and deletion of said articles from the cart.",
    link: "https://github.com/ehma90/Advance-shopping-cart",
    deploy: "https://shopping-cart-eight-beryl.vercel.app/",
    stack: ["React.JS", "React-Bootstrap", "TypeScript"],
  },
  {
    id: 12,
    image: tic_tic_toe,
    slug: "tic-tac-toe",
    header: "TIC-TAC-TOE",
    text: "Most people have engage in the battle of winning tic-tac-toe when playing with an opponent on a sheet of paper or other physical forms of display. I created this app to do the exact same thing.",
    link: "https://github.com/ehma90/tic-tac-toe",
    deploy: "https://ehma90.github.io/tic-tac-toe/",
    stack: ["HTML5", "CSS3", "Javascript"],
  },
  {
    id: 13,
    image: pebble,
    slug: "pebble",
    header: "Pebble Landing Page",
    text: "A landing page has been created for this demonstration website, featuring event programs and news updates. The CSS framework implemented in this landing page facilitates effortless styling of components.",
    link: "https://github.com/ehma90/Pebble",
    deploy: "https://pebble-beryl.vercel.app/",
    stack: ["React.JS", "TailwindCSS"],
  },
  {
    id: 14,
    image: protis,
    slug: "protis",
    header: "Protis HQ",
    text: "Protis is a technology start-up that serves as an innovative and creative agency for modern-day businesses. This static webpage was designed and built by myself and my colleagues for the purpose of promoting our skills and business.",
    deploy: "https://protishq.com",
    stack: ["React.JS", "TailwindCSS", "AOS animation"],
  },
  {
    id: 15,
    image: noimpunity,
    slug: "noimpunity",
    header: "No Impunity",
    text: "No Impunity unlock the potential of litigation funding to support victims of corporate human rights abuse and environmental damage in their fight for justice. In achieving this, I was contracted to built this website/web app, using trending programming language like Typescript, NextJS as framework, and Firebase for authentication. This project has expand and widen my understanding of Typescript.",
    deploy: "https://www.noimpunity.org/",
    stack: ["Next.ts", "TailwindCSS", "Typescript", "Firebase", ],
  },
];

export default PorfolioData;
