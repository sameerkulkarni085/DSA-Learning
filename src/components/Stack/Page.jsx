import React, { useEffect } from "react";
import { motion } from "framer-motion";

const StackInfo = () => {
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
                  A stack is a linear data structure that follows the Last In, First Out (LIFO) principle. Elements can be added and removed only from the top of the stack.
                </p>
              </motion.section>
              
              <motion.section
                className="mb-8"
                initial="hidden"
                animate="visible"
                variants={sectionVariants}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Basic Operations</h2>
                <ul className="list-disc list-inside">
                  <li><b>Push:</b> Adding an element to the top of the stack.</li>
                  <li><b>Pop:</b> Removing the top element from the stack.</li>
                  <li><b>Peek:</b> Viewing the top element without removing it.</li>
                  <li><b>IsEmpty:</b> Checking if the stack is empty.</li>
                  <li><b>Size:</b> Getting the number of elements in the stack.</li>
                </ul>
              </motion.section>
    
              <motion.section
                className="mb-8"
                initial="hidden"
                animate="visible"
                variants={sectionVariants}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Advantages and Disadvantages</h2>
                <p><b>Advantages:</b></p>
                <ul className="list-disc list-inside">
                  <li>Simple and easy to implement.</li>
                  <li>Efficient for managing function calls and recursion.</li>
                </ul>
                <p><b>Disadvantages:</b></p>
                <ul className="list-disc list-inside">
                  <li>Limited access: Only the top element can be accessed directly.</li>
                  <li>Fixed size in static implementations.</li>
                </ul>
              </motion.section>
              
              <motion.section
                className="mb-8"
                initial="hidden"
                animate="visible"
                variants={sectionVariants}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Applications of Stacks</h2>
                <ul className="list-disc list-inside">
                  <li>Used in expression evaluation and syntax parsing.</li>
                  <li>Used in backtracking algorithms.</li>
                  <li>Used in managing function calls and recursion.</li>
                </ul>
              </motion.section>
              
              <motion.section
                className="mb-8"
                initial="hidden"
                animate="visible"
                variants={sectionVariants}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Conclusion</h2>
                <p>
                  Stacks are a fundamental data structure that provide a way to manage data in a LIFO manner. Understanding stacks and their operations is crucial for many programming tasks.
                </p>
              </motion.section>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StackInfo;
