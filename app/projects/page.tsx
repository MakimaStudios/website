"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Footer from "../components/Footer";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

// Mock project data
const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Web Development",
    description: "A modern e-commerce platform with advanced filtering and payment integration.",
    tags: ["Next.js", "Tailwind CSS", "Stripe"],
  },
  {
    id: 2,
    title: "Portfolio Website",
    category: "Web Design",
    description: "A clean and minimalist portfolio website for a digital artist.",
    tags: ["React", "Framer Motion", "GSAP"],
  },
  {
    id: 3,
    title: "Task Management App",
    category: "Web Application",
    description: "A collaborative task management application with real-time updates.",
    tags: ["React", "Firebase", "Tailwind CSS"],
  },
  {
    id: 4,
    title: "Restaurant Website",
    category: "Web Development",
    description: "A responsive website for a local restaurant with online reservation system.",
    tags: ["Next.js", "Styled Components", "MongoDB"],
  },
  {
    id: 5,
    title: "Weather Dashboard",
    category: "Web Application",
    description: "A weather dashboard with location-based forecasts and interactive maps.",
    tags: ["React", "OpenWeather API", "Mapbox"],
  },
  {
    id: 6,
    title: "Social Media Dashboard",
    category: "UI/UX Design",
    description: "A comprehensive dashboard for managing multiple social media accounts.",
    tags: ["Figma", "UI Design", "UX Research"],
  },
];

export default function Projects() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="container mx-auto relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h1 
              variants={fadeIn}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              Our <span className="text-[#666]">Projects</span>
            </motion.h1>
            
            <motion.p 
              variants={fadeIn}
              className="text-lg text-[#999] mb-10 max-w-2xl mx-auto"
            >
              Explore our portfolio of web development and design projects. Each project represents our commitment to quality and innovation.
            </motion.p>
            
            {/* Categories */}
            <motion.div variants={fadeIn} className="flex flex-wrap gap-4 justify-center mb-16">
              {["All", "Web Development", "Web Design", "UI/UX", "Applications"].map((category) => (
                <button
                  key={category}
                  className={`px-6 py-2 rounded-md text-sm ${
                    category === "All" 
                      ? "bg-white text-black" 
                      : "bg-[#111] text-[#999] hover:bg-[#222] transition-colors"
                  }`}
                >
                  {category}
                </button>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Projects Grid */}
      <section className="px-6 pb-32">
        <div className="container mx-auto">
          {/* Coming Soon Overlay */}
          <div className="relative">
            <div className="absolute inset-0 bg-black bg-opacity-70 backdrop-blur-sm z-10 flex flex-col items-center justify-center rounded-2xl">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">Coming Soon</h2>
              <p className="text-[#999] max-w-md text-center">We're working on some amazing projects. Check back soon to see our complete portfolio.</p>
            </div>
            
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 filter blur-[2px]"
            >
              {projects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={fadeIn}
                  className="bg-transparent rounded-xl h-[100px] overflow-hidden group transition-colors"
                >
                  {/* Project image placeholder */}
                  <div className="aspect-video bg-black relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black opacity-40"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">{project.title.charAt(0)}</span>
                    </div>
                    
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                      <Link href={`/projects/${project.id}`}>
                        <button className="px-5 py-2 rounded-md bg-white text-black text-sm font-medium">
                          View Details
                        </button>
                      </Link>
                    </div>
                  </div>
                  
                  {/* Project details */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs text-[#777] font-mono">{project.category}</span>
                      <span className="text-xs text-[#777] font-mono">#{project.id.toString().padStart(2, '0')}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 group-hover:text-white transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-[#999] text-sm mb-5">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span 
                          key={tag} 
                          className="px-3 py-1 bg-black text-[#999] text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
} 