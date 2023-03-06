import React from "react";
import Typical from "react-typical";

function sliderText() {
  return (
    <div>
      sliderText
      <div>
        <Typical
          steps={["Hello", 1000, "Hello, World!", 500]}
          loop={Infinity}
          wrapper="p"
        />
      </div>
    </div>
  );
}

export default sliderText;
