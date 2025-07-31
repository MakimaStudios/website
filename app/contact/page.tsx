"use client";

import { motion } from "framer-motion";
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

export default function Contact() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 relative overflow-hidden">
        <div className="container mx-auto relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h1 
              variants={fadeIn}
              className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6"
            >
              Get in <span className="text-white underline drop-shadow-[0_0_60px_rgba(255,255,255,0.8)]">Touch</span>
            </motion.h1>
            
            <motion.p 
              variants={fadeIn}
              className="text-base sm:text-lg text-[#999] mb-8 sm:mb-10 max-w-2xl mx-auto"
            >
              Have a project in mind or just want to say hello? We&apos;d love to hear from you.
            </motion.p>
          </motion.div>
        </div>
      </section>
      
      {/* Contact Form Section */}
      <section className="pb-20 sm:pb-32 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-16">
            {/* Contact Information */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="space-y-8 sm:space-y-12"
            >
              <motion.div variants={fadeIn}>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Contact Information</h2>
                <p className="text-sm sm:text-base text-[#999] mb-6 sm:mb-8">
                  Feel free to reach out to us through any of the following channels. We&apos;re always excited to discuss new projects and opportunities.
                </p>
              </motion.div>
              
              <motion.div variants={fadeIn} className="space-y-6 sm:space-y-8">
                <div className="flex gap-4 sm:gap-6 items-start">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-md bg-transparent flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#999]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">Email</h3>
                    <a href="mailto:studiosmakima@gmail.com" className="text-sm sm:text-base text-[#999] hover:text-white transition-colors">
                      studiosmakima@gmail.com
                    </a>
                  </div>
                </div>
              </motion.div>
              
              <motion.div variants={fadeIn} className="pt-6 sm:pt-8">
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Follow Us</h3>
                <div className="flex gap-3 sm:gap-4">
                  {[
                    { 
                      platform: 'github', 
                      url: 'https://github.com/makimastudios',
                      icon: (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                      )
                    },
                    { 
                      platform: 'twitter', 
                      url: 'https://twitter.com/makimastudios',
                      icon: (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                        </svg>
                      )
                    }
                  ].map(({ platform, url, icon }) => (
                    <a 
                      key={platform} 
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-md bg-transparent flex items-center justify-center hover:bg-[#222] transition-colors"
                    >
                      {icon}
                    </a>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
} 