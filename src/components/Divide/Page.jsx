import React, { useEffect } from "react";
import { motion } from "framer-motion";

const DivideAndConquerAlgorithms = () => {
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
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Introduction to Divide and Conquer Algorithms</h2>
                <p>
                  Divide and conquer is an algorithmic paradigm for solving problems by breaking them down into smaller subproblems, solving each subproblem independently, and then combining the solutions to solve the original problem.
                </p>
                <p>
                  This approach is particularly useful for problems that can be divided into smaller, similar problems. It is often used in algorithms for sorting, searching, and matrix multiplication.
                </p>
                <p>
                  Some common problems that can be solved using divide and conquer algorithms include:
                </p>
                <ul className="list-disc list-inside">
                  <li>Merge Sort</li>
                  <li>Quick Sort</li>
                  <li>Binary Search</li>
                  <li>Strassen's Matrix Multiplication</li>
                  <li>Closest Pair of Points</li>
                </ul>
                <img src="https://media.geeksforgeeks.org/wp-content/uploads/DivideAndConquer.png" alt="Divide and Conquer" className="my-4" />
              </motion.section>
              
              <motion.section
                className="mb-8"
                initial="hidden"
                animate="visible"
                variants={sectionVariants}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Merge Sort</h2>
                <p>
                  Merge Sort is a divide and conquer algorithm that divides the input array into two halves, recursively sorts each half, and then merges the two sorted halves to produce the sorted array.
                </p>
                <p>The algorithm for Merge Sort is as follows:</p>
                <ul className="list-decimal list-inside">
                  <li>Divide the array into two halves</li>
                  <li>Recursively sort each half</li>
                  <li>Merge the two sorted halves to produce the sorted array</li>
                </ul>
              </motion.section>

              <motion.section
                className="mb-8"
                initial="hidden"
                animate="visible"
                variants={sectionVariants}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Quick Sort</h2>
                <p>
                  Quick Sort is a divide and conquer algorithm that selects a pivot element from the array, partitions the array into two subarrays based on the pivot, and then recursively sorts each subarray.
                </p>
                <p>The algorithm for Quick Sort is as follows:</p>
                <ul className="list-decimal list-inside">
                  <li>Select a pivot element from the array</li>
                  <li>Partition the array into two subarrays based on the pivot</li>
                  <li>Recursively sort each subarray</li>
                </ul>
              </motion.section>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DivideAndConquerAlgorithms;