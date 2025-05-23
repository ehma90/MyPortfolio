import myDatas from "@/data/porfolioDatas";
import { useParams, useRouter } from "next/navigation";
import Container from "@/reusable-components/container";
import { motion } from "framer-motion";
import { Button, Image, Text } from "@/reusable-components";
import { BsArrowLeft } from "react-icons/bs";
import { useGlobalContext } from "@/providers/global.provider";
import { GrSecure } from "react-icons/gr";

const ProjectDetailsPage = () => {
  const params = useParams();
  const router = useRouter()

  const getSlug = myDatas?.find((item) => item.slug === params?.slug);

  return (
    <main className="max-w-4xl mx-auto w-full mt-16">
      <Container>
        <div className="flex items-center">
          <motion.div
            animate={{ x: 0 }}
            initial={{ x: 100 }}
            transition={{ duration: 0.9, type: "spring" }}
          >
            <Button
              onClick={() => router.back()}
              size="sm"
              variant="outlined"
              className="p-2 rounded-full shadow-md border flex justify-center items-center w-8 md:w-12 h-8"
            >
              <BsArrowLeft size={20} />
            </Button>
          </motion.div>
          <Text
            as="h3"
            variant="h3"
            className="w-full md:text-3xl text-center text-white/70 hidden md:block mr-16"
          >
            {getSlug?.header}
          </Text>
        </div>
        <Text
          as="h3"
          variant="h3"
          className="w-full md:text-2xl text-center text-white/70 md:hidden block"
        >
          {getSlug?.header}
        </Text>
        <div className="flex flex-col justify-center items-center md:mt-0 mb-12 mx-auto">
          <div className=" w-full max-w-lg mt-5 ">
            <Image
              src={getSlug?.image || ""}
              width={300}
              height={200}
              alt={getSlug?.header || ""}
              className="w-full h-full pointer-events-none rounded-xl shadow-md"
            />
          </div>

          <ul className="py-4 md:py-8 px-2 flex justify-center flex-wrap gap-4 opacity-50">
            {getSlug?.stack?.map((item: any) => (
              <li
                key={item.id}
                className="m-0 py-[4px] px-[8px] md:py-[8px] md:px-[16px] text-[12px] md:text-[14px] font-medium border border-white/80 rounded-full list-none"
              >
                {item}
              </li>
            ))}
          </ul>

          <Text
            as="h6"
            variant="h6"
            className="mx-auto px-2 max-w-lg text-base md:text-lg text-white/60 md:text-center"
          >
            {getSlug?.text}
          </Text>

          <div className="flex w-full justify-between md:justify-center gap-4 mt-8 md:mt-12 ">
            {getSlug?.link ? (
              <Button
                size="lg"
                variant="outlined"
                href={getSlug?.link}
                external
                rel="noreferrer"
                className=""
              >
                <Text as="p" variant="p" className="">
                  Github link <span aria-hidden="true">→</span>
                </Text>
              </Button>
            ) : (
              <div className="w-32 text-green-900 focus:outline-none bg-white rounded-lg border flex justify-center items-center gap-2">
                <GrSecure color="#00532D" />
                <Text as="p" variant="p" className="text-gray-500">
                  Private Repo
                </Text>
              </div>
            )}

            <Button
              size="md"
              variant="primary"
              href={getSlug?.deploy}
              external
              rel="noreferrer"
              className=""
            >
              See live <span aria-hidden="true">→</span>
            </Button>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default ProjectDetailsPage;
