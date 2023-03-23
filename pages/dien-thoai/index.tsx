import React from "react";
import styles from "./index.module.scss";
import Image from "next/image";

const array_picture = [
  "Iphone 11",
  "Iphone 11",
  "Iphone 11",
  "Iphone 11",
  "Iphone 11",
  "Iphone 11",
];
function index() {
  return (
    <div className={styles.main}>
      <p className={styles.picture}>{array_picture.map((i) => i)}</p>
    </div>
  );
}

export default index;
