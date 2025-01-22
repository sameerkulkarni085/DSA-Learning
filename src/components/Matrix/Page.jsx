import React, { useEffect } from "react";
import { motion } from "framer-motion";

const MatrixPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="home" className="bg-white dark:bg-primary py-10">
      <div className="container mx-auto px-4">
        <div className="flex items-center flex-col">
          <div className="flex flex-col items-center justify-center min-h-[650px] md:min-h-[650px]">
            <div className="container relative text-black dark:text-white">
              <motion.section
                className="mb-8"
                initial="hidden"
                animate="visible"
                variants={sectionVariants}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Introduction</h2>
                <p>
                  A matrix is a two-dimensional array of numbers arranged in rows and columns. Matrices are used in various fields such as mathematics, physics, engineering, and computer science.
                </p>
              </motion.section>
              
              <motion.section
                className="mb-8"
                initial="hidden"
                animate="visible"
                variants={sectionVariants}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Matrix Operations</h2>
                <ul className="list-disc list-inside">
                  <li><b>Addition:</b> Adding corresponding elements of two matrices.</li>
                  <li><b>Subtraction:</b> Subtracting corresponding elements of two matrices.</li>
                  <li><b>Multiplication:</b> Multiplying rows of the first matrix with columns of the second matrix.</li>
                  <li><b>Transpose:</b> Flipping a matrix over its diagonal.</li>
                </ul>
              </motion.section>
    
              <motion.section
                className="mb-8"
                initial="hidden"
                animate="visible"
                variants={sectionVariants}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Applications of Matrices</h2>
                <ul className="list-disc list-inside">
                  <li>Computer Graphics</li>
                  <li>Cryptography</li>
                  <li>Network Analysis</li>
                  <li>Scientific Computations</li>
                </ul>
              </motion.section>
              
              <motion.section
                className="mb-8"
                initial="hidden"
                animate="visible"
                variants={sectionVariants}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Conclusion</h2>
                <p>
                  Matrices are a powerful tool for representing and manipulating data in a structured way. Understanding matrix operations is essential for many applications in science and engineering.
                </p>
              </motion.section>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MatrixPage;
