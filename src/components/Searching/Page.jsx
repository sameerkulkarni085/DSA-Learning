import React, { useEffect } from "react";
import { motion } from "framer-motion";

const SearchingAlgorithms = () => {
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
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Introduction to Searching Algorithms</h2>
                <p>
                  Searching algorithms are designed to retrieve an element from any data structure where it is stored. Based on the type of search operation, these algorithms are generally classified into two categories: Sequential Search and Interval Search.
                </p>
                <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/search-algorithm-763214.png?f=webp&w=256" alt="Searching Algorithms" className="my-4" />
              </motion.section>
              
              <motion.section
                className="mb-8"
                initial="hidden"
                animate="visible"
                variants={sectionVariants}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Linear Search</h2>
                <p>
                  Linear search is a simple searching algorithm that checks every element in a list sequentially until the desired element is found or the list ends. It is the simplest search algorithm and is also known as a sequential search.
                </p>
                <p>The algorithm for linear search is as follows:</p>
                <ul className="list-decimal list-inside">
                  <li>Start from the leftmost element of the array and one by one compare the target element with each element of the array.</li>
                  <li>If the target element matches with an element, return the index.</li>
                  <li>If the target element does not match with any of the elements, return -1.</li>
                </ul>
                <img src="data:image/png;base64,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" alt="Linear Search" className="my-4" />
              </motion.section>
    
              <motion.section
                className="mb-8"
                initial="hidden"
                animate="visible"
                variants={sectionVariants}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Binary Search</h2>
                <p>
                  Binary search is a more efficient algorithm that works on sorted arrays. It divides the array into two halves and repeatedly reduces the search interval by half until the target element is found or the interval is empty.
                </p>
                <p>The algorithm for binary search is as follows:</p>
                <ul className="list-decimal list-inside">
                  <li>Compare the target element with the middle element of the array.</li>
                  <li>If the target element matches the middle element, return the index.</li>
                  <li>If the target element is smaller than the middle element, repeat the search on the left half of the array.</li>
                  <li>If the target element is larger than the middle element, repeat the search on the right half of the array.</li>
                  <li>If the search interval is empty, return -1.</li>
                </ul>
                <img src="https://miro.medium.com/v2/resize:fit:1200/1*M8nxu1oYQy2vpWRjlVdXNA.png" alt="Binary Search" className="my-4" />
              </motion.section>
    
              <motion.section
                className="mb-8"
                initial="hidden"
                animate="visible"
                variants={sectionVariants}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Advantages and Disadvantages</h2>
                <p><b>Linear Search:</b></p>
                <ul className="list-disc list-inside">
                  <li>Simple to implement and understand.</li>
                  <li>Does not require the array to be sorted.</li>
                  <li>Can be used on both arrays and linked lists.</li>
                  <li>Not suitable for large datasets due to its O(n) time complexity.</li>
                  <li>Less efficient compared to other search algorithms like binary search.</li>
                </ul>
                <p><b>Binary Search:</b></p>
                <ul className="list-disc list-inside">
                  <li>More efficient than linear search with a time complexity of O(log n).</li>
                  <li>Requires the array to be sorted.</li>
                  <li>Not suitable for linked lists due to its need for random access.</li>
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
                  <li>Linear search is used when the dataset is small or unsorted.</li>
                  <li>Binary search is used when the dataset is large and sorted.</li>
                  <li>Both algorithms are fundamental for understanding more complex search algorithms and data structures.</li>
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
                  Searching algorithms are essential for retrieving data efficiently. Linear search and binary search are two fundamental algorithms that provide a basis for understanding more advanced search techniques.
                </p>
              </motion.section>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchingAlgorithms;