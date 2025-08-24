"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Link } from "@/reusable-components";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from "react-icons/fa";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex items-center container justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="space-y-3"
            >
              <p className="text-lg text-accent font-medium">Hello, I'm</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="gradient-text">Emmanuel Essien</span>
              </h1>
              <h2 className="text-xl sm:text-3xl lg:text-4xl text-text-secondary font-medium">
                FullStack Developer & Security Analyst
              </h2>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-base lg:text-lg text-text-secondary leading-relaxed max-w-2xl"
            >
              I specialize in building scalable, secure, and user-friendly web
              applications. From frontend to backend, I create complete
              solutions that drive business growth and deliver exceptional user
              experiences.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="#projects"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg shadow-lg hover:shadow-glow transition-all duration-300 transform hover:-translate-y-1"
              >
                View My Work
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-all duration-300 transform hover:-translate-y-1"
              >
                Get In Touch
              </Link>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex items-center space-x-6"
            >
              <span className="text-text-muted">Follow me:</span>
              <div className="flex space-x-4">
                <Link
                  href="https://github.com/ehma90"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-primary p-3 rounded-lg hover:bg-surface-light transition-all duration-200 transform hover:scale-110"
                  aria-label="GitHub"
                >
                  <FaGithub className="h-6 w-6" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/ehmaessien"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-primary p-3 rounded-lg hover:bg-surface-light transition-all duration-200 transform hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="h-6 w-6" />
                </Link>
                <Link
                  href="mailto:ehmaessien@gmail.com"
                  className="text-text-secondary hover:text-primary p-3 rounded-lg hover:bg-surface-light transition-all duration-200 transform hover:scale-110"
                  aria-label="Email"
                >
                  <FaEnvelope className="h-6 w-6" />
                </Link>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl animate-float"></div>

              {/* Profile image */}
              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="relative z-10"
              >
                <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                  <Image
                    src="/assets/emmanuel.jpg"
                    alt="Emmanuel Essien"
                    fill
                    className="object-cover rounded-full border-4 border-primary/30 shadow-2xl"
                    priority
                  />
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 blur-xl animate-pulse"></div>
                </div>
              </motion.div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full opacity-60"
              />
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-secondary rounded-full opacity-60"
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={scrollToAbout}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-text-secondary hover:text-primary transition-colors duration-200"
            aria-label="Scroll to about section"
          >
            <FaArrowDown className="h-6 w-6" />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
