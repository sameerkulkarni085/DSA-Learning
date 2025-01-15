import React, { useEffect } from "react";
import { motion } from "framer-motion";

const RecursionAlgorithms = () => {
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
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Introduction to Recursion</h2>
                <p>
                  Recursion is a method of solving a problem where the solution depends on solutions to smaller instances of the same problem. A recursive function calls itself during its execution.
                </p>
                <img src="https://media.geeksforgeeks.org/wp-content/uploads/20200713155814/Recursion.png" alt="Recursion" className="my-4" />
              </motion.section>
              
              <motion.section
                className="mb-8"
                initial="hidden"
                animate="visible"
                variants={sectionVariants}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Factorial of a Number</h2>
                <p>
                  The factorial of a non-negative integer n is the product of all positive integers less than or equal to n. It is denoted by n!.
                </p>
                <p>The algorithm for finding the factorial of a number using recursion is as follows:</p>
                <ul className="list-decimal list-inside">
                  <li>If n is 0 or 1, return 1.</li>
                  <li>Otherwise, return n multiplied by the factorial of (n-1).</li>
                </ul>
                <img src="https://media.geeksforgeeks.org/wp-content/uploads/20200713155814/Factorial.png" alt="Factorial" className="my-4" />
              </motion.section>
    
              <motion.section
                className="mb-8"
                initial="hidden"
                animate="visible"
                variants={sectionVariants}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Fibonacci Series</h2>
                <p>
                  The Fibonacci series is a series of numbers in which each number (Fibonacci number) is the sum of the two preceding numbers. The simplest is the series 1, 1, 2, 3, 5, 8, etc.
                </p>
                <p>The algorithm for finding the nth Fibonacci number using recursion is as follows:</p>
                <ul className="list-decimal list-inside">
                  <li>If n is 0, return 0.</li>
                  <li>If n is 1, return 1.</li>
                  <li>Otherwise, return the sum of the Fibonacci numbers of (n-1) and (n-2).</li>
                </ul>
                <img src="https://media.geeksforgeeks.org/wp-content/uploads/20200713155814/Fibonacci.png" alt="Fibonacci Series" className="my-4" />
              </motion.section>
    
              <motion.section
                className="mb-8"
                initial="hidden"
                animate="visible"
                variants={sectionVariants}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Advantages and Disadvantages</h2>
                <p><b>Advantages of Recursion:</b></p>
                <ul className="list-disc list-inside">
                  <li>Reduces the complexity of the code.</li>
                  <li>Solves problems that can be broken down into smaller, repetitive problems.</li>
                </ul>
                <p><b>Disadvantages of Recursion:</b></p>
                <ul className="list-disc list-inside">
                  <li>Can lead to stack overflow if the recursion depth is too large.</li>
                  <li>May have higher time and space complexity compared to iterative solutions.</li>
                </ul>
              </motion.section>
              
              <motion.section
                className="mb-8"
                initial="hidden"
                animate="visible"
                variants={sectionVariants}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Applications</h2>
                <ul className="list-disc list-inside">
                  <li>Used in algorithms such as quicksort, mergesort, and binary search.</li>
                  <li>Helps in solving problems that can be divided into similar sub-problems, such as the Tower of Hanoi.</li>
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
                  Recursion is a powerful technique for solving problems that can be broken down into smaller, repetitive problems. Understanding recursion is essential for tackling complex algorithms and data structures.
                </p>
              </motion.section>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecursionAlgorithms;