import React from "react";
import NavBar from "../NavBar";
import Footer from "../Footer";
import SectionWrapper from "../Global/SectionWrapper";
import "../../index.css";
import HashInfo from "./Page"; // Ensure correct import

function HashComponent() {
  return (
    <div>
      <>
        <NavBar />
        <SectionWrapper id="hash-content" heading="Hash Data Structure">
          <HashInfo /> {/* Ensure this is the correct component */}
        </SectionWrapper>
        <SectionWrapper id="footer" heading="About">
          <Footer />
        </SectionWrapper>
      </>
    </div>
  );
}

export default HashComponent;
