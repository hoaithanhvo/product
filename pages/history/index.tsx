import Slider from "react-slick";
import Link from "next/link";
import { Inter } from "next/font/google";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Image from "next/image";
import styles from "./history.module.scss";
import SliderPicture from "@/components/SliderPicture/slider";
export default function Home() {
  const [photo, setPhotos] = useState<
    { id: number; url: string; title: string }[] | null
  >(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos?id_gte=1&id_lte=51")
      .then((response) => response.json())
      .then((data) => {
        setPhotos(data);
      })
      .catch((error) => console.error(error));
  }, []);

  if (photo !== null) {
    console.log(photo[0].id);
  }

  return (
    <div>
      <div className={styles.api}>
        {photo?.map((photo1) => (
          <div key={photo1.id} className={styles.api_id}>
            <p>ID: {photo1.id} </p>
            <img src={photo1.url} alt={photo1.title} width={50} />
            <p>{photo1.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
