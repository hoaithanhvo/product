import React from "react";
import Typical from "react-typical";
import styles from "./sliderText.module.scss";
function TypicalExample() {
  const steps = ["developer ", 1000, "Photograper ", 1000, "Youtuber", 1000];
  return (
    <div>
      <h1>Hi Im VO HOAI THANH</h1>
      <p>
        I'm a {""}
        <Typical loop={Infinity} steps={steps} wrapper="b" />
      </p>
    </div>
  );
}

export default TypicalExample;
