"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Footer from "./components/Footer";

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

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* Hero Section with Parallax */}
      <section ref={heroRef} className="min-h-[86vh] relative overflow-hidden flex flex-col items-center justify-center px-4 sm:px-6 py-16 sm:py-20">
        {/* Background grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")', backgroundSize: '60px 60px' }}></div>
        </div>
        
        {/* Animated circles */}
        <motion.div 
          className="absolute w-64 sm:w-96 h-64 sm:h-96 rounded-full bg-[#111] blur-3xl opacity-20"
          animate={{
            x: mousePosition.x * 0.02,
            y: mousePosition.y * 0.02
          }}
          transition={{ type: "spring", mass: 2 }}
        />
        
        <motion.div 
          className="absolute right-1/4 top-1/3 w-48 sm:w-72 h-48 sm:h-72 rounded-full bg-[#111] blur-3xl opacity-20"
          animate={{
            x: -mousePosition.x * 0.01,
            y: -mousePosition.y * 0.01
          }}
          transition={{ type: "spring", mass: 3 }}
        />

        {/* Hero content */}
        <div className="container mx-auto relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center text-center max-w-4xl mx-auto px-4"
          >
            <motion.h1 
              variants={fadeIn}
              className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 leading-tight"
            >
              We Create <span className="text-white underline drop-shadow-[0_0_60px_rgba(255,255,255,0.8)]">Modern</span> Web Experiences
            </motion.h1>
            
            <motion.p 
              variants={fadeIn}
              className="text-base sm:text-lg text-[#999] mb-8 sm:mb-10 max-w-2xl"
            >
              Makima Studios is a creative studio focused on building exceptional web experiences with clean design and cutting-edge technology.
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 sm:gap-5 w-full sm:w-auto">
              <Link href="/projects" className="w-full sm:w-auto">
                <motion.button
                  className="w-full px-6 sm:px-8 py-3 sm:py-4 rounded-md bg-white cursor-pointer text-black font-medium hover:bg-gray-100 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Our Projects
                </motion.button>
              </Link>
              <Link href="/contact" className="w-full sm:w-auto">
                <motion.button
                  className="w-full px-6 sm:px-8 py-3 sm:py-4 rounded-md bg-transparent cursor-pointer border border-[#333] text-white font-medium hover:bg-[#111] transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Us
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 sm:bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-5 sm:w-6 h-8 sm:h-10 rounded-full border-2 border-[#333] flex items-start justify-center p-1">
            <motion.div 
              className="w-1 sm:w-1.5 h-2 sm:h-3 bg-white rounded-full" 
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-20 sm:py-32 px-4 sm:px-6">
        <div className="container mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-12 sm:gap-16 items-center"
          >
            <motion.div variants={fadeIn} className="relative">
              <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-12">
                {/* First team member avatar */}
                <div className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden border-2 border-[#333] bg-[#111]">
                  <Image 
                    src="/nexsu.jpg" 
                    alt="Batuhan (nexsu)" 
                    layout="fill" 
                    objectFit="cover"
                    className="hover:scale-110 transition-transform duration-300"
                  />
                </div>
                
                {/* Second team member avatar */}
                <div className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden border-2 border-[#333] bg-[#111]">
                  <Image 
                    src="/vendo.jpg" 
                    alt="İlker (vendo)" 
                    layout="fill" 
                    objectFit="cover"
                    className="hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={staggerContainer} className="space-y-6 sm:space-y-8">
              <motion.h2 
                variants={fadeIn}
                className="text-2xl sm:text-3xl md:text-5xl font-bold text-center md:text-left"
              >
                Young Developers<br />with <span className="text-white drop-shadow-[0_0_50px_rgba(255,255,255,0.8)]">Big</span> Dreams
              </motion.h2>
              
              <motion.p variants={fadeIn} className="text-[#999] text-center md:text-left">
                Founded by two 14-year-old passionate web developers, Batuhan (nexsu) and İlker (vendo), 
                Makima Studios represents the next generation of digital creators. We combine our fresh 
                perspective with technical skills to deliver websites that stand out.
              </motion.p>
              
              <motion.div variants={fadeIn} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="border border-[#222] hover:border-[#333] hover:bg-[#111] rounded-lg p-4 sm:p-5 transition-all duration-300">
                  <h3 className="text-lg sm:text-xl font-bold mb-2">Web Development</h3>
                  <p className="text-[#777] text-sm sm:text-base">Modern, responsive websites built with the latest technologies</p>
                </div>
                <div className="border border-[#222] hover:border-[#333] hover:bg-[#111] rounded-lg p-4 sm:p-5 transition-all duration-300">
                  <h3 className="text-lg sm:text-xl font-bold mb-2">UI/UX Design</h3>
                  <p className="text-[#777] text-sm sm:text-base">Intuitive interfaces with elegant user experiences</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      <Footer/>
    </>
  );
}
