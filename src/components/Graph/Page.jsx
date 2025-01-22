import React, { useEffect } from "react";
import { motion } from "framer-motion";

const GraphPage = () => {
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
                  A graph is a data structure that consists of a set of nodes (vertices) and a set of edges that connect pairs of nodes. Graphs are used to represent networks of communication, data organization, computational devices, and more.
                </p>
              </motion.section>
              
              <motion.section
                className="mb-8"
                initial="hidden"
                animate="visible"
                variants={sectionVariants}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Graph Types</h2>
                <ul className="list-disc list-inside">
                  <li><b>Undirected Graph:</b> Edges have no direction.</li>
                  <li><b>Directed Graph:</b> Edges have a direction.</li>
                  <li><b>Weighted Graph:</b> Edges have weights.</li>
                  <li><b>Unweighted Graph:</b> Edges have no weights.</li>
                </ul>
              </motion.section>
    
              <motion.section
                className="mb-8"
                initial="hidden"
                animate="visible"
                variants={sectionVariants}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Graph Operations</h2>
                <p>Common graph operations include:</p>
                <ul className="list-disc list-inside">
                  <li>Traversal (BFS, DFS)</li>
                  <li>Shortest Path (Dijkstra's, Bellman-Ford)</li>
                  <li>Minimum Spanning Tree (Kruskal's, Prim's)</li>
                </ul>
              </motion.section>
    
              <motion.section
                className="mb-8"
                initial="hidden"
                animate="visible"
                variants={sectionVariants}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Applications of Graphs</h2>
                <ul className="list-disc list-inside">
                  <li>Social Networks</li>
                  <li>Web Page Ranking</li>
                  <li>Network Routing</li>
                  <li>Recommendation Systems</li>
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
                  Graphs are a versatile data structure that can represent a wide variety of relationships and processes. Understanding graphs and their operations is essential for solving many complex problems in computer science.
                </p>
              </motion.section>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GraphPage;
