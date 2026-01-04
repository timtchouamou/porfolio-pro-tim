import React from "react";
import "./Teacup.css";

const vapourValues: number[] = [1, 3, 5, 13, 6, 7, 10, 8, 11, 12, 2, 9, 4];

const Teacup: React.FC = () => {
  return (
    <div className="teacup">
     

      <div className="cup">
        <div className="top">
          <div className="vapour">
            {vapourValues.map((value, index) => (
              <span
                key={index}
                style={{ "--i": value } as React.CSSProperties}
              />
            ))}
          </div>

          <div className="circle">
            <div className="tea"></div>
          </div>
        </div>

        <div className="handle"></div>
        
      </div>
      
    </div>
  );
};

export default Teacup;
