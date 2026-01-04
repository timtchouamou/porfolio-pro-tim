import React from "react";
import "./Book.css";

function Book() {
  return (
    <div className="book__background">
      <div className="book__sizing">
        <div className="book">

          <div className="cover">
            <p>Hover for Resume Link</p>
          </div>

          <div className="page"></div>
          <div className="page"></div>
          <div className="page"></div>

          <a
            className="contentpage"
            href="assets/resumeNOV3.pdf"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img src="/assets/myresume.png" alt="my resume"></img>
          </a>

          <div className="back-cover"></div>
          
        </div>
      </div>
    </div>
  );
}

export default Book;
