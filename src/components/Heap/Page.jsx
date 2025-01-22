import React, { useEffect } from "react";
import { motion } from "framer-motion";

const HeapInfo = () => {
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
                  A heap is a special tree-based data structure that satisfies the heap property. In a max heap, for any given node I, the value of I is greater than or equal to the values of its children. In a min heap, the value of I is less than or equal to the values of its children.
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
                  <li><b>Insert:</b> Adding a node to the heap.</li>
                  <li><b>Delete:</b> Removing the root node from the heap.</li>
                  <li><b>Heapify:</b> Ensuring the heap property is maintained.</li>
                  <li><b>Peek:</b> Viewing the root node without removing it.</li>
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
                  <li>Efficient for priority queue operations.</li>
                  <li>Supports efficient sorting algorithms.</li>
                </ul>
                <p><b>Disadvantages:</b></p>
                <ul className="list-disc list-inside">
                  <li>Complex to implement and manage.</li>
                  <li>Requires additional memory for pointers.</li>
                </ul>
              </motion.section>
              
              <motion.section
                className="mb-8"
                initial="hidden"
                animate="visible"
                variants={sectionVariants}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Applications of Heaps</h2>
                <ul className="list-disc list-inside">
                  <li>Used in priority queue implementations.</li>
                  <li>Used in heap sort algorithm.</li>
                  <li>Used in graph algorithms like Dijkstra's shortest path.</li>
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
                  Heaps are a fundamental data structure that provide a way to manage data with priority. Understanding heaps and their operations is crucial for many programming tasks.
                </p>
              </motion.section>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeapInfo;
