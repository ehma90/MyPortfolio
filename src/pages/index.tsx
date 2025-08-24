"use client";
import React from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <Layout description="Emmanuel Essien is a FullStack Developer & Security Analyst">
      <Navigation />
      <main className="pt-16">
        <section id="home" className="min-h-screen flex items-center">
          <Hero />
        </section>

        <section id="about" className="py-20">
          {/* <About /> */}
        </section>

        <section id="projects" className="py-20 bg-surface/30">
          {/* <Projects /> */}
        </section>

        <section id="skills" className="py-20">
          {/* <Skills /> */}
        </section>

        <section id="contact" className="py-20 bg-surface/30">
          <Contact />
        </section>
      </main>
      <Footer />
    </Layout>
  );
}
