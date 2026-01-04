import React from "react";
import "./Face.css";

function Face() {
    document.querySelector("body").addEventListener("mousemove", eyeball);

    function eyeball(event) {
      var eye = document.querySelectorAll('.eye');
      var scrollTop = window.scrollY;
      eye.forEach((eye) => {
          let x = (eye.getBoundingClientRect().left) + (eye.clientWidth / 2);
          let y = (eye.getBoundingClientRect().top) + (eye.clientHeight / 2);

          let radian = Math.atan2(event.pageX - x, event.pageY - y - scrollTop);
          let rot = (radian * (180 / Math.PI) * -1) + 270;
          eye.style.transform = "rotate(" + rot + "deg)";
      })
    }

  return (
    <div className="face__background">
      <div className="face__sizing">
        <div className="face">
          <div className="eyes">
            <div className="eye"></div>
            <div className="eye"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Face;
