import { Image, Link, Text } from "@/reusable-components";
import Container from "@/reusable-components/container";
import { useRouter } from "next/router";
import { useState } from "react";
import { motion } from "framer-motion";

interface LinksProps {
  id: number;
  pathname: string;
  title: string;
}

function Navbar() {
  const router = useRouter();
  const { pathname } = router;
  const splitLocation = pathname.split("/");
  const [isClicked, setIsClicked] = useState(false);

  const [links, setLinks] = useState([
    {
      id: 1,
      pathname: "",
      title: "home",
    },
    {
      id: 2,
      pathname: "projects",
      title: "projects",
    },
  ]);

  const handleClick = (id: number) => {
    const getClicked = links.find((link: any) => link.id === id);

    if (getClicked?.id === id) {
      setIsClicked(!isClicked);
    }
  };

  return (
    <motion.div transition={{type: "tween"}} animate={{y: 0}} initial={{y:-200}} className=" flex justify-center my-4 md:my-9  md:justify-end gap-x-8">
      {links.map((link) => (
        <Link
          key={link.id}
          href={`/${link.pathname}`}
          onClick={() => handleClick(link.id)}
          className={
            splitLocation[1] === link.pathname
              ? ` border-b-2 border-green-600 text-green-900`
              : ``
          }
        >
          <Text as="p" variant="p" className="text-lg md:text-xl text-black">
            {link.title.slice(0, 1).toLocaleUpperCase() + link.title.slice(1)}
          </Text>
        </Link>
      ))}
      <Link
        href="https://drive.google.com/file/d/1ef5FkJLC7XiBztPSHj1xOqyNNhtrB4lA/view?usp=drive_link"
        external
      >
        <Text as="p" variant="p" className="text-lg md:text-xl text-black">
          Resume
        </Text>
      </Link>
    </motion.div>
  );
}

export default Navbar;
