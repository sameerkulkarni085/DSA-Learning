import React from "react";
import { CalendarIcon } from "@heroicons/react/solid";
import { motion } from "framer-motion";

const algorithms = [
  { name: "Binary Search", link: "https://www.geeksforgeeks.org/binary-search/" },
  { name: "Merge Sort", link: "https://www.geeksforgeeks.org/merge-sort/" },
  { name: "Quick Sort", link: "https://www.geeksforgeeks.org/quick-sort/" },
  { name: "Breadth-First Search", link: "https://www.geeksforgeeks.org/breadth-first-search-or-bfs-for-a-graph/" },
  { name: "Depth-First Search", link: "https://www.geeksforgeeks.org/depth-first-search-or-dfs-for-a-graph/" },
  { name: "Dijkstra's Algorithm", link: "https://www.geeksforgeeks.org/dijkstras-shortest-path-algorithm-using-priority_queue-stl/" },
  { name: "Floyd-Warshall Algorithm", link: "https://www.geeksforgeeks.org/floyd-warshall-algorithm-dp-16/" },
  { name: "Knuth-Morris-Pratt Algorithm", link: "https://www.geeksforgeeks.org/kmp-algorithm-for-pattern-searching/" },
  { name: "Bellman-Ford Algorithm", link: "https://www.geeksforgeeks.org/bellman-ford-algorithm-dp-23/" },
  { name: "Prim's Algorithm", link: "https://www.geeksforgeeks.org/prims-minimum-spanning-tree-mst-greedy-algo-5/" },
];

const tipsAndTricks = [
  { name: "Research the Company", link: "https://www.themuse.com/advice/what-you-need-to-research-before-that-job-interview" },
  { name: "Practice Common Questions", link: "https://www.topresume.com/career-advice/top-interview-questions-and-answers" },
  { name: "Dress Appropriately", link: "https://www.monster.com/career-advice/article/how-to-dress-for-an-interview" },
  { name: "Prepare Questions", link: "https://www.thebalancecareers.com/questions-to-ask-in-a-job-interview-2061205" },
  { name: "Follow Up", link: "https://www.indeed.com/career-advice/interviewing/how-to-follow-up-after-an-interview" },
  { name: "Know Your Resume", link: "https://www.careerbuilder.com/advice/how-to-answer-the-5-trickiest-interview-questions" },
  { name: "Practice Mock Interviews", link: "https://www.indeed.com/career-advice/interviewing/mock-interview" },
  { name: "Be Punctual", link: "https://www.huffpost.com/entry/interview-punctuality_b_5685324" },
  { name: "Show Enthusiasm", link: "https://www.thebalancecareers.com/how-to-show-you-re-really-interested-in-a-job-2062204" },
  { name: "Body Language", link: "https://www.themuse.com/advice/9-body-language-tips-to-impress-at-your-next-job-interview" },
];

const TwoColumnCard = () => {
  return (
    <div>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
        className="grid grid-cols-1 gap-10 items-center md:grid-cols-2"
      >
        <motion.div
          variants={{
            offscreen: {
              y: 150,
            },
            onscreen: {
              y: 0,
              transition: {
                type: "spring",
                bounce: 0.4,
                duration: 1,
              },
            },
          }}
          whileHover={{ scale: 1.02 }}
          className="cursor-pointer bg-gray-50 px-6 py-16 rounded-3xl h-full filter shadow-md relative md:px-10 dark:bg-primary-500"
        >
          <h6 className="text-2xl font-bold text-primary mb-4 dark:text-white">
            Data Structures Interview Questions
          </h6>
          <ul className="list-disc pl-5">
            {algorithms.map((algo, index) => (
              <li key={index}>
                <a
                  href={algo.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-400 hover:underline dark:text-neutral-200"
                >
                  {algo.name}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          variants={{
            offscreen: {
              y: 300,
            },
            onscreen: {
              y: 0,
              transition: {
                type: "spring",
                bounce: 0.4,
                duration: 1.5,
              },
            },
          }}
          whileHover={{ scale: 1.02 }}
          className="bg-gray-50 px-6 py-16 rounded-3xl h-full relative filter shadow-md md:px-10 dark:bg-primary-500"
        >
          <h6 className="text-2xl font-bold text-primary mb-4 dark:text-white">
            Interview Tips and Tricks
          </h6>
          <ul className="list-disc pl-5">
            {tipsAndTricks.map((tip, index) => (
              <li key={index}>
                <a
                  href={tip.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-400 hover:underline dark:text-neutral-200"
                >
                  {tip.name}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default TwoColumnCard;
