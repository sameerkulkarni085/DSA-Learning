import React, { useEffect } from "react";
import { motion } from "framer-motion";

const ArrayInfo = () => {
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
                  An array is a collection of items stored at contiguous memory locations. The idea is to store multiple items of the same type together. This makes it easier to calculate the position of each element by simply adding an offset to a base value, i.e., the memory location of the first element of the array (generally denoted by the name of the array).
                </p>
              </motion.section>
              
              <motion.section
                className="mb-8"
                initial="hidden"
                animate="visible"
                variants={sectionVariants}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Array Declaration</h2>
                <p>Arrays in various programming languages can be declared as follows:</p>
                <ul className="list-disc list-inside">
                  <li>C: <code>int arr[10];</code></li>
                  <li>Java: <code>int[] arr = new int[10];</code></li>
                  <li>Python: <code>arr = [0] * 10</code></li>
                </ul>
              </motion.section>
    
              <motion.section
                className="mb-8"
                initial="hidden"
                animate="visible"
                variants={sectionVariants}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Types of Arrays</h2>
                <p>There are two types of arrays:</p>
                <ul className="list-disc list-inside">
                  <li><b>One-dimensional array:</b> Array with a single row of elements.</li>
                  <li><b>Multi-dimensional array:</b> Array with multiple rows or columns, e.g., a matrix.</li>
                </ul>
              </motion.section>
    
              <motion.section
                className="mb-8"
                initial="hidden"
                animate="visible"
                variants={sectionVariants}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Basic Operations</h2>
                <ul className="list-disc list-inside">
                  <li><b>Traversal:</b> Accessing each element of the array exactly once.</li>
                  <li><b>Insertion:</b> Adding a new element at a specified index.</li>
                  <li><b>Deletion:</b> Removing an element at a specified index.</li>
                  <li><b>Searching:</b> Finding the location of a given element in the array.</li>
                  <li><b>Sorting:</b> Rearranging elements in an array in a particular order (e.g., ascending or descending).</li>
                </ul>
              </motion.section>
    
              <motion.section
                className="mb-8"
                initial="hidden"
                animate="visible"
                variants={sectionVariants}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Advantages and Disadvantages</h2>
                <p><b>Advantages:</b></p>
                <ul className="list-disc list-inside">
                  <li>Quick access to elements using an index.</li>
                  <li>Efficient use of memory for storing data of the same type.</li>
                </ul>
                <p><b>Disadvantages:</b></p>
                <ul className="list-disc list-inside">
                  <li>Fixed size: Once the size is declared, it cannot be changed.</li>
                  <li>Insertion and deletion operations can be costly, as they may require shifting elements.</li>
                </ul>
              </motion.section>
              
              <motion.section
                className="mb-8"
                initial="hidden"
                animate="visible"
                variants={sectionVariants}
                transition={{ duration: 0.5, delay: 1.0 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Applications of Arrays</h2>
                <ul className="list-disc list-inside">
                  <li>Used as the building block for other data structures like stacks, queues, and heaps.</li>
                  <li>Used in dynamic programming to store intermediate results.</li>
                  <li>Used in databases to implement indexing for quick data retrieval.</li>
                </ul>
              </motion.section>
              
              <motion.section
                className="mb-8"
                initial="hidden"
                animate="visible"
                variants={sectionVariants}
                transition={{ duration: 0.5, delay: 1.2 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Conclusion</h2>
                <p>
                  Arrays are a fundamental data structure that provide a way to store and access data efficiently. Understanding arrays and their operations is crucial for solving many computational problems.
                </p>
              </motion.section>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArrayInfo;