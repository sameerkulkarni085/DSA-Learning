import React from "react";
import NavBar from "../NavBar";
import Footer from "../Footer";
import SectionWrapper from "../Global/SectionWrapper";
import "../../index.css";
import StackInfo from "./Page"; // Ensure correct import

function StackComponent() {
  return (
    <div>
      <>
        <NavBar />
        <SectionWrapper id="stack-content" heading="Stack Data Structure">
          <StackInfo /> {/* Ensure this is the correct component */}
        </SectionWrapper>
        <SectionWrapper id="footer" heading="About">
          <Footer />
        </SectionWrapper>
      </>
    </div>
  );
}

export default StackComponent;
