import Card from "@/components/Card";
import Layout from "@/components/Layout";
import Title from "@/components/Title";
import React from "react";
import { motion } from "framer-motion";
import Container from "@/reusable-components/container";
import Navbar from "@/components/Navbar";
import { frameworks, languages, resumeData, tools } from "@/data/resume";

const resume = () => {
  return (
    <Layout title="Resume">
      <Container>
        <div className="flex justify-end relative">
          <Navbar />
        </div>
        <div className="px-4 md:px-0 mt-24 md:mt-44">
          <Title width="w-[140px] md:w-[205px]" />

          <motion.div
            animate={{ y: 0 }}
            initial={{ y: 200 }}
            transition={{ duration: 0.9, type: "spring" }}
          >
            <h2 className="text-green-900 font-bold text-2xl mt-7 md:mt-12 mb-4 text-center md:text-start">
              Experiences
            </h2>

            <ul>
              {resumeData
                .map((list, index) => (
                  <li
                    key={index}
                    className="block md:flex gap-x-4 md:mt-6 mb-7 md:mb-14"
                  >
                    <div className="w-full md:w-[20%]">
                      <label className="text-gray-500">
                        {list?.year?.start} - {list?.year?.end}
                      </label>
                      <label className="text-gray-500 block">
                        ({list?.position})
                      </label>
                    </div>
                    <div className="w-full md:w-[80%] md:mx-6 space-y-2">
                      <p className="font-bold">
                        {list?.role}
                        <span className=" text-green-900 font-bold">
                          - {list?.company_name} ({list?.company_location})
                        </span>{" "}
                      </p>
                      <p className="italic text-gray-600">
                        {list?.company_description}
                      </p>
                      <ul className="space-y-2 mx-4">
                        {list?.objective.map((text, index) => (
                          <li key={index} className=" list-disc">
                            {text}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                ))
                .reverse()}
            </ul>

            <h2 className="text-green-900 font-bold text-2xl mt-7 md:mt-12 mb-4 text-center md:text-start">
              Education
            </h2>
            <div className="block md:flex gap-x-6 w-full">
              <div className="w-full md:w-[20%]">
                <label className="text-gray-500">
                  Mar, 2015 - October, 2018
                </label>
              </div>
              <div className="md:mx-6 w-full md:w-[80%]">
                <p className="font-bold ">
                  B.Sc. in Physics{" "}
                  <span className=" text-green-900">
                    - University of Uyo, <br /> (Akwa-Ibom, Nigeria)
                  </span>
                </p>
              </div>
            </div>

            <h2 className="text-green-900 font-bold text-2xl mt-7 md:mt-12 mb-4 text-center md:text-start">
              Skills and Tech Stack
            </h2>
            <div className=" w-full">
              <ul className="space-y-2">
                <li className="block md:flex gap-x-4 text-gray-600 font-bold lg:whitespace-nowrap">
                  Programming Languages:{" "}
                  {languages.map((lang, index) => (
                    <span
                      key={index}
                      className="font-normal lg:whitespace-nowrap text-black"
                    >
                      {lang},{" "}
                    </span>
                  ))}
                </li>
                <li className="block md:flex gap-x-4 text-gray-600 font-bold">
                  Frameworks:{" "}
                  {frameworks.map((fra, index) => (
                    <span
                      key={index}
                      className="font-normal md:whitespace-nowrap text-black"
                    >
                      {fra},{" "}
                    </span>
                  ))}
                </li>
                <li className="block md:flex gap-x-4 text-gray-600 font-bold">
                  Tools:{" "}
                  {tools.map((lang, index) => (
                    <span
                      key={index}
                      className="font-normal lg:whitespace-nowrap text-black"
                    >
                      {lang},{" "}
                    </span>
                  ))}
                </li>
              </ul>
            </div>

            <h2 className="text-green-900 font-bold text-2xl mt-7 md:mt-12 mb-4 text-center md:text-start">
              Contact Information
            </h2>
            <div className="contact">
              <ul className="pb-6">
                <li className="text-gray-500 font-bold">
                  Email:{" "}
                  <span className="font-normal hover:underline">
                    <a
                      href="mailto:ehmaessien@gmail.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      ehmaessien@gmail.com
                    </a>
                  </span>
                </li>
                <li className="text-gray-500 font-bold">
                  Twitter:{" "}
                  <span className="font-normal hover:underline">
                    <a
                      href="https://twitter.com/ehmaessieen"
                      target="_blank"
                      rel="noreferrer"
                    >
                      @ehmaessieen
                    </a>
                  </span>
                </li>
                <li className="text-gray-500 font-bold">
                  LinkedIn:{" "}
                  <span className="font-normal hover:underline">
                    <a
                      href="https://linkedin.com/in/ehmaessien"
                      target="_blank"
                      rel="noreferrer"
                    >
                      @ehmaessien
                    </a>
                  </span>
                </li>
                <li className="text-gray-500 font-bold">
                  Github:{" "}
                  <span className="font-normal hover:underline">
                    <a
                      href="https://github.com/ehma90"
                      target="_blank"
                      rel="noreferrer"
                    >
                      @ehma90
                    </a>
                  </span>
                </li>
                <li className="text-gray-500 font-bold">
                  Telegram:{" "}
                  <span className="font-normal hover:underline" >
                    <a
                      href="https://t.me/ehma90"
                      target="_blank"
                      rel="noreferrer"
                    >
                      @ehma90
                    </a>
                  </span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </Container>
    </Layout>
  );
};

export default resume;
