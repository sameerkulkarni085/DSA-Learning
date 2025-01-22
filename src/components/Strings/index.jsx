import React from "react";
import NavBar from "../NavBar";
import Footer from "../Footer";
import SectionWrapper from "../Global/SectionWrapper";
import "../../index.css";
import Strings from "../Strings/Page"; // Ensure correct import

function StringComponent() {
  return (
    <div>
      <>
        <NavBar />
        <SectionWrapper id="string-content" heading="String Data Structure">
          <Strings /> {/* Ensure this is the correct component */}
        </SectionWrapper>
        <SectionWrapper id="footer" heading="About">
          <Footer />
        </SectionWrapper>
      </>
    </div>
  );
}

export default StringComponent;
