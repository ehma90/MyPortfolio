"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/reusable-components";
import { FaCode, FaShieldAlt, FaRocket, FaUsers } from "react-icons/fa";

const About = () => {
  const features = [
    {
      icon: FaCode,
      title: "FullStack Development",
      description:
        "Building complete web applications from frontend to backend with modern technologies like React, Next.js, Node.js, and more.",
    },
    {
      icon: FaShieldAlt,
      title: "Security Expertise",
      description:
        "Deep understanding of cybersecurity principles, TCP/IP model, NIST framework, and SIEM tools for secure application development.",
    },
    {
      icon: FaRocket,
      title: "Performance Optimization",
      description:
        "Creating scalable, efficient applications that deliver exceptional user experiences and drive business growth.",
    },
    {
      icon: FaUsers,
      title: "Team Collaboration",
      description:
        "Experienced in leading development teams, collaborating with designers, and delivering projects on time and within scope.",
    },
  ];

  return (
    <Container className="px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-text-primary">
              Professional FullStack Developer & Security Analyst
            </h3>

            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                Hello 👋🏽, I'm Emmanuel, a professional FullStack developer with
                a passion for creating interactive, responsive, and
                user-friendly web and mobile applications that resonate with
                users globally.
              </p>

              <p>
                My core strengths lie in frontend technologies, where I leverage
                modern frameworks to create scalable, efficient, and
                high-performing applications. I'm passionate about building
                complete solutions, from database architecture to seamless user
                interfaces, ensuring a smooth and impactful experience.
              </p>

              <p>
                In addition, I have considerable expertise in backend
                development, particularly in building and testing APIs using
                technologies like Express.js and Node.js, as well as managing
                data storage and retrieval from databases.
              </p>

              <p>
                My extensive knowledge of the TCP/IP model, NIST Cybersecurity
                Framework, and SIEM tools such as Splunk and Chronicle uniquely
                positions me to design and develop secure applications that
                protect user data and business assets.
              </p>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center space-x-2 text-primary hover:text-primary-dark transition-colors duration-200 cursor-pointer"
              >
                <span className="font-semibold">
                  Available for jobs 🫱🏻‍🫲🏾 and collaborations
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-surface-light border border-border rounded-xl p-4 h-full hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-2">
                  <div className="flex flex-col items-start space-x-4">
                    <div className="flex-1 flex items-center gap-3">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                          <feature.icon className="h-6 w-6" />
                        </div>
                      </div>

                      <h4 className="text-lg font-semibold text-text-primary mb-2 group-hover:text-primary transition-colors duration-200">
                        {feature.title}
                      </h4>
                    </div>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Experience Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="bg-surface-light border border-border rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-center mb-12">
              Professional <span className="gradient-text">Experience</span>
            </h3>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">4+</div>
                <div className="text-text-secondary">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-secondary mb-2">
                  20+
                </div>
                <div className="text-text-secondary">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">5+</div>
                <div className="text-text-secondary">Technologies Mastered</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Container>
  );
};

export default About;
