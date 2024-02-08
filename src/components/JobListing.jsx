import React, { useEffect, useState } from "react";

const JobListing = () => {
  // State to hold the innerHTML content
  const [innerHtmlContent, setInnerHtmlContent] = useState("");

  useEffect(() => {
    // Access the #khembedjobs container
    const khembedjobsContainer = document.getElementById("khembedjobs");
    if (khembedjobsContainer) {
      // Set the innerHTML content to state
      setInnerHtmlContent(khembedjobsContainer.innerHTML);
    }
    const footer = document.getElementsByClassName(
      "kh-text-center kh-py-3 kh-footer-content kh-w-100 kh-d-flex kh-align-items-center kh-justify-content-center"
    );
    footer[0].style.visibility = "hidden";
    // footer[0].hidden = true;
    // footer[1].hidden = true;
    console.log("Footer ====>", footer);
  }, []);

  return (
    <>
      <section className="uk-section">
        <div className="container">
          <p className="jobsFoundTitle">Latest Job Openings</p>
        </div>
      </section>

      {/* Display the innerHTML content */}
      <section className="uk-section">
        <div
          className="container-joblist"
          style={{ marginLeft: "0vw", width: "80vw" }}
        >
          <div dangerouslySetInnerHTML={{ __html: innerHtmlContent }} />
        </div>
      </section>
    </>
  );
};

export default JobListing;
