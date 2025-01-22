import React, { useEffect } from "react";
import { motion } from "framer-motion";

const StringInfo = () => {
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
                  A string is a sequence of characters, typically used to represent text. Strings are a fundamental data type in most programming languages.
                </p>
              </motion.section>
              
              <motion.section
                className="mb-8"
                initial="hidden"
                animate="visible"
                variants={sectionVariants}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-4">String Operations</h2>
                <ul className="list-disc list-inside">
                  <li><b>Concatenation:</b> Combining two or more strings into one.</li>
                  <li><b>Substring:</b> Extracting a part of a string.</li>
                  <li><b>Length:</b> Finding the number of characters in a string.</li>
                  <li><b>Comparison:</b> Comparing two strings for equality or order.</li>
                  <li><b>Searching:</b> Finding the position of a substring within a string.</li>
                </ul>
              </motion.section>
    
              <motion.section
                className="mb-8"
                initial="hidden"
                animate="visible"
                variants={sectionVariants}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-4">String Methods</h2>
                <p>Common string methods in various programming languages include:</p>
                <ul className="list-disc list-inside">
                  <li>JavaScript: <code>str.length</code>, <code>str.concat()</code>, <code>str.substring()</code></li>
                  <li>Python: <code>len(str)</code>, <code>str + str</code>, <code>str[1:4]</code></li>
                  <li>Java: <code>str.length()</code>, <code>str.concat()</code>, <code>str.substring()</code></li>
                </ul>
              </motion.section>
    
              <motion.section
                className="mb-8"
                initial="hidden"
                animate="visible"
                variants={sectionVariants}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Advantages and Disadvantages</h2>
                <p><b>Advantages:</b></p>
                <ul className="list-disc list-inside">
                  <li>Easy to use and understand.</li>
                  <li>Supported by most programming languages.</li>
                </ul>
                <p><b>Disadvantages:</b></p>
                <ul className="list-disc list-inside">
                  <li>Immutable in some languages, requiring new strings to be created for modifications.</li>
                  <li>Can be memory-intensive for large texts.</li>
                </ul>
              </motion.section>
              
              <motion.section
                className="mb-8"
                initial="hidden"
                animate="visible"
                variants={sectionVariants}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Applications of Strings</h2>
                <ul className="list-disc list-inside">
                  <li>Used in text processing and manipulation.</li>
                  <li>Essential for data input and output operations.</li>
                  <li>Used in pattern matching and regular expressions.</li>
                </ul>
              </motion.section>
              
              <motion.section
                className="mb-8"
                initial="hidden"
                animate="visible"
                variants={sectionVariants}
                transition={{ duration: 0.5, delay: 1.0 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Conclusion</h2>
                <p>
                  Strings are a fundamental data type that provide a way to store and manipulate text. Understanding strings and their operations is crucial for many programming tasks.
                </p>
              </motion.section>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StringInfo;