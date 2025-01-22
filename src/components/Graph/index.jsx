import React from "react";
import NavBar from "../NavBar";
import Footer from "../Footer";
import SectionWrapper from "../Global/SectionWrapper";
import "../../index.css";
import GraphPage from "./Page"; // Ensure correct import

function GraphComponent() {
  return (
    <div>
      <>
        <NavBar />
        <SectionWrapper id="graph-content" heading="Graph Data Structure">
          <GraphPage /> {/* Ensure this is the correct component */}
        </SectionWrapper>
        <SectionWrapper id="footer" heading="About">
          <Footer />
        </SectionWrapper>
      </>
    </div>
  );
}

export default GraphComponent;
