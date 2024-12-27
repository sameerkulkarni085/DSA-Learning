import React from "react";
import { motion } from "framer-motion";

const ArrayInfo = () => {
  return (
    <section id="home" className="bg-white dark:bg-primary">
      <div className="container relative">
        <div className="flex items-center flex-col">
          <div className="flex flex-col items-center justify-center min-h-[650px] md:min-h-[650px]">
            
            <div className="container relative text-white">
              <section className="mb-8">  {/* Added margin-bottom */}
                <h2 className="text-2xl md:text-3xl">Introduction</h2>
                <p>
                  An array is a collection of items stored at contiguous memory locations. The idea is to store multiple items of the same type together. This makes it easier to calculate the position of each element by simply adding an offset to a base value, i.e., the memory location of the first element of the array (generally denoted by the name of the array).
                </p>
              </section>
              
              <section className="mb-8">  {/* Added margin-bottom */}
                <h2 className="text-2xl md:text-3xl">Array Declaration</h2>
                <p>Arrays in various programming languages can be declared as follows:</p>
                <ul>
                  <li>C: <code>int arr[10];</code></li>
                  <li>Java: <code>int[] arr = new int[10];</code></li>
                  <li>Python: <code>arr = [0] * 10</code></li>
                </ul>
              </section>
    
              <section className="mb-8">  {/* Added margin-bottom */}
                <h2 className="text-2xl md:text-3xl">Types of Arrays</h2>
                <p>There are two types of arrays:</p>
                <ul>
                  <li><b>One-dimensional array:</b> Array with a single row of elements.</li>
                  <li><b>Multi-dimensional array:</b> Array with multiple rows or columns, e.g., a matrix.</li>
                </ul>
              </section>
    
              <section className="mb-8">  {/* Added margin-bottom */}
                <h2 className="text-2xl md:text-3xl">Basic Operations</h2>
                <ul>
                  <li><b>Traversal:</b> Accessing each element of the array exactly once.</li>
                  <li><b>Insertion:</b> Adding a new element at a specified index.</li>
                  <li><b>Deletion:</b> Removing an element at a specified index.</li>
                  <li><b>Searching:</b> Finding the location of a given element in the array.</li>
                  <li><b>Sorting:</b> Rearranging elements in an array in a particular order (e.g., ascending or descending).</li>
                </ul>
              </section>
    
              <section className="mb-8">  {/* Added margin-bottom */}
                <h2 className="text-2xl md:text-3xl">Advantages and Disadvantages</h2>
                <p><b>Advantages:</b></p>
                <ul>
                  <li>Quick access to elements using an index.</li>
                  <li>Efficient use of memory for storing data of the same type.</li>
                </ul>
                <p><b>Disadvantages:</b></p>
                <ul>
                  <li>Fixed size: Once the size is declared, it cannot be changed.</li>
                  <li>Insertion and deletion operations can be costly, as they may require shifting elements.</li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArrayInfo;
