import { Link, Text } from "@/reusable-components";
import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

function Profile() {
  return (
    <motion.div
      animate={{ y: 0 }}
      initial={{ y: 200 }}
      transition={{ duration: 0.9, type: "spring" }}
      className="w-full mt-8"
    >
      <ul className=" w-full space-y-2 md:space-y-4 mb-5">
        <li className="leading-7 text-base text-white/70">
          Hello 👋🏽, I&apos;m Emmanuel, a professional FullStack developer. I
          specialise in delivering interactive, responsive, and user-friendly
          web and mobile applications that resonate with users globally. My core
          strengths lie in frontend technologies, where It&apos;s leverage to create
          scalable, efficient, and high-performing applications. I&apos;m passionate
          about building complete solutions, from database architecture to
          seamless user interfaces, ensuring a smooth and impactful experience.{" "}
          <br /> <br />
          In addition, I have considerable expertise in backend development,
          particularly in building and testing APIs using technologies like Express.js and Node.js, as well as managing data
          storage and retrieval from databases. I have extensive knowledge of
          the TCP/IP model, NIST Cybersecurity Framework, and SIEM tools such as
          Splunk and Chronicle uniquely positions me to design and develop
          secure applications.
        </li>
        <li className="leading-7 text-base text-white/70">
          Available for jobs 🫱🏻‍🫲🏾 and collaborations.
        </li>
        <li className="leading-7 text-base text-white/70">
          Feel free to send an{" "}
          <Link
            href="mailto:ehmaessien@gmail.com"
            target="_blank"
            rel="noreferrer"
            className=" font-semibold text-white underline decoration-1"
          >
            Email
          </Link>{" "}
          📧
        </li>
      </ul>
      <div className="flex gap-4">
        <Link href="https://www.linkedin.com/in/ehmaessien" target="_blanck">
          <FaLinkedin size={28} />
        </Link>
        <Link href="https://github.com/ehma90" target="_blanck">
          <FaGithub size={28} />
        </Link>
      </div>
    </motion.div>
  );
}

export default Profile;
