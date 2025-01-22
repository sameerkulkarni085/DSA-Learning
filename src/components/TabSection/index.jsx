import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "react-tabs/style/react-tabs.css";
import images from "../../constants/image";
import { motion } from "framer-motion";

const logos = [
  {
    image: images.arraylogo,
    title: "Arrays",
    link: "/array"
  },
  {
    image: images.stringslogo,
    title: "Strings",
    link: "/string" // Update link for strings
  },
  {
    image: images.linkedlistslogo,
    title: "Linked List",
    link: "/linkedlist"
  },
  {
    image: images.stackslogo,
    title: "Stack",
    link: "/stack"
  },
  {
    image: images.queueslogo,
    title: "Queues",
    link: "https://www.google.com/search?q=Queues"
  },
  {
    image: images.treeslogo,
    title: "Trees",
    link: "https://www.google.com/search?q=Trees"
  },
  {
    image: images.heapslogo,
    title: "Heap",
    link: "https://www.google.com/search?q=Heap"
  },
  {
    image: images.hashlogo,
    title: "Hash",
    link: "https://www.google.com/search?q=Hash"
  },
  {
    image: images.graphslogo,
    title: "Graph",
    link: "https://www.google.com/search?q=Graph"
  },
  {
    image: images.matrixlogo,
    title: "Matrix",
    link: "https://www.google.com/search?q=Matrix"
  },
];

const logos2 = [
  {
    image: images.searchlogo,
    title: "Searching",
    link: "/searching"
  },
  {
    image: images.sortlogo,
    title: "Sorting",
    link: "/sorting"
  },
  {
    image: images.recursionlogo,
    title: "Recursion",
    link: "/recursion"
  },
  {
    image: images.backtrackinglogo,
    title: "Backtracking",
    link: "/backtracking"
  },
  {
    image: images.greedylogo,
    title: "Greedy",
    link: "/greedy"
  },
  {
    image: images.dynamicprogramminglogo,
    title: "Dynamic Programming",
    link: "/dynamic"
  },
  {
    image: images.patternsearching,
    title: "Pattern Searching",
    link: "/pattern"
  },
  {
    image: images.dividelogo,
    title: "Divide and Conquer",
    link: "/divide"
  },
  {
    image: images.branchlogo,
    title: "Branch and Bound",
    link: "/branch"
  },
  {
    image: images.randomlogo,
    title: "Randomized",
    link: "/random"
  },
];

const TabSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      <Tabs defaultIndex={0}>
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "linear", duration: 0.5 }}
        >
          <TabList className="bg-primary flex flex-col justify-center items-center mx-auto rounded-xl mb-16 w-full dark:bg-primary-500 md:w-max md:flex-row">
            <Tab className="text-white w-full text-center cursor-pointer px-8 py-4 font-semibold focus-within:bg-secondary-400 md:w-max dark:focus-within:bg-secondary rounded-t-xl md:rounded-l-xl md:rounded-tr-none">
              Data Structures
            </Tab>
            <Tab className="text-white w-full text-center cursor-pointer  px-8 py-4 font-semibold focus-within:bg-secondary-400 md:w-max dark:focus-within:bg-secondary rounded-t-none rounded-b-xl md:rounded-l-none md:rounded-r-xl">
              Algorithms
            </Tab>
          </TabList>
        </motion.div>
        <TabPanel className="flex gap-20 items-center flex-col-reverse md:flex-row-reverse transition-all">
          <div className="w-full text-center text-white max-w-3xl mx-auto md:h-[550px]">
            <motion.div
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "linear", duration: 0.5 }}
              className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4 lg:mt-8"
            >
              {logos.map((logo, index) => (
                logo.link.startsWith("/") ? (
                  <Link
                    key={index}
                    to={logo.link}
                    className="flex flex-col justify-center items-center gap-4 py-8 px-8 bg-gray-50 rounded-xl filter shadow-md dark:bg-primary-400"
                  >
                    <img
                      className="h-14 object-contain dark:filter dark:invert"
                      src={logo.image}
                      alt={logo.title}
                      loading="lazy"
                      width={56}
                      height={56}
                    />
                    <h6 className="text-xl font-semibold text-primary dark:text-white">
                      {logo.title}
                    </h6>
                  </Link>
                ) : (
                  <a
                    key={index}
                    href={logo.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col justify-center items-center gap-4 py-8 px-8 bg-gray-50 rounded-xl filter shadow-md dark:bg-primary-400"
                  >
                    <img
                      className="h-14 object-contain dark:filter dark:invert"
                      src={logo.image}
                      alt={logo.title}
                      loading="lazy"
                      width={56}
                      height={56}
                    />
                    <h6 className="text-xl font-semibold text-primary dark:text-white">
                      {logo.title}
                    </h6>
                  </a>
                )
              ))}
            </motion.div>
          </div>
        </TabPanel>
        <TabPanel className="flex gap-20 items-center flex-col md:flex-row-reverse transition-all">
          <div className="w-full text-center text-white max-w-3xl mx-auto md:h-[550px]">
            <motion.div
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "linear", duration: 0.5 }}
              className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4 lg:mt-8"
            >
              {logos2.map((logo, index) => (
                <a
                  key={index}
                  href={logo.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col justify-center items-center gap-4 py-8 px-8 bg-gray-50 rounded-xl filter shadow-md dark:bg-primary-400"
                >
                  <img
                    className="h-14 object-contain dark:filter dark:invert"
                    src={logo.image}
                    alt={logo.title}
                    loading="lazy"
                    width={56}
                    height={56}
                  />
                  <h6 className="text-xl font-semibold text-primary dark:text-white">
                    {logo.title}
                  </h6>
                </a>
              ))}
            </motion.div>
          </div>
        </TabPanel>
      </Tabs>
    </>
  );
};

export default TabSection;
