import React from "react";
import "./Loading.css";

/* Create an array of numbers for the spans */
const spanValues = Array.from({ length: 20 }, (_, i) => i + 1);

const Loading: React.FC = () => {
  return (
    <div className="loading__background">
      <div className="loading__sizing">
        <div className="loading">
          {spanValues.map((value) => (
            <span
              key={value}
              style={{ "--i": value } as React.CSSProperties}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Loading;
