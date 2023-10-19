import { Image, Link, Text } from "@/tw-components";
import Container from "@/tw-components/container";
import { useRouter } from "next/router";
import { useState } from "react";

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
    <Container className="my-4 md:my-9">
      <nav className=" flex justify-center  md:justify-end gap-x-8">
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
          href="https://drive.google.com/file/d/1yYjSg0ZBg_uzBmZ8ZEkjEcEZ2S_g0G3Z/view"
          external
        >
          <Text as="p" variant="p" className="text-lg md:text-xl text-black">
            Resume
          </Text>
        </Link>
      </nav>
    </Container>
  );
}

export default Navbar;
