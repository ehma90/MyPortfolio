import { Image, Link, Text } from "@/tw-components";
import Container from "@/tw-components/container";
import { useRouter } from "next/router";

function Navbar() {
  const router = useRouter()
  const {pathname} = router;
  const splitLocation = pathname.split("/");


  return (
    <Container className="my-4 md:my-9">
      <nav className=" flex justify-center  md:justify-end gap-x-8">
        <Link href="/">
          <Text as="p" variant="p" className={splitLocation[1] === '' ? 'text-lg md:text-xl text-green-900 border-b border-green-900 decoration-1' : 'text-lg md:text-xl'} >
            Home
          </Text>
        </Link>
        <Link href="/projects">
          <Text as="p" variant="p" className={splitLocation[1] === 'projects' ? 'text-lg md:text-xl text-green-900 border-b border-green-900 decoration-1' : 'text-lg md:text-xl'}>
            Projects
          </Text>
        </Link>
        <Link href="/resume">
          <Text as="p" variant="p" className={splitLocation[1] === 'resume' ? 'text-lg md:text-xl text-green-900 border-b border-green-900 decoration-1' : 'text-lg md:text-xl'}>
            Resume
          </Text>
        </Link>
      </nav>
    </Container>
  );
}

export default Navbar;
