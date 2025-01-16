import React, { useEffect } from "react";
import { motion } from "framer-motion";

const PatternSearchingAlgorithms = () => {
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
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Introduction to Pattern Searching Algorithms</h2>
                <p>
                  Pattern searching algorithms are used to find a pattern or substring within a larger string. These algorithms are fundamental in various applications such as text editing, search engines, and DNA sequencing.
                </p>
                <p>
                  Pattern searching algorithms can be categorized into two main types: exact pattern matching and approximate pattern matching. Exact pattern matching algorithms find the exact occurrence of a pattern, while approximate pattern matching algorithms allow for some mismatches.
                </p>
                <p>
                  Some common pattern searching algorithms include:
                </p>
                <ul className="list-disc list-inside">
                  <li>Naive Pattern Searching</li>
                  <li>Knuth-Morris-Pratt (KMP) Algorithm</li>
                  <li>Boyer-Moore Algorithm</li>
                  <li>Rabin-Karp Algorithm</li>
                  <li>Aho-Corasick Algorithm</li>
                </ul>
                <img src="https://media.geeksforgeeks.org/wp-content/uploads/PatternSearching.png" alt="Pattern Searching" className="my-4" />
              </motion.section>
              
              <motion.section
                className="mb-8"
                initial="hidden"
                animate="visible"
                variants={sectionVariants}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Knuth-Morris-Pratt (KMP) Algorithm</h2>
                <p>
                  The Knuth-Morris-Pratt (KMP) Algorithm is an efficient pattern searching algorithm that preprocesses the pattern to create a partial match table (also known as the "lps" array) to skip unnecessary comparisons.
                </p>
                <p>The algorithm for the KMP pattern searching is as follows:</p>
                <ul className="list-decimal list-inside">
                  <li>Preprocess the pattern to create the lps array</li>
                  <li>Use the lps array to skip unnecessary comparisons while searching the pattern in the text</li>
                </ul>
              </motion.section>

              <motion.section
                className="mb-8"
                initial="hidden"
                animate="visible"
                variants={sectionVariants}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Boyer-Moore Algorithm</h2>
                <p>
                  The Boyer-Moore Algorithm is another efficient pattern searching algorithm that preprocesses the pattern to create two tables: the bad character table and the good suffix table, which are used to skip unnecessary comparisons.
                </p>
                <p>The algorithm for the Boyer-Moore pattern searching is as follows:</p>
                <ul className="list-decimal list-inside">
                  <li>Preprocess the pattern to create the bad character table and the good suffix table</li>
                  <li>Use these tables to skip unnecessary comparisons while searching the pattern in the text</li>
                </ul>
              </motion.section>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PatternSearchingAlgorithms;