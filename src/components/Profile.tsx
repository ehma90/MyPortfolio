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
          Hello 👋🏽, I&apos;m Emmanuel, a professional Software Developer with
          five years of experience in both learning and working within the
          field. I specialize in delivering interactive, responsive, accessible,
          and user-friendly web and mobile applications that resonate with users
          globally. While I hold a Google Professional Cybersecurity
          certification, my core strengths are in engineering frontend web and
          mobile applications, leveraging the latest programming languages,
          tools, and technologies. <br /> <br /> In addition, I have
          considerable expertise in backend development, particularly in
          building and testing APIs, as well as managing data storage and
          retrieval from databases. My passion for security is evident in every
          project I undertake. My extensive knowledge of the TCP/IP model, NIST
          Cybersecurity Framework, and SIEM tools such as Splunk and Chronicle
          uniquely positions me to design and develop secure applications.
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
