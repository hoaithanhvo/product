import Slider from "react-slick";
import Link from "next/link";
import { Inter } from "next/font/google";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Image from "next/image";
import styles from "./history.module.scss";
import SliderPicture from "@/components/SliderPicture/slider";
export default function Home() {
  // const [photo, setPhotos] = useState<
  //   { id: number; url: string; title: string }[] | null
  // >(null);

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/photos?id_gte=1&id_lte=51")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setPhotos(data);
  //     })
  //     .catch((error) => console.error(error));
  // }, []);

  // if (photo !== null) {
  //   console.log(photo[0].id);
  // }

  return (
    // <div>
    //   <div className={styles.api}>
    //     {photo?.map((photo1) => (
    //       <div key={photo1.id} className={styles.api_id}>
    //         <p>ID: {photo1.id} </p>
    //         <img src={photo1.url} alt={photo1.title} width={50} />
    //         <p>{photo1.title}</p>
    //       </div>
    //     ))}
    //   </div>
    // </div>
    <div className={styles.api}>
      <div>
        <p>
          Anh <b>Võ Hoài Thanh</b>| <a href=""> Đăng xuất </a>
        </p>
        <p>Đơn hàng đã mua</p>
        <p>Thông tin và số địa chỉ</p>
      </div>
      <div>
        {" "}
        <p>
          <b> Đơn hàng đã mua </b>
          Từ 24-03/2021 - 24/03/2023
        </p>
        <div className={styles.item}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p>
              <b>Đơn hàng</b> #5966590 <b>Giao trước 21:00 - Thứ Tư (15/02)</b>
            </p>
            <p>Đã nhận hàng</p>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ display: "flex" }}>
              <img
                width={60}
                height={60}
                src="https://cdn.tgdd.vn/Products/Images/5205/233629/delites-ks-k530b19-1-200x200.jpg"
                alt=""
              />
              <div style={{ marginLeft: "5px" }}>
                <p>Bình giữ nhiệt Inox 780ml Delites KS</p>
                <p>K530B19 xám</p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <p>Tổng tiền: 108.000đ</p>
              <p className={styles.input}> Xem chi tiểt</p>
            </div>
          </div>
        </div>
        <div className={styles.item}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p>
              <b>Đơn hàng</b> #5966590 <b>Giao trước 21:00 - Thứ Tư (15/02)</b>
            </p>
            <p>Đã nhận hàng</p>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ display: "flex" }}>
              <img
                width={60}
                height={60}
                src="https://cdn.tgdd.vn/Products/Images/5205/233629/delites-ks-k530b19-1-200x200.jpg"
                alt=""
              />
              <div style={{ marginLeft: "5px" }}>
                <p>Bình giữ nhiệt Inox 780ml Delites KS</p>
                <p>K530B19 xám</p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <p>Tổng tiền: 108.000đ</p>
              <p className={styles.input}> Xem chi tiểt</p>
            </div>
          </div>
        </div>
        <div className={styles.item}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p>
              <b>Đơn hàng</b> #5966590 <b>Giao trước 21:00 - Thứ Tư (15/02)</b>
            </p>
            <p>Đã nhận hàng</p>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ display: "flex" }}>
              <img
                width={60}
                height={60}
                src="https://cdn.tgdd.vn/Products/Images/5205/233629/delites-ks-k530b19-1-200x200.jpg"
                alt=""
              />
              <div style={{ marginLeft: "5px" }}>
                <p>Bình giữ nhiệt Inox 780ml Delites KS</p>
                <p>K530B19 xám</p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <p>Tổng tiền: 108.000đ</p>
              <p className={styles.input}> Xem chi tiểt</p>
            </div>
          </div>
        </div>
        <div className={styles.item}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p>
              <b>Đơn hàng</b> #5966590 <b>Giao trước 21:00 - Thứ Tư (15/02)</b>
            </p>
            <p>Đã nhận hàng</p>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ display: "flex" }}>
              <img
                width={60}
                height={60}
                src="https://cdn.tgdd.vn/Products/Images/5205/233629/delites-ks-k530b19-1-200x200.jpg"
                alt=""
              />
              <div style={{ marginLeft: "5px" }}>
                <p>Bình giữ nhiệt Inox 780ml Delites KS</p>
                <p>K530B19 xám</p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <p>Tổng tiền: 108.000đ</p>
              <p className={styles.input}> Xem chi tiểt</p>
            </div>
          </div>
        </div>
        <div className={styles.item}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p>
              <b>Đơn hàng</b> #5966590 <b>Giao trước 21:00 - Thứ Tư (15/02)</b>
            </p>
            <p>Đã nhận hàng</p>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ display: "flex" }}>
              <img
                width={60}
                height={60}
                src="https://cdn.tgdd.vn/Products/Images/5205/233629/delites-ks-k530b19-1-200x200.jpg"
                alt=""
              />
              <div style={{ marginLeft: "5px" }}>
                <p>Bình giữ nhiệt Inox 780ml Delites KS</p>
                <p>K530B19 xám</p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <p>Tổng tiền: 108.000đ</p>
              <p className={styles.input}> Xem chi tiểt</p>
            </div>
          </div>
        </div>
        <div className={styles.item}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p>
              <b>Đơn hàng</b> #5966590 <b>Giao trước 21:00 - Thứ Tư (15/02)</b>
            </p>
            <p>Đã nhận hàng</p>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ display: "flex" }}>
              <img
                width={60}
                height={60}
                src="https://cdn.tgdd.vn/Products/Images/5205/233629/delites-ks-k530b19-1-200x200.jpg"
                alt=""
              />
              <div style={{ marginLeft: "5px" }}>
                <p>Bình giữ nhiệt Inox 780ml Delites KS</p>
                <p>K530B19 xám</p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <p>Tổng tiền: 108.000đ</p>
              <p className={styles.input}> Xem chi tiểt</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
