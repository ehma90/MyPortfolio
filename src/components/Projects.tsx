"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/reusable-components";
import { FaGithub, FaExternalLinkAlt, FaEye } from "react-icons/fa";
import myDatas from "@/data/porfolioDatas";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState(myDatas);

  const categories = [
    "all",
    "react",
    "nextjs",
    "typescript",
    "nodejs",
    "html/css",
  ];

  const filterProjects = (category: string) => {
    setActiveFilter(category);
    if (category === "all") {
      setFilteredProjects(myDatas);
    } else {
      const filtered = myDatas.filter((project) =>
        project.stack?.some((tech) =>
          tech.toLowerCase().includes(category.toLowerCase())
        )
      );
      setFilteredProjects(filtered);
    }
  };

  return (
    <Container className="px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in
            fullstack development, security, and modern web technologies.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-6"></div>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex overflow-x-auto w-full scrollbar-hide justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => filterProjects(category)}
              className={`px-3 py-1 lg:px-6 lg:py-3 rounded-full font-medium transition-all duration-300 capitalize whitespace-nowrap ${
                activeFilter === category
                  ? "bg-gradient-to-r from-primary to-secondary text-white shadow-glow"
                  : "bg-surface-light border border-border text-text-secondary hover:border-primary/50 hover:text-text-primary"
              }`}
            >
              {category === "all" ? "All Projects" : category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-surface-light border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-2 card-hover">
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <div className="aspect-video relative">
                      <img
                        src={project.image || "/assets/university-website.png"}
                        alt={project.header || "Project"}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                        {project.link && (
                          <motion.a
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white hover:bg-primary-dark transition-colors duration-200"
                            aria-label="View source code"
                          >
                            <FaGithub className="h-5 w-5" />
                          </motion.a>
                        )}
                        {project.deploy && (
                          <motion.a
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            href={project.deploy}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white hover:bg-secondary-dark transition-colors duration-200"
                            aria-label="View live project"
                          >
                            <FaExternalLinkAlt className="h-5 w-5" />
                          </motion.a>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-primary transition-colors duration-200">
                      {project.header}
                    </h3>

                    <p className="text-text-secondary text-sm leading-relaxed mb-4 line-clamp-3">
                      {project.text}
                    </p>

                    {/* Tech Stack */}
                    {project.stack && (
                      <div className="mb-6">
                        <div className="flex flex-wrap gap-2">
                          {project.stack.slice(0, 4).map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 bg-surface border border-border rounded-full text-xs text-text-secondary"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.stack.length > 4 && (
                            <span className="px-3 py-1 bg-surface border border-border rounded-full text-xs text-text-secondary">
                              +{project.stack.length - 4} more
                            </span>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Action Button */}
                    {/* <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-gradient-to-r from-primary to-secondary text-white font-semibold py-3 px-6 rounded-lg hover:shadow-glow transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                      <FaEye className="h-4 w-4" />
                      <span>View Details</span>
                    </motion.button> */}
                  </div>
                </div>
              </motion.div>
            )).reverse()}
          </AnimatePresence>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              Have a project in mind?
            </h3>
            <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
              I'm always interested in new opportunities and exciting projects.
              Let's discuss how we can work together to bring your ideas to
              life.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg shadow-lg hover:shadow-glow transition-all duration-300"
            >
              Let's Talk
            </motion.a>
          </div>
        </motion.div>
      </div>
    </Container>
  );
};

export default Projects;
