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
          steps={["developer", 1000, "designer", 1000, "Youtube", 1000]}
          wrapper="b"
        />
      </p>
    </div>
  );
}

export default sliderText;
