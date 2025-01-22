import React, { useEffect } from "react";
import { motion } from "framer-motion";

const RandomizedAlgorithms = () => {
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
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Introduction to Randomized Algorithms</h2>
                <p>
                  Randomized algorithms use a degree of randomness as part of their logic. They are often simpler and faster than their deterministic counterparts, and they can provide good average-case performance even if the worst-case performance is poor.
                </p>
                <p>
                  Randomized algorithms can be classified into two main types: Las Vegas algorithms and Monte Carlo algorithms. Las Vegas algorithms always produce the correct result but have a variable runtime, while Monte Carlo algorithms have a fixed runtime but may produce an incorrect result with some probability.
                </p>
                <p>
                  Some common problems that can be solved using randomized algorithms include:
                </p>
                <ul className="list-disc list-inside">
                  <li>Randomized Quick Sort</li>
                  <li>Randomized Select</li>
                  <li>Monte Carlo Integration</li>
                  <li>Randomized Graph Algorithms</li>
                  <li>Randomized Algorithms for Linear Programming</li>
                </ul>
                <img src="https://media.geeksforgeeks.org/wp-content/uploads/RandomizedAlgorithms.png" alt="Randomized Algorithms" className="my-4" />
              </motion.section>
              
              <motion.section
                className="mb-8"
                initial="hidden"
                animate="visible"
                variants={sectionVariants}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Randomized Quick Sort</h2>
                <p>
                  Randomized Quick Sort is a variation of the Quick Sort algorithm that selects a random pivot element to partition the array, which helps to avoid the worst-case performance.
                </p>
                <p>The algorithm for Randomized Quick Sort is as follows:</p>
                <ul className="list-decimal list-inside">
                  <li>Select a random pivot element from the array</li>
                  <li>Partition the array into two subarrays based on the pivot</li>
                  <li>Recursively sort each subarray</li>
                </ul>
              </motion.section>

              <motion.section
                className="mb-8"
                initial="hidden"
                animate="visible"
                variants={sectionVariants}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Monte Carlo Integration</h2>
                <p>
                  Monte Carlo Integration is a technique for numerical integration that uses random sampling to estimate the value of an integral.
                </p>
                <p>The algorithm for Monte Carlo Integration is as follows:</p>
                <ul className="list-decimal list-inside">
                  <li>Generate random points within the domain of integration</li>
                  <li>Evaluate the integrand at each random point</li>
                  <li>Calculate the average value of the integrand and multiply by the volume of the domain</li>
                </ul>
              </motion.section>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RandomizedAlgorithms;