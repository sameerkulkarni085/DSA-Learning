import React from "react";
import NavBar from "../NavBar";
import Footer from "../Footer";
import SectionWrapper from "../Global/SectionWrapper";
import "../../index.css";
import HeapInfo from "./Page"; // Ensure correct import

function HeapComponent() {
  return (
    <div>
      <>
        <NavBar />
        <SectionWrapper id="heap-content" heading="Heap Data Structure">
          <HeapInfo /> {/* Ensure this is the correct component */}
        </SectionWrapper>
        <SectionWrapper id="footer" heading="About">
          <Footer />
        </SectionWrapper>
      </>
    </div>
  );
}

export default HeapComponent;
