import React from "react";
import NavBar from "../NavBar";
import Footer from "../Footer";
import SectionWrapper from "../Global/SectionWrapper";
import "../../index.css";
import TreeInfo from "./Page"; // Ensure correct import

function TreeComponent() {
  return (
    <div>
      <>
        <NavBar />
        <SectionWrapper id="tree-content" heading="Tree Data Structure">
          <TreeInfo /> {/* Ensure this is the correct component */}
        </SectionWrapper>
        <SectionWrapper id="footer" heading="About">
          <Footer />
        </SectionWrapper>
      </>
    </div>
  );
}

export default TreeComponent;
