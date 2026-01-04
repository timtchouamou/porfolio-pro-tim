import React, { useEffect, useRef } from "react";
import "./Clock.css";

const Clock: React.FC = () => {
  const hrRef = useRef<HTMLDivElement | null>(null);
  const mnRef = useRef<HTMLDivElement | null>(null);
  const scRef = useRef<HTMLDivElement | null>(null);

  const deg = 6;

  useEffect(() => {
    const interval = setInterval(() => {
      const day = new Date();

      const hh = day.getHours() * 30;
      const mm = day.getMinutes() * deg;
      const ss = day.getSeconds() * deg;

      if (hrRef.current) {
        hrRef.current.style.transform = `rotateZ(${hh + mm / 12}deg)`;
      }

      if (mnRef.current) {
        mnRef.current.style.transform = `rotateZ(${mm}deg)`;
      }

      if (scRef.current) {
        scRef.current.style.transform = `rotateZ(${ss}deg)`;
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="clock__background">
      <div className="clock__sizing">
        <div className="clock">
          <div className="hour">
            <div className="hr" ref={hrRef}></div>
          </div>
          <div className="min">
            <div className="mn" ref={mnRef}></div>
          </div>
          <div className="sec">
            <div className="sc" ref={scRef}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clock;
