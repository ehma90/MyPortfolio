"use client";

import React from "react";
import { motion } from "framer-motion";
import { Link } from "@/reusable-components";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from "react-icons/fa";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex items-center container justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Ambient Background Elements */}
      <div className="absolute inset-0 overflow-hidden hidden lg:block pointer-events-none">
        {/* Floating geometric shapes */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-20 left-10 w-32 h-32 border border-primary/20 rounded-full opacity-30"
        />

        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-40 right-20 w-24 h-24 border border-secondary/20 rounded-lg opacity-30"
        />

        <motion.div
          animate={{
            x: [0, 60, 0],
            y: [0, -40, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-40 left-20 w-20 h-20 border border-accent/20 rounded-full opacity-30"
        />

        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, 80, 0],
            rotate: [0, 90, 180],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-20 right-40 w-16 h-16 border border-primary/20 rounded-lg opacity-30"
        />

        {/* Gradient orbs */}
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl"
        />

        <motion.div
          animate={{
            scale: [1.5, 1, 1.5],
            opacity: [0.2, 0.1, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-tl from-accent/10 to-primary/10 rounded-full blur-3xl"
        />

        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:50px_50px]">
            <motion.div
              animate={{
                x: [0, -50, 0],
                y: [0, -50, 0],
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
              className="w-full h-full"
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="space-y-4 mb-8"
          >
            <motion.p
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="text-lg text-accent font-medium inline-block px-4 py-2 bg-accent/10 border border-accent/20 rounded-full"
            >
              Hello, I'm
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.4 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight"
            >
              <span className="gradient-text">Emmanuel Essien</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.4 }}
              className="text-2xl sm:text-3xl lg:text-4xl text-text-secondary font-medium"
            >
              FullStack Developer & Security Analyst
            </motion.h2>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.4 }}
            className="text-lg lg:text-xl text-text-secondary leading-relaxed max-w-3xl mx-auto mb-12"
          >
            I specialize in building scalable, secure, and user-friendly web
            applications. From frontend to backend, I create complete solutions
            that drive business growth and deliver exceptional user experiences.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-12"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="#projects"
                className="inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-xl shadow-lg hover:shadow-glow transition-all duration-300 text-lg"
              >
                View My Work
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="#contact"
                className="inline-flex items-center justify-center px-10 py-5 border-2 border-primary text-primary font-semibold rounded-xl hover:bg-primary hover:text-white transition-all duration-300 text-lg backdrop-blur-sm bg-surface/50"
              >
                Get In Touch
              </Link>
            </motion.div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.4 }}
            className="flex flex-col items-center space-y-4"
          >
            <span className="text-text-muted text-sm font-medium">
              Connect with me
            </span>
            <div className="flex space-x-6">
              <motion.div
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="https://github.com/ehma90"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-14 h-14 bg-surface-light border border-border rounded-xl text-text-secondary hover:text-primary hover:border-primary/50 transition-all duration-300 backdrop-blur-sm"
                  aria-label="GitHub"
                >
                  <FaGithub className="h-7 w-7" />
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="https://www.linkedin.com/in/ehmaessien"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-14 h-14 bg-surface-light border border-border rounded-xl text-text-secondary hover:text-primary hover:border-primary/50 transition-all duration-300 backdrop-blur-sm"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="h-7 w-7" />
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="mailto:ehmaessien@gmail.com"
                  className="flex items-center justify-center w-14 h-14 bg-surface-light border border-border rounded-xl text-text-secondary hover:text-primary hover:border-primary/50 transition-all duration-300 backdrop-blur-sm"
                  aria-label="Email"
                >
                  <FaEnvelope className="h-7 w-7" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>

        
      </div>
    </div>
  );
};

export default Hero;
