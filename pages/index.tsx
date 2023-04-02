import Slider from "react-slick";
import Link from "next/link";
import { Inter } from "next/font/google";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Image from "next/image";
import styles from "./Index.module.scss";
import SliderPicture from "@/components/SliderPicture/slider";
import Body from "../components/Body/ChildComponent";
import Header from "../components/Header/Header";
export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const handleInputChange = (event: any) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className={styles.main}>
      <SliderPicture />

      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      {/* <input value={searchTerm} onChange={handleInputChange} /> */}
      {/* <Header name={searchTerm} onChange={handleInputChange} /> */}
      <Body name={searchTerm} />
    </div>
  );
}
