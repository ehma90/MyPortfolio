"use client";

import React from "react";
import { motion } from "framer-motion";
import { Link } from "@/reusable-components";
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: FaGithub,
      href: "https://github.com/ehma90",
      label: "GitHub",
      color: "hover:text-gray-400",
    },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/ehmaessien",
      label: "LinkedIn",
      color: "hover:text-blue-500",
    },
    {
      icon: FaEnvelope,
      href: "mailto:ehmaessien@gmail.com",
      label: "Email",
      color: "hover:text-red-400",
    },
  ];

  return (
    <footer className="bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <Link href="#home" className="text-2xl font-bold gradient-text">
              Emmanuel Essien
            </Link>
            <p className="text-text-secondary text-sm leading-relaxed max-w-xs">
              FullStack Developer & Security Analyst passionate about creating
              innovative solutions and building secure, scalable applications.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className={`w-10 h-10 bg-surface-light border border-border rounded-lg flex items-center justify-center text-text-secondary ${social.color} transition-all duration-200 hover:border-primary/50`}
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-text-primary mb-4">
              Contact Info
            </h3>
            <div className="space-y-2 text-sm text-text-secondary">
              <p>📍 Lagos, Nigeria</p>
              <p>📧 ehmaessien@gmail.com</p>
              <p>💼 Available for opportunities</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-border mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-text-secondary text-sm">
              © {currentYear} Emmanuel Essien. All rights reserved.
            </p>

            <div className="flex items-center space-x-2 text-text-secondary text-sm">
              <span>Made with</span>
              <FaHeart className="h-4 w-4 text-red-500 animate-pulse" />
              <span>using Next.js & Tailwind CSS</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
