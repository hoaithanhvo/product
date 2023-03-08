import React from "react";
import Typical from "react-typical";

function sliderText() {
  return (
    <div>
      {/* sliderText */}
      <p>
        Tôi là{" "}
        <Typical
          loop={Infinity}
          steps={["developer", 1500, "designer", 1500, "Youtube", 1500]}
          wrapper="b"
        />
      </p>
    </div>
  );
}

export default sliderText;
