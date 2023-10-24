import Layout from "@/components/Layout";
import myDatas from "@/data/porfolioDatas";
import { useRouter } from "next/router";
import { BsLink45Deg, BsArrowLeft } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import React from "react";
import { Button, Image, Link, Text } from "@/reusable-components";
import Container from "@/reusable-components/container";
import { motion } from "framer-motion";

const ProjectDetails = () => {
  const router = useRouter();
  const { slug } = router.query;

  const data = myDatas.find((x) => x.slug === slug);

  if (!data) {
    <Layout title="Page not found">
      <div className="text-center font-bold text-3xl">No Item Listed</div>
    </Layout>;
  } else {
    return (
      <Layout title={`${data?.header} project details` || `Project details`}>
        <Container className="  mx-auto px-5 md:px-0">
          <motion.div animate={{ x: 0 }} initial={{ x: 150 }} className="hidden md:block">
            <Button
              size="sm"
              variant="outlined"
              href="/projects"
              className="p-2 rounded-full shadow-md border border-gray-500 flex justify-center items-center w-12 h-12"
            >
              <BsArrowLeft size={24} />
            </Button>
          </motion.div>
          <div
            key={data?.id}
            className="flex flex-col justify-center items-center mt-12 md:mt-0 mb-12 mx-auto"
          >
            <Text
              as="h1"
              variant="h1"
              className="font-extralight text-5xl text-green-900"
            >
              {data?.header}
            </Text>
            <div className=" w-full max-w-3xl mt-5 ">
              <Image
                src={data?.image}
                width={300}
                height={200}
                alt={data?.header}
                className="w-full shadow-md"
              />
            </div>

            <ul className="py-[16px] md:py-[48px] flex justify-center flex-wrap gap-4 opacity-50">
              {data?.stack.map((item: any) => (
                <li
                  key={item.id}
                  className="m-0 py-[4px] px-[8px] md:py-[8px] md:px-[16px] text-[12px] md:text-[14px] font-medium border border-green-900 rounded-full list-none"
                >
                  {item}
                </li>
              ))}
            </ul>

            <Text
              as="p"
              variant="p"
              className="mx-auto md:px-[200px] font-light text-center"
            >
              {data?.text} 
            </Text>

            <div className="flex w-full justify-between mt-5 md:mt-12 md:px-[200px]">
              {data?.link ? (
                <Button
                size="lg"
                variant="outlined"
                  href={data?.link}
                  external
                  rel="noreferrer"
                  className=""
                >
                  
                  <Text as="p" variant="p" className="">
                    Github link <span aria-hidden="true">→</span>
                  </Text>
                </Button>
              ) : (
                <Link href="#"className="w-32 text-green-900 focus:outline-none bg-white rounded-lg border focus:z-10 focus:ring-4 focus:ring-gray-200 flex justify-center items-center">
                  Private Repo
                </Link>
              )}

              <Button size="md" variant="primary"
                href={data?.deploy}
                external
                rel="noreferrer"
                className="liveLink"
              >
                See live <span aria-hidden="true">→</span>
              </Button>
            </div>
          </div>
        </Container>
      </Layout>
    );
  }
};

export default ProjectDetails;
