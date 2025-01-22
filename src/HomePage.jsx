import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import TabSection from "./components/TabSection";
import TwoColumnCard from "./components/TwoColumnCard";
import Footer from "./components/Footer";
import SectionWrapper from "./components/Global/SectionWrapper";
import "./index.css";

function HomePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => setLoading(false);
    window.addEventListener("load", handleLoad);

    // Fallback to ensure loading state is set to false after a short delay
    const timer = setTimeout(() => setLoading(false), 200);  

    return () => {
      window.removeEventListener("load", handleLoad);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div>
      {loading ? (
        <div className="loading-wrapper">
          <div className="flex gap-8 items-center justify-center">
            <span className="text-white font-display md:text-7xl">Loading</span>
            <svg
              className="animate-spin -ml-1 mr-3 h-16 w-16 text-secondary fill-current"
              xmlns="http://www.w3.org/2000/svg"
              fill="current"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25 fill-current text-secondary-300"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
                fill="current"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          </div>
        </div>
      ) : (
        <>
          <NavBar />
          <HeroSection />
          <SectionWrapper id="contents" heading="Start Learning!">
            <TabSection />
          </SectionWrapper>
          <SectionWrapper id="insights" heading="Insights">
            <TwoColumnCard />
          </SectionWrapper>
          <SectionWrapper id="about" heading="About">
            <Footer />
          </SectionWrapper>
        </>
      )}
    </div>
  );
}

export default HomePage;
