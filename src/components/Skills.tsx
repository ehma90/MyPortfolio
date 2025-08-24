"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/reusable-components";
import { techStack } from "@/data/resume";
import { FaCode, FaDatabase, FaTools, FaServer } from "react-icons/fa";

const Skills = () => {
  const skillCategories = [
    {
      icon: FaCode,
      title: "Languages",
      skills: techStack[0].languages,
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: FaServer,
      title: "Frameworks & Libraries",
      skills: techStack[0].framework,
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: FaDatabase,
      title: "Databases & Tools",
      skills: techStack[0].tools,
      color: "from-green-500 to-emerald-500",
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
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            I've worked with a wide range of technologies and tools to build
            robust, scalable applications. Here's a comprehensive overview of my
            technical expertise.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-6"></div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-surface-light border border-border rounded-2xl p-8 h-full hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-2">
                {/* Category Header */}
                <div className="text-center mb-8">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <category.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-text-primary mb-2">
                    {category.title}
                  </h3>
                  <div
                    className={`w-12 h-0.5 bg-gradient-to-r ${category.color} mx-auto rounded-full`}
                  ></div>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.language}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: categoryIndex * 0.2 + skillIndex * 0.1,
                      }}
                      viewport={{ once: true }}
                      className="group/skill"
                    >
                      <div className="flex items-center space-x-4 p-3 rounded-lg hover:bg-surface transition-colors duration-200">
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 bg-surface border border-border rounded-lg flex items-center justify-center group-hover/skill:border-primary/50 transition-colors duration-200">
                            <img
                              src={skill.image}
                              alt={skill.language}
                              className="w-6 h-6 object-contain"
                            />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-text-primary group-hover/skill:text-primary transition-colors duration-200">
                            {skill.language}
                          </h4>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/20 rounded-2xl p-8 lg:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              Additional <span className="gradient-text">Expertise</span>
            </h3>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Beyond technical skills, I bring valuable experience in security,
              project management, and team collaboration.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Cybersecurity",
                description: "NIST Framework, TCP/IP Model, SIEM Tools",
              },
              {
                title: "Project Management",
                description: "Agile/Scrum, Jira, Team Leadership",
              },
              {
                title: "API Development",
                description: "RESTful APIs, GraphQL, Authentication",
              },
              {
                title: "DevOps",
                description: "Docker, CI/CD, Cloud Deployment",
              },
            ].map((expertise, index) => (
              <motion.div
                key={expertise.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="bg-surface-light border border-border rounded-xl p-6 h-full hover:border-primary/50 transition-all duration-300">
                  <h4 className="text-lg font-semibold text-text-primary mb-3 group-hover:text-primary transition-colors duration-200">
                    {expertise.title}
                  </h4>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {expertise.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Learning Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-surface-light border border-border rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              Always <span className="gradient-text">Learning</span>
            </h3>
            <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
              Technology evolves rapidly, and I'm committed to staying current
              with the latest trends and best practices in software development
              and cybersecurity.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium">
                Currently Learning: Advanced Security Patterns
              </span>
              <span className="px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-full text-secondary text-sm font-medium">
                Next Goal: Cloud Architecture
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </Container>
  );
};

export default Skills;
