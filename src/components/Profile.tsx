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
          Hi 👋🏽, I&apos;m Emmanuel, a professional Software developer with 5
          years of learning and working experience delivering interactive,
          responsive, accessible, and user-friendly web and mobile applications
          that resonate with users globally. I possess exceptional
          collaborative, communication, and proactive contributor skills. I
          constantly educate myself on the latest technologies, techniques, and
          strategies to improve my knowledge in this field.
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
