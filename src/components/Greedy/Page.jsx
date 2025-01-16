import React, { useEffect } from "react";
import { motion } from "framer-motion";

const GreedyAlgorithms = () => {
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
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Introduction to Greedy Algorithms</h2>
                <p>
                  Greedy algorithms are a paradigm for solving optimization problems by making a sequence of choices, each of which looks best at the moment. The hope is that these local optimal choices will lead to a global optimal solution.
                </p>
                <p>
                  Greedy algorithms work by making the locally optimal choice at each stage with the hope of finding a global optimum. They are used for problems where choosing the best local option also leads to the best global solution.
                </p>
                <p>
                  Some common problems that can be solved using greedy algorithms include:
                </p>
                <ul className="list-disc list-inside">
                  <li>Activity Selection Problem</li>
                  <li>Fractional Knapsack Problem</li>
                  <li>Huffman Coding</li>
                  <li>Prim's and Kruskal's algorithms for Minimum Spanning Tree</li>
                  <li>Dijkstra's Shortest Path Algorithm</li>
                </ul>
                <img src="https://media.geeksforgeeks.org/wp-content/uploads/GreedyAlgorithms.png" alt="Greedy Algorithms" className="my-4" />
              </motion.section>
              
              <motion.section
                className="mb-8"
                initial="hidden"
                animate="visible"
                variants={sectionVariants}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Activity Selection Problem</h2>
                <p>
                  The Activity Selection Problem is a problem of selecting the maximum number of activities that don't overlap, given their start and end times.
                </p>
                <p>The algorithm for solving the Activity Selection Problem using a greedy approach is as follows:</p>
                <ul className="list-decimal list-inside">
                  <li>Sort the activities by their finish time</li>
                  <li>Select the first activity from the sorted list and add it to the solution set</li>
                  <li>For each of the remaining activities, if the start time is greater than or equal to the finish time of the last selected activity, select it</li>
                </ul>
              </motion.section>

              <motion.section
                className="mb-8"
                initial="hidden"
                animate="visible"
                variants={sectionVariants}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Fractional Knapsack Problem</h2>
                <p>
                  The Fractional Knapsack Problem is a problem in which you have to maximize the total value of items in a knapsack with a weight capacity, where you can take fractions of items.
                </p>
                <p>The algorithm for solving the Fractional Knapsack Problem using a greedy approach is as follows:</p>
                <ul className="list-decimal list-inside">
                  <li>Calculate the value-to-weight ratio for each item</li>
                  <li>Sort the items by this ratio in descending order</li>
                  <li>Take as much of the highest ratio item as possible</li>
                  <li>Repeat for the next highest ratio item until the knapsack is full</li>
                </ul>
              </motion.section>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GreedyAlgorithms;