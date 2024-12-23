import React from "react";
import images from "../../constants/image";
import { motion } from "framer-motion";

const socials = [
  {
    logo: images.linkedinIcon,
    alt: "Linkedin Icon",
    link: "https://www.linkedin.com/in/felixmacaspac/",
  },
  {
    logo: images.githubIcon,
    alt: "Github Icon",
    link: "https://github.com/felixmacaspac",
  },
  {
    logo: images.codepenIcon,
    alt: "Codepen Icon",
    link: "https://codepen.io/fmcmacaspac",
  },
];

const HeroSection = () => {
  return (
    <section id="home" className="bg-white dark:bg-primary">
      <div className="container relative">
        <div className="flex items-center flex-col">
          <div className="flex flex-col items-center justify-center min-h-[50vh] md:min-h-[50vh]">
            <motion.h1
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "linear", duration: 0.5 }}
              className="hero__heading"
            >
              Welcome to DSA Learning!
            </motion.h1>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default HeroSection;
