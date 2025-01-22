import React from "react";
import NavBar from "../NavBar";
import Footer from "../Footer";
import SectionWrapper from "../Global/SectionWrapper";
import "../../index.css";
import MatrixPage from "./Page"; // Ensure correct import

function MatrixComponent() {
  return (
    <div>
      <>
        <NavBar />
        <SectionWrapper id="matrix-content" heading="Matrix Data Structure">
          <MatrixPage /> {/* Ensure this is the correct component */}
        </SectionWrapper>
        <SectionWrapper id="footer" heading="About">
          <Footer />
        </SectionWrapper>
      </>
    </div>
  );
}

export default MatrixComponent;
