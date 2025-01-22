import React, { useEffect } from "react";
import { motion } from "framer-motion";

const SortingAlgorithms = () => {
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
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Introduction to Sorting Algorithms</h2>
                <p>
                  Sorting algorithms are used to rearrange a given array or list elements according to a comparison operator on the elements. The comparison operator is used to decide the new order of elements in the respective data structure.
                </p>
                <img src="https://media.geeksforgeeks.org/wp-content/uploads/20200713155814/Sorting.png" alt="Sorting Algorithms" className="my-4" />
              </motion.section>
              
              <motion.section
                className="mb-8"
                initial="hidden"
                animate="visible"
                variants={sectionVariants}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Bubble Sort</h2>
                <p>
                  Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in the wrong order. This algorithm is not suitable for large data sets as its average and worst-case time complexity is quite high.
                </p>
                <p>The algorithm for bubble sort is as follows:</p>
                <ul className="list-decimal list-inside">
                  <li>Compare each pair of adjacent elements from the beginning of an array and, if they are in the wrong order, swap them.</li>
                  <li>Repeat the process for each pair of adjacent elements, starting with the first pair and ending with the last pair.</li>
                  <li>Continue the process until no swaps are needed.</li>
                </ul>
                <img src="https://media.geeksforgeeks.org/wp-content/uploads/20200713155814/BubbleSort.png" alt="Bubble Sort" className="my-4" />
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
                  Quick Sort is a highly efficient sorting algorithm and is based on partitioning of an array of data into smaller arrays. A large array is partitioned into two arrays, one of which holds values smaller than the specified value, say pivot, based on which the partition is made and another array holds values greater than the pivot value.
                </p>
                <p>The algorithm for quick sort is as follows:</p>
                <ul className="list-decimal list-inside">
                  <li>Pick an element as pivot.</li>
                  <li>Partition the array around the pivot.</li>
                  <li>Recursively apply the above steps to the sub-array of elements with smaller values and the sub-array of elements with greater values.</li>
                </ul>
                <img src="https://media.geeksforgeeks.org/wp-content/uploads/20200713155814/QuickSort.png" alt="Quick Sort" className="my-4" />
              </motion.section>
    
              <motion.section
                className="mb-8"
                initial="hidden"
                animate="visible"
                variants={sectionVariants}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Advantages and Disadvantages</h2>
                <p><b>Bubble Sort:</b></p>
                <ul className="list-disc list-inside">
                  <li>Simple to implement and understand.</li>
                  <li>Not suitable for large datasets due to its O(n^2) time complexity.</li>
                </ul>
                <p><b>Quick Sort:</b></p>
                <ul className="list-disc list-inside">
                  <li>Highly efficient with an average time complexity of O(n log n).</li>
                  <li>Can be implemented in-place, requiring only a small amount of additional memory.</li>
                  <li>Worst-case time complexity is O(n^2), but this can be mitigated with good pivot selection.</li>
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
                  <li>Bubble Sort is used for educational purposes to help students understand the concept of sorting.</li>
                  <li>Quick Sort is used in various applications where efficient sorting is required, such as in databases and search algorithms.</li>
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
                  Sorting algorithms are essential for organizing data efficiently. Bubble Sort and Quick Sort are two fundamental algorithms that provide a basis for understanding more advanced sorting techniques.
                </p>
              </motion.section>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SortingAlgorithms;