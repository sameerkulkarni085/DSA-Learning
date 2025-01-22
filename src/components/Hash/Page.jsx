import React, { useEffect } from "react";
import { motion } from "framer-motion";

const HashInfo = () => {
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
                  A hash table is a data structure that maps keys to values using a hash function. It provides efficient insertion, deletion, and lookup operations.
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
                  <li><b>Insert:</b> Adding a key-value pair to the hash table.</li>
                  <li><b>Delete:</b> Removing a key-value pair from the hash table.</li>
                  <li><b>Search:</b> Finding the value associated with a key.</li>
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
                  <li>Efficient for quick lookups and insertions.</li>
                  <li>Handles large datasets well.</li>
                </ul>
                <p><b>Disadvantages:</b></p>
                <ul className="list-disc list-inside">
                  <li>Collisions can affect performance.</li>
                  <li>Requires a good hash function.</li>
                </ul>
              </motion.section>
              
              <motion.section
                className="mb-8"
                initial="hidden"
                animate="visible"
                variants={sectionVariants}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Applications of Hash Tables</h2>
                <ul className="list-disc list-inside">
                  <li>Used in database indexing.</li>
                  <li>Used in caching mechanisms.</li>
                  <li>Used in implementing associative arrays.</li>
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
                  Hash tables are a fundamental data structure that provide a way to manage key-value pairs efficiently. Understanding hash tables and their operations is crucial for many programming tasks.
                </p>
              </motion.section>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HashInfo;
