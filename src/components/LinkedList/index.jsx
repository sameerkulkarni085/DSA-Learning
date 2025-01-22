import React from "react";
import NavBar from "../NavBar";
import Footer from "../Footer";
import SectionWrapper from "../Global/SectionWrapper"; // Import SectionWrapper
import "../../index.css";
import LinkedListInfo from "../LinkedList/Page"; // Update import statement

function LinkedListComponent() {
  return (
    <div>
      <>
        <NavBar />
        <SectionWrapper id="linkedlist-content" heading="Linked List Data Structure">
          <LinkedListInfo /> {/* Ensure this is the correct component */}
        </SectionWrapper>
        <SectionWrapper id="footer" heading="About">
          <Footer />
        </SectionWrapper>
      </>
    </div>
  );
}

export default LinkedListComponent;
