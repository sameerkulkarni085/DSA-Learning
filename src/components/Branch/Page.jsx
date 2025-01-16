import React, { useEffect } from "react";
import { motion } from "framer-motion";

const BranchAndBoundAlgorithms = () => {
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
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Introduction to Branch and Bound Algorithms</h2>
                <p>
                  Branch and bound is an algorithm design paradigm for solving combinatorial optimization problems. It systematically explores the solution space by dividing it into smaller subproblems (branching) and calculating bounds on the best possible solution within each subproblem.
                </p>
                <p>
                  This approach is particularly useful for problems where the solution space is large and exhaustive search is impractical. It is often used in algorithms for solving problems like the traveling salesman problem, knapsack problem, and integer programming.
                </p>
                <p>
                  Some common problems that can be solved using branch and bound algorithms include:
                </p>
                <ul className="list-disc list-inside">
                  <li>Traveling Salesman Problem</li>
                  <li>Knapsack Problem</li>
                  <li>Job Scheduling Problem</li>
                  <li>Integer Programming</li>
                  <li>Maximum Clique Problem</li>
                </ul>
                <img src="https://media.geeksforgeeks.org/wp-content/uploads/BranchAndBound.png" alt="Branch and Bound" className="my-4" />
              </motion.section>
              
              <motion.section
                className="mb-8"
                initial="hidden"
                animate="visible"
                variants={sectionVariants}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Traveling Salesman Problem</h2>
                <p>
                  The Traveling Salesman Problem (TSP) is a problem in which a salesman must visit a set of cities exactly once and return to the starting city, minimizing the total distance traveled.
                </p>
                <p>The algorithm for solving the TSP using branch and bound is as follows:</p>
                <ul className="list-decimal list-inside">
                  <li>Start with the initial city and calculate the lower bound on the total distance</li>
                  <li>Branch by exploring all possible cities to visit next</li>
                  <li>Calculate the lower bound for each branch and prune branches that exceed the current best solution</li>
                  <li>Repeat until all cities are visited and the optimal solution is found</li>
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
                <p>The algorithm for solving the Knapsack Problem using branch and bound is as follows:</p>
                <ul className="list-decimal list-inside">
                  <li>Start with an empty knapsack and calculate the upper bound on the total value</li>
                  <li>Branch by including or excluding each item</li>
                  <li>Calculate the upper bound for each branch and prune branches that cannot exceed the current best solution</li>
                  <li>Repeat until all items are considered and the optimal solution is found</li>
                </ul>
              </motion.section>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BranchAndBoundAlgorithms;