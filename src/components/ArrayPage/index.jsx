import React, { useState, useEffect } from "react";
import NavBar from "../NavBar";
import Footer from "../Footer";
import SectionWrapper from "../Global/SectionWrapper"; // Import SectionWrapper
import "../../index.css";
import ArrayPage from "../ArrayPage/Page";

function Array() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => setLoading(false);
    window.addEventListener("load", handleLoad);
    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return (
    <div>
      
        <>
          <NavBar />
          <SectionWrapper id="array-content" heading="Array Data Structure">
            <ArrayPage />
          </SectionWrapper>
          <SectionWrapper id="footer" heading="About">
            <Footer />
          </SectionWrapper>
        </>
      
    </div>
  );
}

export default Array;
