import { Link, Text } from "@/reusable-components";
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

  const [links, setLinks] = useState<LinksProps[]>([
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
    {
      id: 3,
      pathname: "resumes",
      title: "resumes",
    },
  ]);

  const handleClick = (id: number) => {
    const getClicked = links.find((link: any) => link.id === id);

    if (getClicked?.id === id) {
      setIsClicked(!isClicked);
    }
  };

  return (
    <div className=" fixed top-0 mx-auto bg-white w-full flex justify-center py-5 h-20 md:justify-end gap-x-8">
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
    </div>
  );
}

export default Navbar;
