import React, { useEffect } from "react";
import { motion } from "framer-motion";

const BacktrackingAlgorithms = () => {
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
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Introduction to Backtracking</h2>
                <p>
                  Backtracking is an algorithmic technique for solving problems recursively by trying to build a solution incrementally, one piece at a time, and removing those solutions that fail to satisfy the constraints of the problem at any point of time.
                </p>
                <img src="https://media.geeksforgeeks.org/wp-content/uploads/Backtracking.png" alt="Backtracking" className="my-4" />
              </motion.section>
              
              <motion.section
                className="mb-8"
                initial="hidden"
                animate="visible"
                variants={sectionVariants}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-4">N-Queens Problem</h2>
                <p>
                  The N-Queens problem is the problem of placing N chess queens on an N×N chessboard so that no two queens threaten each other.
                </p>
                <p>The algorithm for solving the N-Queens problem using backtracking is as follows:</p>
                <ul className="list-decimal list-inside">
                  <li>Start in the leftmost column</li>
                  <li>If all queens are placed, return true</li>
                  <li>Try all rows in the current column. For every row, do the following:</li>
                  <li>If the queen can be placed safely in this row, mark this cell and recursively check if placing the queen here leads to a solution.</li>
                  <li>If placing the queen in this row leads to a solution, return true.</li>
                  <li>If placing the queen doesn't lead to a solution, unmark this cell and go to the next row.</li>
                  <li>If all rows have been tried and none worked, return false to trigger backtracking.</li>
                </ul>
                <img src="https://media.geeksforgeeks.org/wp-content/uploads/NQueens.png" alt="N-Queens Problem" className="my-4" />
              </motion.section>
    
              <motion.section
                className="mb-8"
                initial="hidden"
                animate="visible"
                variants={sectionVariants}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Maze Problem</h2>
                <p>
                  The Maze problem is the problem of finding a path from the start point to the end point in a maze.
                </p>
                <p>The algorithm for solving the Maze problem using backtracking is as follows:</p>
                <ul className="list-decimal list-inside">
                  <li>If the current cell is the destination, return true</li>
                  <li>Otherwise, mark the current cell as part of the solution path</li>
                  <li>Move forward in the horizontal direction and recursively check if this move leads to a solution</li>
                  <li>If the move doesn't lead to a solution, move down and recursively check if this move leads to a solution</li>
                  <li>If none of the above moves work, unmark the current cell as part of the solution path and return false</li>
                </ul>
                <img src="https://media.geeksforgeeks.org/wp-content/uploads/MazeProblem.png" alt="Maze Problem" className="my-4" />
              </motion.section>
    
              <motion.section
                className="mb-8"
                initial="hidden"
                animate="visible"
                variants={sectionVariants}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Advantages and Disadvantages</h2>
                <p><b>Advantages of Backtracking:</b></p>
                <ul className="list-disc list-inside">
                  <li>Can solve problems that do not have a polynomial-time solution.</li>
                  <li>Efficiently finds the solution to constraint satisfaction problems.</li>
                </ul>
                <p><b>Disadvantages of Backtracking:</b></p>
                <ul className="list-disc list-inside">
                  <li>May not be efficient for all types of problems.</li>
                  <li>Can be computationally expensive for large problem sizes.</li>
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
                  <li>Used in solving puzzles like Sudoku and crosswords.</li>
                  <li>Useful in solving constraint satisfaction problems.</li>
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
                  Backtracking is a powerful technique for solving constraint satisfaction problems by exploring all possible solutions and eliminating those that fail to satisfy the constraints. Understanding backtracking is essential for solving complex problems that involve a large search space.
                </p>
              </motion.section>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BacktrackingAlgorithms;
