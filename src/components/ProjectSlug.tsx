import Container from "@/reusable-components/container";
import React from "react";
import { motion } from "framer-motion";
import { Button, Image, Text } from "@/reusable-components";
import { BsArrowLeft } from "react-icons/bs";
import { DataProps } from "@/data/porfolioDatas";
import { useGlobalContext } from "@/providers/global.provider";
import { GrSecure } from "react-icons/gr";

const ProjectSlug: React.FC<DataProps> = ({
  id,
  image,
  header,
  text,
  link,
  stack,
  deploy,
}) => {
  const { handleGoBack } = useGlobalContext();
  return (
    <div>
      <Container className="  mx-auto px-5 md:px-0">
        <div className="flex items-center">
          <motion.div
            animate={{ x: 0 }}
            initial={{ x: 100 }}
            transition={{ duration: 0.9, type: "spring" }}
          >
            <Button
              onClick={() => handleGoBack()}
              size="sm"
              variant="outlined"
              className="p-2 rounded-full shadow-md border flex justify-center items-center w-12 h-8"
            >
              <BsArrowLeft size={20} />
            </Button>
          </motion.div>
          <Text
            as="h1"
            variant="h1"
            className="w-full text-2xl text-center text-white/70"
          >
            {header}
          </Text>
        </div>
        <div
          key={id}
          className="flex flex-col justify-center items-center mt-12 md:mt-0 mb-12 mx-auto"
        >
          <div className=" w-full max-w-sm mt-5 ">
            <Image
              src={image}
              width={300}
              height={200}
              alt={header}
              className="w-full h-full pointer-events-none rounded-xl shadow-md"
            />
          </div>

          <ul className="py-8 md:mx-10 flex justify-center flex-wrap gap-4 opacity-50">
            {stack?.map((item: any) => (
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
            className="mx-auto text-white/60 text-center"
          >
            {text}
          </Text>

          <div className="flex w-full justify-between md:justify-center gap-4 mt-5 md:mt-12 ">
            {link ? (
              <Button
                size="lg"
                variant="outlined"
                href={link}
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
              href={deploy}
              external
              rel="noreferrer"
              className=""
            >
              See live <span aria-hidden="true">→</span>
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProjectSlug;
