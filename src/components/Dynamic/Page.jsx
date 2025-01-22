import React, { useEffect } from "react";
import { motion } from "framer-motion";

const DynamicProgrammingAlgorithms = () => {
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
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Introduction to Dynamic Programming</h2>
                <p>
                  Dynamic programming is a method for solving complex problems by breaking them down into simpler subproblems. It is applicable when the subproblems overlap, meaning the same subproblems are solved multiple times.
                </p>
                <p>
                  Dynamic programming is used to solve optimization problems by storing the results of subproblems to avoid redundant computations. It can be applied using two main approaches: memoization (top-down) and tabulation (bottom-up).
                </p>
                <p>
                  Some common problems that can be solved using dynamic programming include:
                </p>
                <ul className="list-disc list-inside">
                  <li>Fibonacci Sequence</li>
                  <li>Knapsack Problem</li>
                  <li>Longest Common Subsequence</li>
                  <li>Matrix Chain Multiplication</li>
                  <li>Shortest Path in a Grid</li>
                </ul>
                <img src="https://media.geeksforgeeks.org/wp-content/uploads/DynamicProgramming.png" alt="Dynamic Programming" className="my-4" />
              </motion.section>
              
              <motion.section
                className="mb-8"
                initial="hidden"
                animate="visible"
                variants={sectionVariants}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Fibonacci Sequence</h2>
                <p>
                  The Fibonacci Sequence is a series of numbers where each number is the sum of the two preceding ones, usually starting with 0 and 1.
                </p>
                <p>The algorithm for solving the Fibonacci Sequence using dynamic programming is as follows:</p>
                <ul className="list-decimal list-inside">
                  <li>Initialize an array to store the Fibonacci numbers</li>
                  <li>Set the first two numbers in the array to 0 and 1</li>
                  <li>Iterate from the third position to the nth position, filling the array with the sum of the two preceding numbers</li>
                </ul>
              </motion.section>

              <motion.section
                className="mb-8"
                initial="hidden"
                animate="visible"
                variants={sectionVariants}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Knapsack Problem</h2>
                <p>
                  The Knapsack Problem is a problem in which you have to maximize the total value of items in a knapsack with a weight capacity, where you can take whole items.
                </p>
                <p>The algorithm for solving the Knapsack Problem using dynamic programming is as follows:</p>
                <ul className="list-decimal list-inside">
                  <li>Initialize a 2D array to store the maximum value for each weight capacity</li>
                  <li>Iterate through each item and each weight capacity, filling the array with the maximum value that can be obtained</li>
                  <li>Return the value in the last cell of the array, which represents the maximum value for the given weight capacity</li>
                </ul>
              </motion.section>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DynamicProgrammingAlgorithms;