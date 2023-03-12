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
          steps={["developer", 5000, "designer", 5000, "Youtube", 5000]}
          wrapper="b"
        />
      </p>
    </div>
  );
}

export default sliderText;
