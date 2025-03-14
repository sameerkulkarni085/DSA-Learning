import React, { useEffect } from "react";
import { motion } from "framer-motion";

const LinkedListInfo = () => {
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
                  A linked list is a linear data structure where elements are not stored at contiguous memory locations. Instead, each element (node) contains a reference (link) to the next element in the sequence.
                </p>
              </motion.section>
              
              <motion.section
                className="mb-8"
                initial="hidden"
                animate="visible"
                variants={sectionVariants}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Types of Linked Lists</h2>
                <p>There are several types of linked lists:</p>
                <ul className="list-disc list-inside">
                  <li><b>Singly Linked List:</b> Each node points to the next node in the sequence.</li>
                  <li><b>Doubly Linked List:</b> Each node points to both the next and the previous node.</li>
                  <li><b>Circular Linked List:</b> The last node points back to the first node, forming a circle.</li>
                </ul>
              </motion.section>
    
              <motion.section
                className="mb-8"
                initial="hidden"
                animate="visible"
                variants={sectionVariants}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Basic Operations</h2>
                <ul className="list-disc list-inside">
                  <li><b>Traversal:</b> Accessing each element of the linked list sequentially.</li>
                  <li><b>Insertion:</b> Adding a new element at a specified position.</li>
                  <li><b>Deletion:</b> Removing an element from a specified position.</li>
                  <li><b>Searching:</b> Finding the location of a given element in the linked list.</li>
                </ul>
              </motion.section>
    
              <motion.section
                className="mb-8"
                initial="hidden"
                animate="visible"
                variants={sectionVariants}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Advantages and Disadvantages</h2>
                <p><b>Advantages:</b></p>
                <ul className="list-disc list-inside">
                  <li>Dynamic size: Can grow or shrink in size as needed.</li>
                  <li>Efficient insertion and deletion operations.</li>
                </ul>
                <p><b>Disadvantages:</b></p>
                <ul className="list-disc list-inside">
                  <li>Memory overhead: Requires extra memory for storing references.</li>
                  <li>Sequential access: Cannot directly access elements by index.</li>
                </ul>
              </motion.section>
              
              <motion.section
                className="mb-8"
                initial="hidden"
                animate="visible"
                variants={sectionVariants}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Applications of Linked Lists</h2>
                <ul className="list-disc list-inside">
                  <li>Used in implementing other data structures like stacks, queues, and graphs.</li>
                  <li>Used in dynamic memory allocation.</li>
                  <li>Used in applications where frequent insertion and deletion operations are required.</li>
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
                  Linked lists are a versatile data structure that provide efficient insertion and deletion operations. Understanding linked lists and their operations is essential for solving many computational problems.
                </p>
              </motion.section>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LinkedListInfo;