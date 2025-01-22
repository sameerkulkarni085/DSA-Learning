import React from "react";
import NavBar from "../NavBar";
import Footer from "../Footer";
import SectionWrapper from "../Global/SectionWrapper";
import "../../index.css";
import QueueInfo from "./Page"; // Ensure correct import

function QueueComponent() {
  return (
    <div>
      <>
        <NavBar />
        <SectionWrapper id="queue-content" heading="Queue Data Structure">
          <QueueInfo /> {/* Ensure this is the correct component */}
        </SectionWrapper>
        <SectionWrapper id="footer" heading="About">
          <Footer />
        </SectionWrapper>
      </>
    </div>
  );
}

export default QueueComponent;
